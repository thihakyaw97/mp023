module.exports = {


  friendlyName: 'Get',


  description: 'Get johan.',


  inputs: {

  },


  exits: {
    success:{
      description:"Successfully deleted."
    }
  },


  fn: async function (inputs) {

    if (!this.req.isSocket) {
      return this.res.badRequest();
    }

    sails.sockets.join(this.req, 'johan');

    
    var johan = await Johan.find();

    sails.sockets.broadcast('johan', 'getAllJohan',johan);



  }


};
