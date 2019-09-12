//ADD MORE INPUTS FOR Scripts
//ADD MORE INPUTS FOR Scripts
//ADD MORE INPUTS FOR Scripts


//Response Text
//Response Text

$(document).on("click", '#scriptResponseTextAdd', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#scriptResponseTextNewInputs").append(
    `
      <div class="input-field col s12 ` + id + `">
      <input placeholder="The shell script response..." id="scriptResponseText" type="text"
        name="scriptResponseText[]" class="validate scriptResponseText">
      <label for="scriptResponseText" class="active">What did the shell script response say?
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//Response Text
//Response Text

//Response Text If Fail
//Response Text If Fail

$(document).on("click", '#scriptResponseTextIfFailAdd', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#scriptResponseTextIfFailNewInputs").append(
    `
      <div class="input-field col s12 ` + id + `">
      <input placeholder="If something goes wrong, what will be the response..." id="scriptResponseTextIfFail"
        type="text" name="scriptResponseTextIfFail[]" class="validate scriptResponseText">
      <label for="scriptResponseTextIfFail" class="active">What did the shell script response say if fail?
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//Response Text If Fail
//Response Text If Fail

//ASCII image
//ASCII image
$(document).on("click", '#scriptAsciiTextAdd', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#scriptAsciiTextNewInputs").append(
    `
      <div class="input-field col s12 ` + id + `">
      <textarea placeholder="If Johan is trying to show something in photo format." id="scriptAsciiText"
        class="materialize-textarea scriptAsciiText" name="scriptAsciiText"></textarea>
      <label for="scriptAsciiText" class="active">The script trying to show photo in ASCII
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//ASCII image
//ASCII image

//ASCII Animation
//ASCII Animation
$(document).on("click", '#scriptAsciiAnimationAdd', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#scriptAsciiAnimationNewInputs").append(
    `
      <div class="input-field col s12 ` + id + `">
      <textarea placeholder="If the script trying to show something in ASCII animation." id="scriptAsciiAnimation"
        class="materialize-textarea scriptAsciiAnimation" name="scriptAsciiAnimation"></textarea>
      <label for="scriptAsciiAnimation" class="active">Johan's trying to show photo in ASCII animation
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//ASCII Animation
//ASCII Animation

//ADD MORE INPUTS FOR Scripts
//ADD MORE INPUTS FOR Scripts
//ADD MORE INPUTS FOR Scripts



//Edit MORE INPUTS FOR Scripts
//Edit MORE INPUTS FOR Scripts
//Edit MORE INPUTS FOR Scripts


//Response Text
//Response Text

$(document).on("click", '#scriptResponseTextAddEdit', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#scriptResponseTextNewInputsEdit").append(
    `
      <div class="input-field col s12 ` + id + `">
      <input placeholder="The shell script response..." id="scriptResponseTextEdit" type="text"
        name="scriptResponseTextEdit[]" class="validate scriptResponseTextEdit">
      <label for="scriptResponseTextEdit" class="active">What did the shell script response say?
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//Response Text
//Response Text

//Response Text If Fail
//Response Text If Fail

$(document).on("click", '#scriptResponseTextIfFailAddEdit', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#scriptResponseTextIfFailNewInputsEdit").append(
    `
      <div class="input-field col s12 ` + id + `">
      <input placeholder="If something goes wrong, what will be the response..." id="scriptResponseTextIfFailEdit"
        type="text" name="scriptResponseTextIfFailEdit[]" class="validate scriptResponseTextEdit">
      <label for="scriptResponseTextIfFailEdit" class="active">What did the shell script response say if fail?
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//Response Text If Fail
//Response Text If Fail

//ASCII image
//ASCII image
$(document).on("click", '#scriptAsciiTextAddEdit', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#scriptAsciiTextNewInputsEdit").append(
    `
      <div class="input-field col s12 ` + id + `">
      <textarea placeholder="If Johan is trying to show something in photo format." id="scriptAsciiTextEdit"
        class="materialize-textarea scriptAsciiTextEdit" name="scriptAsciiTextEdit"></textarea>
      <label for="scriptAsciiTextEdit" class="active">The script trying to show photo in ASCII
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//ASCII image
//ASCII image

//ASCII Animation
//ASCII Animation
$(document).on("click", '#scriptAsciiAnimationAddEdit', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#scriptAsciiAnimationNewInputsEdit").append(
    `
      <div class="input-field col s12 ` + id + `">
      <textarea placeholder="If the script trying to show something in ASCII animation." id="scriptAsciiAnimationEdit"
        class="materialize-textarea scriptAsciiAnimationEdit" name="scriptAsciiAnimationEdit"></textarea>
      <label for="scriptAsciiAnimationEdit" class="active">Johan's trying to show photo in ASCII animation
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//ASCII Animation
//ASCII Animation

//Edit MORE INPUTS FOR Scripts
//Edit MORE INPUTS FOR Scripts
//Edit MORE INPUTS FOR Scripts



io.socket.on('getAllScripts', function (data) {

  $(".scriptList").remove();
  $(".johanResponseList").remove();

  $.each(data, (index, value) => {
    //console.log(value.responseText);
    $("#scripTable").append(`
    <tr class="scriptList">
    <td>` + value.sort + `</td>
    <td>` + value.scriptText + `</td>
    <td>
        <a class="green-text modal-trigger waves-effect waves-light editScript" href="#scriptEdit"
        data-id"='`+value.id+`'
        data-scriptText='`+value.scriptText+`'
        data-sort='`+value.sort+`'
        data-audio='`+value.audio+`'
        data-description='`+value.description+`'
        data-responseText='[`+value.responseText+`]'
        data-responseTextIfFail='`+value.responseTextIfFail+`'
        data-responseTextDuration='`+value.responseTextDuration+`'
        data-responseTextSpeed='`+value.responseTextSpeed+`'
        data-responseTextFlash='`+value.responseTextFlash+`'
        data-asciiText='`+value.asciiText+`'
        data-asciiTextDuration='`+value.asciiTextDuration+`'
        data-asciiTextSpeed='`+value.asciiTextSpeed+`'
        data-asciiTextFlash='`+value.asciiTextFlash+`'
        data-asciiAnimation='`+value.asciiAnimation+`'
        data-specialAction='`+value.specialAction+`'

        ><i class="material-icons">edit</i></a>
        <a class="red-text modal-trigger waves-effect waves-light deleteScript" href="#scriptDelete" data-id=` + value.id + ` data-text="` + value.scriptText + `"><i class="material-icons">delete</i></a>
    </td>
  </tr>
  `);
  });

  
  $.each(data, (index, value) => {
    $("#johanResponse").append(`
  <option class="johanResponseList" value="` + value.id + `">` + value.scriptText + `</option>
  `);
    
  });
  //INITIALIZING SELECT AGAIN BECAUSE IT KEEP RESETING 
  $('#johanResponse').formSelect();
  //Removing loading
  $("#scriptListLoading").removeClass("active");

});

io.socket.get('/api/v1/script/get', getResponse = (data, jwRes) => {

});


//CREATE SCRIPT
//CREATE SCRIPT
//CREATE SCRIPT
$(document).on("click", '#scriptAdd', function () {

  const data = {
    scriptText: $('#scriptText').val(),
    audio: $('#scriptAudio').val(),
    sort: 1,
    description: $('#scriptDescription').val(),
    responseText: gettingValuesFromInputs($(".scriptResponseText")),
    responseTextIfFail: gettingValuesFromInputs($(".scriptResponseTextIfFail")),
    responseTextDuration: $('#scriptResponseTextDuration').val(),
    responseTextSpeed: $('#scriptResponseTextSpeed').val(),
    responseTextFlash: $('#scriptResponseTextFlash').prop("checked") ? true : false,
    asciiText: gettingValuesFromInputs($('#scriptAsciiText')),
    asciiTextDuration: $('#scriptAsciiTextDuration').val(),
    asciiTextSpeed: $('#scriptAsciiTextSpeed').val(),
    asciiTextFlash: $('#scriptAsciiTextFlash').prop("checked") ? true : false,
    asciiAnimation: gettingValuesFromInputs($('#scriptAsciiAnimation')),
    specialAction: $('#scriptSpecialAction').val()
  };

  io.socket.post('/api/v1/script/create', data, function (resData, jwRes) {
    console.log(resData); // => 200
  });

});
//CREATE SCRIPT
//CREATE SCRIPT
//CREATE SCRIPT


//DELETE SCRIPT
//DELETE SCRIPT
//DELETE SCRIPT
$(document).on("click", '.deleteScript', function () {
  $("#scriptTextNameDelete").text($(this).data('text'));
  $("#deleteScriptModal").attr("data-id", $(this).data('id'));
});
$(document).on("click", '#deleteScriptModal', function () {
  var id = $(this).data('id');
  io.socket.delete('/api/v1/script/delete/' + id, (resData) => {
  });
});
//DELETE SCRIPT
//DELETE SCRIPT
//DELETE SCRIPT

//EDIT SCRIPT
//EDIT SCRIPT
//EDIT SCRIPT
$(document).on("click", '.editScript', function () {

  $('#scriptTextEdit').attr('value',$(this).data('scripttext'));

  $('.scriptResponseTextEdit').attr('value',$(this).data('responsetext'));
  //$(".update-post").attr("data-id", $(this).data('id'));

});

//EDIT SCRIPT
//EDIT SCRIPT
//EDIT SCRIPT