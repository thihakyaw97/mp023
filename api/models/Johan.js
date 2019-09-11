/**
 * Johan.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
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
      example: 'help_me.wav',
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
      model: 'script'
    },

    customizeResponseText:{
      type: 'boolean',
      description: 'Customizing response text'
    },

    responseText: {
      type: 'json',
      columnType:'array',
      required: true,
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

    savePoint: {
      type: 'string',
      description: 'If you are bored and want to play later, this column will save the program for you.',
    },

  },

};
