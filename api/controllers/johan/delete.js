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

    let id = inputs.id;
    await Johan.destroy({
      _id: id
    });
    //Socket
    sails.sockets.join(this.req, 'johan');
    var johan = await Johan.find();
    sails.sockets.broadcast('johan', 'getAllJohan', johan);
    // All done.
    return exits.success();


  }


};
