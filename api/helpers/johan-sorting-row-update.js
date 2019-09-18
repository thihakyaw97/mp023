module.exports = {


  friendlyName: 'Johan sorting row update',


  description: '',


  inputs: {
    sort: {
      type: 'string',
      description: 'Sorting the johan speech to show in notepad. rather than managing database asc and dsc, I prefer customizable sorting the scripts.'
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


  fn: async function (inputs,exits) {
    //IF THE CHOICE IS NO CHANGE, IT SET HTHE ORIGINGL SORT VALUE
    if (inputs.sort == "nochange") {

      sort = await Johan.find().where({
        id: inputs.id
      });
      return exits.success(sort[0].sort);
    }

    //IF THE CHOICE IS THE 'latest', do thiss
    else if (inputs.sort == "latest") {
      sort = await Johan.find().where({
        id: inputs.id
      });
      //FINDING THE SORTING VALUE THAT IS GREATER THAN CURRENT VALUE
      sorting_largest = await Johan.find().where({
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
          await Johan.update({
            _id: sorting_largest[i].id
          }).set({
            sort: sort_decrease
          })
        }
        return exits.success(sort);
      }
    }


    //THE INTERSECTION
    else if (await Johan.find().where({
        id: inputs.sort
      })) {

      //OUTPUTING COMPARE VALUES FROM SORT AND SELECTED ID 
      sorting_from_sort = await Johan.find().where({
        id: inputs.sort
      });
      sorting_from_id = await Johan.find().where({
        id: inputs.id
      });

      //IF YOU SELECTED THE SAME SORTING PLACE
      if (sorting_from_sort[0].sort == sorting_from_id[0].sort) {
        return exits.success(sorting_from_id[0].sort);
      }
      //IF YOU SELECTED THE Greater SORTING PLACE
      else if (sorting_from_id[0].sort > sorting_from_sort[0].sort) {
        //return exits.success('greater');
        //FINDING THE SORTING VALUE THAT IS GREATER THAN CURRENT VALUE
        sorting = await Johan.find().where({
          sort: {
            '>=':sorting_from_sort[0].sort,
            '<': sorting_from_id[0].sort,
          }
        }).sort('sort ASC');
        
        //INCREASING +1 for intersection
        for (i = 0; i < sorting.length; i++) {
          sort_increase = sorting[i].sort + 1;
          await Johan.update({
            _id: sorting[i].id
          }).set({
            sort: sort_increase
          })
        }
        
        return exits.success(sorting_from_sort[0].sort);

      }
      //IF YOU SELECTED THE Lesser SORTING PLACE
      else if (sorting_from_id[0].sort < sorting_from_sort[0].sort) {
        //return exits.success('lesser');
        sorting = await Johan.find().where({
          sort: {
            '>=': sorting_from_id[0].sort,
            '<':sorting_from_sort[0].sort
          }
        }).sort('sort ASC');
        
        //INCREASING -1 for intersection
        for (i = 0; i < sorting.length; i++) {
          sort_increase = sorting[i].sort - 1;
          await Johan.update({
            _id: sorting[i].id
          }).set({
            sort: sort_increase
          })
        }
        
        sorting_from_sort = sorting_from_sort[0].sort-1;
        return exits.success(sorting_from_sort);
      }

    }
  }


};

