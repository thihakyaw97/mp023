module.exports = {


  friendlyName: 'Delete',


  description: 'Delete johan.',


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

    await sails.helpers.johanSortingRowDelete(inputs.id);

    await Johan.destroy({
      _id: inputs.id
    });
    //Socket
    sails.sockets.join(this.req, 'johan');
    var johan = await Johan.find().sort('sort ASC');;
    sails.sockets.broadcast('johan', 'getAllJohan', johan);
    // All done.
    return exits.success();


  }


};
