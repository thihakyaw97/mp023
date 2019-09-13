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
        type="text" name="scriptResponseTextIfFail[]" class="validate scriptResponseTextIfFail">
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
        class="materialize-textarea scriptAsciiText" name="scriptAsciiText[]"></textarea>
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
        class="materialize-textarea scriptAsciiAnimation" name="scriptAsciiAnimation[]"></textarea>
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
      <div class="input-field col s12 ` + id + ` scriptResponseTextRemove">
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
      <div class="input-field col s12 ` + id + ` scriptResponseTextIfFailRemove">
      <input placeholder="If something goes wrong, what will be the response..." id="scriptResponseTextIfFailEdit"
        type="text" name="scriptResponseTextIfFailEdit[]" class="validate scriptResponseTextIfFailEdit">
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
      <div class="input-field col s12 ` + id + ` scriptAsciiTextRemove">
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
      <div class="input-field col s12 ` + id + ` scriptAsciiAnimationRemove">
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
    const editId = tempIdGenerate();
    const deleteId = tempIdGenerate();
    //console.log(value.responseText);
    $("#scripTable").append(`
    <tr class="scriptList">
    <td>` + value.sort + `</td>
    <td>` + value.scriptText + `</td>
    <td>
        <a class="green-text modal-trigger waves-effect waves-light editScript ` + editId + `" href="#scriptEdit"
        ><i class="material-icons">edit</i></a>
        <a class="red-text modal-trigger waves-effect waves-light deleteScript ` + deleteId + `" href="#scriptDelete"><i class="material-icons">delete</i></a>
    </td>
  </tr>
  `, );
    $('.' + editId).data('id', value.id);
    $('.' + editId).data('scriptText', value.scriptText);
    $('.' + editId).data('sort', value.sort);
    $('.' + editId).data('audio', value.audio);
    $('.' + editId).data('description', value.description);
    $('.' + editId).data('responseText', value.responseText);
    $('.' + editId).data('responseTextIfFail', value.responseTextIfFail);
    $('.' + editId).data('responseTextDuration', value.responseTextDuration);
    $('.' + editId).data('responseTextSpeed', value.responseTextSpeed);
    $('.' + editId).data('responseTextFlash', value.responseTextFlash);
    $('.' + editId).data('asciiText', value.asciiText);
    $('.' + editId).data('asciiTextDuration', value.asciiTextDuration);
    $('.' + editId).data('asciiTextSpeed', value.asciiTextSpeed);
    $('.' + editId).data('asciiTextFlash', value.asciiTextFlash);
    $('.' + editId).data('asciiAnimation', value.asciiAnimation);
    $('.' + editId).data('specialAction', value.specialAction);

    $('.' + deleteId).data('id', value.id);
    $('.' + deleteId).data('text', value.scriptText);
  });




  $.each(data, (index, value) => {
    $("#johanResponse").append(`
  <option class="johanResponseList" value="` + value.id + `">` + value.scriptText + `</option>
  `);

  });
  //INITIALIZING SELECT AGAIN BECAUSE IT KEEP RESETING 
  $('#johanResponse').formSelect();

  $.each(data, (index, value) => {
    $("#johanResponseEdit").append(`
  <option class="johanResponseListEdiy" value="` + value.id + `">` + value.scriptText + `</option>
  `);

  });
  //INITIALIZING SELECT AGAIN BECAUSE IT KEEP RESETING 
  $('#johanResponseEdit').formSelect();

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
    asciiText: gettingValuesFromInputs($('.scriptAsciiText')),
    asciiTextDuration: $('#scriptAsciiTextDuration').val(),
    asciiTextSpeed: $('#scriptAsciiTextSpeed').val(),
    asciiTextFlash: $('#scriptAsciiTextFlash').prop("checked") ? true : false,
    asciiAnimation: gettingValuesFromInputs($('.scriptAsciiAnimation')),
    specialAction: $('#scriptSpecialAction').val()
  };


  io.socket.post('/api/v1/script/create', data, function (resData, jwRes) {
    console.log(resData); // => 200
  });

});
//CREATE SCRIPT
//CREATE SCRIPT
//CREATE SCRIPT




