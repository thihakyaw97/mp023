module.exports = {


  friendlyName: 'Sorting row',


  description: '',


  inputs: {
    sort: {
      type: 'string',
      description: 'Sorting the script to show in notepad. rather than managing database asc and dsc, I prefer customizable sorting the scripts.'
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs,exits) {

    //THIS IS SIMPLE ONE. ADDING THE SORTING VALUE BY FINDING THE LARGEST ONE AND ADD +1 TO IT
    if(inputs.sort=="latest"){
      const sorting = await Script.find();
      
      var sort=0;
      for(i=0;i<sorting.length;i++){
        sorting[i].sort>sort?sort=sorting[i].sort:null
      }

      sort++;
      return exits.success(sort);
    }
    //THIS ONE IS INTERSECTIONG 
    else if(await Script.find().where({id:inputs.sort})){
      sorting = await Script.find().where({id:inputs.sort});

      //GETTING THE SORTING NUMBERS
      sorting_update = await Script.find().where({
        sort: {
            '>=':   sorting[0].sort
        }
      }).sort('sort ASC');

      //INCREASING +1 for intersection
      for(i=0;i<sorting_update.length;i++){
        sort_increase = sorting_update[i].sort+1;
        await Script.update({
          _id:sorting_update[i].id
        }).set({
          sort:sort_increase
        })
      }
      
      return exits.success(sorting[0].sort);
    }
  
  }


};

