module.exports = {


  friendlyName: 'Get',


  description: 'Get script.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var scripts = await Script.find();

    return this.res.json(scripts);

  }


};