//EDIT SCRIPT
//EDIT SCRIPT
//EDIT SCRIPT
$(document).on("click", '.editScript', function () {

  $(".scriptResponseTextRemove").remove();
  $(".scriptResponseTextIfFailRemove").remove();
  $(".scriptAsciiTextRemove").remove();
  $(".scriptAsciiAnimationRemove").remove();

  $('#scriptTextEdit').attr('value', $(this).data('scriptText'));
  $('#scriptDescriptionEdit').attr('value', $(this).data('description'));

  $('#scriptResponseTextEdit').attr('value', $(this).data('responseText')[0]);


  if ($(this).data('responseText').length > 1) {
    scriptResponseTextEdit = $(this).data('responseText');
    for (i = 1; i < scriptResponseTextEdit.length; i++) {
      id = tempIdGenerate();
      $("#scriptResponseTextNewInputsEdit").append(
        `
        <div class="input-field col s12 ` + id + ` scriptResponseTextRemove">
        <input placeholder="The shell script response..." id="scriptResponseTextEdit" type="text"
          name="scriptResponseTextEdit[]" class="validate scriptResponseTextEdit" value="` + scriptResponseTextEdit[i] + `">
        <label for="scriptResponseTextEdit" class="active">What did the shell script response say?
        <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
        class="material-icons">cancel</i></button>
        </label>
      </div>
        `
      );
    }
  }

  $('#scriptResponseTextIfFailEdit').attr('value', $(this).data('responseTextIfFail')[0]);


  if ($(this).data('responseTextIfFail').length > 1) {
    scriptResponseTextIfFailEdit = $(this).data('responseTextIfFail');
    for (i = 1; i < scriptResponseTextIfFailEdit.length; i++) {
      id = tempIdGenerate();
      $("#scriptResponseTextIfFailNewInputsEdit").append(
        `
          <div class="input-field col s12 ` + id + ` scriptResponseTextIfFailRemove">
          <input placeholder="If something goes wrong, what will be the response..." id="scriptResponseTextIfFailEdit"
            type="text" name="scriptResponseTextIfFailEdit[]" class="validate scriptResponseTextIfFailEdit" value="` + scriptResponseTextIfFailEdit[i] + `">
          <label for="scriptResponseTextIfFailEdit" class="active">What did the shell script response say if fail?
          <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
          class="material-icons">cancel</i></button>
          </label>
        </div>
            `
      );
    }
  }

  $('#scriptResponseTextIfFailEdit').attr('value', $(this).data('responseTextIfFail'));
  $('#scriptResponseTextDurationEdit').attr('value', $(this).data('responseTextDuration'));
  $('#scriptResponseTextSpeedEdit').attr('value', $(this).data('responseTextSpeed'));

  $(this).data('responseTextFlash') == true ? $('#scriptResponseTextFlashEdit').attr('checked', 'checked') : null;


  $('#scriptAsciiTextEdit').val($(this).data('asciiText')[0]);

  if ($(this).data('asciiText').length > 1) {
    scriptAsciiTextEdit = $(this).data('asciiText');
    for (i = 1; i < scriptAsciiTextEdit.length; i++) {
      id = tempIdGenerate();
      $("#scriptAsciiTextNewInputsEdit").append(
        `
          <div class="input-field col s12 ` + id + ` scriptAsciiTextRemove">
          <textarea placeholder="If Johan is trying to show something in photo format." id="scriptAsciiTextEdit"
            class="materialize-textarea scriptAsciiTextEdit" name="scriptAsciiTextEdit">` + scriptAsciiTextEdit[i] + `</textarea>
          <label for="scriptAsciiTextEdit" class="active">The script trying to show photo in ASCII
          <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
          class="material-icons">cancel</i></button>
          </label>
        </div>
            `
      );
    }
  }

  $('#scriptAsciiTextDurationEdit').attr('value', $(this).data('asciiTextDuration'));
  $('#scriptAsciiTextSpeedEdit').attr('value', $(this).data('asciiTextSpeed'));

  $(this).data('asciiTextFlash') == true ? $('#scriptAsciiTextFlashEdit').attr('checked', 'checked') : null;


  $('#scriptAsciiAnimationEdit').val($(this).data('asciiAnimation')[0]);

  if ($(this).data('asciiAnimation').length > 1) {
    scriptAsciiAnimationEdit = $(this).data('asciiAnimation');
    for (i = 1; i < scriptAsciiAnimationEdit.length; i++) {
      id = tempIdGenerate();
      $("#scriptAsciiAnimationNewInputsEdit").append(
        `
          <div class="input-field col s12 ` + id + ` scriptAsciiAnimationRemove">
          <textarea placeholder="If the script trying to show something in ASCII animation." id="scriptAsciiAnimationEdit"
            class="materialize-textarea scriptAsciiAnimationEdit" name="scriptAsciiAnimationEdit">` + scriptAsciiAnimationEdit[i] + `</textarea>
          <label for="scriptAsciiAnimationEdit" class="active">Johan's trying to show photo in ASCII animation
          <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
          class="material-icons">cancel</i></button>
          </label>
        </div>
            `
      );
    }
  }

  $('#scriptSpecialActionEdit').attr('value', $(this).data('specialAction'));


  $("#scriptUpdate").data("id", $(this).data('id'));
  //$('.scriptResponseTextEdit').attr('value',$(this).data('responseText'));
  //$(".update-post").attr("data-id", $(this).data('id'));
});

