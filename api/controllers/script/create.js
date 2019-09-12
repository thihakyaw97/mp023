module.exports = {


  friendlyName: 'Create',


  description: 'Create script.',


  inputs: {
    scriptText: {
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
    audio: {
      type: 'string',
      example: 'help_me.wav',
      description: 'The response beep boop from the program'
    },
    description: {
      type: 'string',
      required: true,
      description: 'The description of script.'
    },

    responseText: {
      type: 'json',
      description: 'The response if the script executed succefully.'
    },
    responseTextIfFail: {
      type: 'json',
      columnType:'array',
      required: true,
      description: 'The response if the script executed succefully fail.'
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
      description: 'Script sometimes want to show in ascii.',
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
      description: 'Script sometimes want to show what he see in ascii animation.',
    },



    specialAction: {
      type: 'string',
      description: 'for exiting or clearing texts, the instruction is needed and it is implemented here.'
    },
  },


  exits: {
    success:{
      description:"It is success and new scrip has addded. Don't punish johan too",
    }
  },


  fn: async function (inputs,exits ) {

    //Create
    const newScript = await Script.create({
      scriptText:inputs.scriptText,
      sort:inputs.sort,
      audio:inputs.audio,
      description:inputs.description,
      responseText:inputs.responseText,
      responseTextIfFail:inputs.responseTextIfFail,
      responseTextDuration:inputs.responseTextDuration,
      responseTextSpeed:inputs.responseTextSpeed,
      responseTextFlash:inputs.responseTextFlash,
      asciiText:inputs.asciiText,
      asciiTextDuration:inputs.asciiTextDuration,
      asciiTextSpeed:inputs.asciiTextSpeed,
      specialAction:inputs.specialAction,
      asciiTextFlash:inputs.asciiTextFlash,
      asciiAnimation:inputs.asciiAnimation,
    }).fetch();

    sails.sockets.join(this.req, 'scripts');

    var scripts = await Script.find();

    sails.sockets.broadcast('scripts', 'getAllScripts',scripts);
    
    // All done.
    return exits.success(newScript);

  }


};
