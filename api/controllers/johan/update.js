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
      type: 'string',
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

    // Add a reference to Script
    response: {
      type: 'string',
      model: 'script'
    },

    responseText: {
      type: 'json',
      columnType:'array',
      description: 'The custom response if the script executed succefully.'
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
      type: 'json',
      columnType:'array',
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

    asciiAnimation: {
      type: 'json',
      columnType:'array',
      description: 'Johan sometimes want to show what he see in ascii animation.',
    },

    cpuUsage: {
      type: 'number',
      description: 'CPU Usage',
    },

    memoryUsage: {
      type: 'number',
      description: 'Memory Usage',
    },

    diskUsage: {
      type: 'number',
      description: 'Memory Usage',
    },
  },


  exits: {
    success:{
      description:"It is success and this scrip has Updated. Don't punish johan too",
    }
  },


  fn: async function (inputs,exits) {
    var sort = await sails.helpers.johanSortingRowUpdate(inputs.sort,inputs.id);
    let updatedJohan = await Johan.update({
        _id: inputs.id
      })
      .set({
        text:inputs.text,
        sort:sort,
        audio:inputs.audio,
        audioPlayTiming:inputs.audioPlayTiming,
        textDuration:inputs.textDuration,
        textSpeed:inputs.textSpeed,
        textFlash:inputs.textFlash,
        response:inputs.response,
        responseText:inputs.responseText,
        responseTextIfFail:inputs.responseTextIfFail,
        responseTextIfYouQuit:inputs.responseTextIfYouQuit,
        responseTextDuration:inputs.responseTextDuration,
        responseTextSpeed:inputs.responseTextSpeed,
        responseTextFlash:inputs.responseTextFlash,
        asciiText:inputs.asciiText,
        asciiTextDuration:inputs.asciiTextDuration,
        asciiTextSpeed:inputs.asciiTextSpeed,
        asciiTextFlash:inputs.asciiTextFlash,
        asciiAnimation:inputs.asciiAnimation,
        cpuUsage:inputs.cpuUsage,
        memoryUsage:inputs.memoryUsage,
        diskUsage:inputs.diskUsage,
      }).fetch();

      sails.sockets.join(this.req, 'johan');

      var johan = await Johan.find().sort('sort ASC');;
  
      sails.sockets.broadcast('johan', 'getAllJohan',johan);
    // All donee
    return exits.success({updatedJohan});
  }


};