//EDIT SCRIPT
//EDIT SCRIPT
//EDIT SCRIPT

//Update SCRIPT
//Update SCRIPT
//Update SCRIPT
$(document).on("click", '#scriptUpdate', function () {
  const data = {
    scriptText: $('#scriptTextEdit').val(),
    audio: $('#scriptAudioEdit').val(),
    sort: 1,
    description: $('#scriptDescriptionEdit').val(),
    responseText: gettingValuesFromInputs($(".scriptResponseTextEdit")),
    responseTextIfFail: gettingValuesFromInputs($(".scriptResponseTextIfFailEdit")),
    responseTextDuration: $('#scriptResponseTextDurationEdit').val(),
    responseTextSpeed: $('#scriptResponseTextSpeedEdit').val(),
    responseTextFlash: $('#scriptResponseTextFlashEdit').prop("checked") ? true : false,
    asciiText: gettingValuesFromInputs($('.scriptAsciiTextEdit')),
    asciiTextDuration: $('#scriptAsciiTextDurationEdit').val(),
    asciiTextSpeed: $('#scriptAsciiTextSpeedEdit').val(),
    asciiTextFlash: $('#scriptAsciiTextFlashEdit').prop("checked") ? true : false,
    asciiAnimation: gettingValuesFromInputs($('.scriptAsciiAnimationEdit')),
    specialAction: $('#scriptSpecialActionEdit').val()
  };

  $('.modal').modal('close');
  //Add loading
  $("#scriptListLoading").addClass("active");

  io.socket.put('/api/v1/script/update/' + $(this).data('id'), data, function (resData, jwRes) {
    //Removing loading
    $("#scriptListLoading").removeClass("active");
  });


});

//Update  SCRIPT
//Update  SCRIPT
//Update  SCRIPT


//DELETE SCRIPT
//DELETE SCRIPT
//DELETE SCRIPT
$(document).on("click", '.deleteScript', function () {
  $("#scriptTextNameDelete").text($(this).data('text'));
  $("#deleteScriptModal").attr("data-id", $(this).data('id'));
});
$(document).on("click", '#deleteScriptModal', function () {
  var id = $(this).data('id');
  $('.modal').modal('close');
  //Add loading
  $("#scriptListLoading").addClass("active");
  io.socket.delete('/api/v1/script/delete/' + id, (resData) => {

    //Removing loading
    $("#scriptListLoading").removeClass("active");

  });
});
//DELETE SCRIPT
//DELETE SCRIPT
//DELETE SCRIPT
