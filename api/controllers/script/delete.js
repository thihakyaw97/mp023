module.exports = {


  friendlyName: 'Delete',


  description: 'Delete script.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
  },


  exits: {
    success: {
      description: "Successfully deleted."
    }
  },


  fn: async function (inputs, exits) {

    await sails.helpers.sortingRowDelete(inputs.id);
 


    let id = inputs.id;
    let deleteScript = await Script.destroy({
      _id: id
    }).fetch();
    //Socket
    sails.sockets.join(this.req, 'scripts');
    var scripts = await Script.find().sort('sort ASC');
    sails.sockets.broadcast('scripts', 'getAllScripts', scripts);
    // All done.
    return exits.success(deleteScript);
    

  }


};
