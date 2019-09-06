module.exports = {


  friendlyName: 'Update',


  description: 'Update johan.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
    text: {
      type: 'json',
      columnType:'array',
      required: true,
      example: 'the numbers. i am seeing but i am blind. i am hearing but i am deaf. the signals are coming.',
      description: 'Johan text output'
    },

    sort: {
      type: 'number',
      required: true,
      description: 'Sorting the texts. rather than managing database asc and dsc, I prefer customizable sorting.'
    },

    audio: {
      type: 'string',
      example: 'help_me.wav',
      description: 'The response of johan in audio'
    },

    audioPlayTiming: {
      type: 'boolean',
      description: 'The decision of playing johan audio after text or while loading the text'
    },

    textDuration: {
      type: 'number',
      description: 'Duration of each text.'
    },

    textSpeed: {
      type: 'number',
      description: 'The speed of displaying johan text.'
    },

    textFlash: {
      type: 'boolean',
      description: 'determine text message is flashing message or not',
    },

    needResponse: {
      type: 'boolean',
      description: 'True when johan needs your response'
    },

    // Add a reference to Script
    response: {
      type: 'string',
      model: 'script'
    },

    responseTextIfFail: {
      type: 'json',
      columnType:'array',
      description: 'What johan will response if the script is wrong...',
    },

    responseTextIfYouQuit: {
      type: 'json',
      columnType:'array',
      description: 'What johan will response if you accidentally quit the game.',
    },

    responseTextDuration: {
      type: 'number',
      description: 'Duration of between each response texts.',
    },

    responseTextSpeed: {
      type: 'number',
      description: 'Speed response texts.',
    },

    responseTextFlash: {
      type: 'boolean',
      description: 'determine response message is flashing message or not',
    },

    asciiText: {
      type: 'string',
      description: 'Johan sometimes want to show what he see in ascii.',
    },

    asciiTextDuration: {
      type: 'number',
      description: 'Duration of between each ascii texts.',
    },

    asciiTextSpeed: {
      type: 'number',
      description: 'Speed response texts.',
    },

    asciiTextFlash: {
      type: 'boolean',
      description: 'determine response message is flashing message or not',
    },

    savePoint: {
      type: 'string',
      description: 'If you are bored and want to play later, this column will save the program for you.',
    },
  },


  exits: {
    success:{
      description:"It is success and this scrip has Updated. Don't punish johan too",
    }
  },


  fn: async function (inputs,exits) {
    let id = inputs.id;
    let updatedJohan = await Johan.update({
        _id: id
      })
      .set({
        text:inputs.text,
        sort:inputs.sort,
        audio:inputs.audio,
        audioPlayTiming:inputs.audioPlayTiming,
        textDuration:inputs.textDuration,
        textSpeed:inputs.textSpeed,
        textFlash:inputs.textFlash,
        needResponse:inputs.needResponse,
        response:inputs.response,
        responseTextIfFail:inputs.responseTextIfFail,
        responseTextIfYouQuit:inputs.responseTextIfYouQuit,
        responseTextDuration:inputs.responseTextDuration,
        responseTextSpeed:inputs.responseTextSpeed,
        responseTextFlash:inputs.responseTextFlash,
        asciiText:inputs.asciiText,
        asciiTextDuration:inputs.asciiTextDuration,
        asciiTextSpeed:inputs.asciiTextSpeed,
        asciiTextFlash:inputs.asciiTextFlash,
      }).fetch();

    // All donee
    return exits.success({updatedJohan});
  }


};
