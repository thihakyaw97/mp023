module.exports = {


  friendlyName: 'Get',


  description: 'Get script.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {


    if (!this.req.isSocket) {
      return this.res.badRequest();
    }

    sails.sockets.join(this.req, 'scripts');

    
    var scripts = await Script.find();

    sails.sockets.broadcast('scripts', 'getAllScripts',scripts);



    //return this.res.json(scripts);
  }


};
