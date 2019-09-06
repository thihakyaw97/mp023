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

    var johan = await Johan.find();

    return this.res.json(johan);

  }


};
