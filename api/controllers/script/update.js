module.exports = {


  friendlyName: 'Update',


  description: 'Update script.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
    script: {
      type: 'string',
      required: true,
      example: 'mp load mp_23',
      description: 'This is the script to make johan respone sometimes.'
    },
    sort: {
      type: 'number',
      required: true,
      description: 'Sorting the script to show in notepad. rather than managing database asc and dsc, I prefer customizable sorting the scripts.'
    },

    description: {
      type: 'string',
      required: true,
      description: 'The description of script.'
    },

    responseText: {
      type: 'json',
      required: true,
      description: 'The response if the script executed succefully.'
    },

    responseTextDuration: {
      type: 'number',
      description: 'Duration of between each response texts.',
    },

    responseTextSpeed: {
      type: 'number',
      description: 'Speed response texts.',
    },
    responseTextIfFail: {
      type: 'string',
      required: true,
      description: 'The response if the script executed succefully fail.'
    },

    specialAction: {
      type: 'string',
      description: 'for exiting or clearing texts, the instruction is needed and it is implemented here.'
    },
  },


  exits: {
    success:{
      description:"It is success and this scrip has Updated. Don't punish johan too",
    }
  },


  fn: async function (inputs,exits) {

    let id = inputs.id;
    let updatedScript = await Script.update({
        _id: id
      })
      .set({
        script:inputs.script,
        sort:inputs.sort,
        description:inputs.description,
        responseText:inputs.responseText,
        responseTextIfFail:inputs.responseTextIfFail,
        responseTextDuration:inputs.responseTextDuration,
        responseTextSpeed:inputs.responseTextSpeed,
        responseTextFlash:inputs.responseTextFlash,
        specialAction:inputs.specialAction,
      }).fetch();

    // All donee
    return exits.success(updatedScript);



  }


};