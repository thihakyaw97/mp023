module.exports = {


  friendlyName: 'Sorting row update',


  description: '',


  inputs: {

    sort: {
      type: 'string',
      description: 'Sorting the script to show in notepad. rather than managing database asc and dsc, I prefer customizable sorting the scripts.'
    },

    id: {
      type: 'string',
      required: true,
    },

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    //IF THE CHOICE IS NO CHANGE, IT SET HTHE ORIGINGL SORT VALUE
    if (inputs.sort == "nochange") {

      sort = await Script.find().where({
        id: inputs.id
      });
      return exits.success(sort[0].sort);
    } 
    
    else if (inputs.sort == "latest") {
      sort = await Script.find().where({
        id: inputs.id
      });
      //FINDING THE SORTING VALUE THAT IS GREATER THAN CURRENT VALUE
      sorting_largest = await Script.find().where({
        sort: {
          '>': sort[0].sort
        }
      }).sort('sort ASC');
      //IF THE SORTING IS ALREADY THE GREATEST, SET THE CURRENT VALUE BY SETTING INDEX [0]
      if (sorting_largest.length == 0) {
        return exits.success(sort[0].sort);
      }
      //OTHER WISE FOLLOW THIS
      else {
        //DECREASE THE VALUES THAT HAS GREATER VALUE THAN CURRENT SORTING VALUE
        for (i = 0; i < sorting_largest.length; i++) {
          //SETTING THE LARGEST VALUE EACH LOOP AS IT IS SORTED WITH ASC
          sort = sorting_largest[i].sort;
          //DECREASING EACH VALUE TO BACKWARD THE UPCOMING GREATEST SORTING VALUE
          sort_decrease = sorting_largest[i].sort - 1;
          await Script.update({
            _id: sorting_largest[i].id
          }).set({
            sort: sort_decrease
          })
        }
        return exits.success(sort);
      }

      
    }


  }


};
