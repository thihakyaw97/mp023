//ADD MORE INPUTS FOR JOHAN
//ADD MORE INPUTS FOR JOHAN
//ADD MORE INPUTS FOR JOHAN


//Johan Text
//Johan Text

$(document).on("click", '#johanTextAdd', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#johanTextNewInputs").append(
    `
      <div class="input-field col s12 ` + id + `">
      <input placeholder="Johan is trying to say something..."  id="johanText" type="text" name="johanText[]"
        class="validate johanText">
      <label for="johanText" class="active">What did Johan say?
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>

    </div>
        `
  );
});


//Johan Text
//Johan Text

//Customize Response Text
//Customize Response Text
$(document).on("click", '#johanResponseTextAdd', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#johanResponseTextNewInputs").append(
    `
      <div class="input-field col s12 ` + id + `">
      <input placeholder="Johan is trying to say something..." id="johanResponseText" type="text"
        name="johanResponseText[]" class="validate johanResponseText">
      <label for="johanResponseText" class="active">What did
        the shell script response (Customize Text)
        <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
        class="material-icons">cancel</i></button>
        </label>
    </div>
        `
  );
});

//Customize Response Text
//Customize Response Text

//Response Text if fail
//Response Text if fail
$(document).on("click", '#johanResponseTextIfFailAdd', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#johanResponseTextIfFailNewInputs").append(
    `
      <div class="input-field col s12 ` + id + `">
      <input placeholder="You type the wrong script and the mp program said..." id="johanResponseTextIfFail"
        type="text" name="johanResponseTextIfFail[]" class="validate johanResponseTextIfFail">
      <label for="johanResponseTextIfFail" class="active">What did mp program response when you type wrong script?
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
        class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//Response Text if fail
//Response Text if fail

//Response Text for quitting
//Response Text for quitting
$(document).on("click", '#johanResponseTextIfYouQuitAdd', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#johanResponseTextIfYouQuitNewInputs").append(
    `
      <div class="input-field col s12 ` + id + `">
      <input placeholder="You quit and open the mp program again. mp program said..."
        id="johanResponseTextIfYouQuit" type="text" name="johanResponseTextIfYouQuit[]"
        class="validate johanResponseTextIfYouQuit">
      <label for="johanResponseTextIfYouQuit" class="active">What did mp program response after you turn on the mp program
        again?
        <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
        class="material-icons">cancel</i></button>
        </label>
    </div>
        `
  );
});

//Response Text for quitting
//Response Text for quitting

//ASCII image
//ASCII image
$(document).on("click", '#johanAsciiTextAdd', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#johanAsciiTextNewInputs").append(
    `
      <div class="input-field col s12 ` + id + `">
      <textarea placeholder="If Johan is trying to show something in photo format." id="johanAsciiText"
        class="materialize-textarea johanAsciiText" name="johanAsciiText"></textarea>
      <label for="johanAsciiText" class="active">Johan's trying to show photo in ASCII
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
$(document).on("click", '#johanAsciiAnimationAdd', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#johanAsciiAnimationNewInputs").append(
    `
      <div class="input-field col s12 ` + id + `">
      <textarea placeholder="If Johan is trying to show something in ASCII animation." id="johanAsciiAnimation"
        class="materialize-textarea johanAsciiAnimation" name="johanAsciiAnimation"></textarea>
      <label for="johanAsciiAnimation" class="active">Johan's trying to show photo in ASCII animation
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//ASCII Animation
//ASCII Animation

//ADD MORE INPUTS FOR JOHAN
//ADD MORE INPUTS FOR JOHAN
//ADD MORE INPUTS FOR JOHAN


//ADD MORE Edit INPUTS FOR JOHAN
//ADD MORE Edit INPUTS FOR JOHAN
//ADD MORE Edit INPUTS FOR JOHAN


//Johan Text
//Johan Text

$(document).on("click", '#johanTextAddEdit', function () {
  const id = tempIdGenerate();
  $("#johanTextNewInputsEdit").append(
    `
      <div class="input-field col s12 ` + id + ` johanTextRemove">
      <input placeholder="Johan is trying to say something..."  id="johanTextEdit" type="text" name="johanTextEdit[]"
        class="validate johanTextEdit">
      <label for="johanTextEdit" class="active">What did Johan say?
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>

    </div>
        `
  );
});


//Johan Text
//Johan Text

//Customize Response Text
//Customize Response Text
$(document).on("click", '#johanResponseTextAddEdit', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#johanResponseTextNewInputsEdit").append(
    `
      <div class="input-field col s12 ` + id + ` johanResponseTextRemove">
      <input placeholder="Johan is trying to say something..." id="johanResponseTextEdit" type="text"
        name="johanResponseTextEdit[]" class="validate johanResponseTextEdit">
      <label for="johanResponseTextEdit" class="active">What did
        the shell script response (Customize Text)
        <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
        class="material-icons">cancel</i></button>
        </label>
    </div>
        `
  );
});

//Customize Response Text
//Customize Response Text

//Response Text if fail
//Response Text if fail
$(document).on("click", '#johanResponseTextIfFailAddEdit', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#johanResponseTextIfFailNewInputsEdit").append(
    `
      <div class="input-field col s12 ` + id + ` johanResponseTextIfFailRemove">
      <input placeholder="You type the wrong script and the mp program said..." id="johanResponseTextIfFailEdit"
        type="text" name="johanResponseTextIfFailEdit[]" class="validate johanResponseTextIfFailEdit">
      <label for="johanResponseTextIfFailEdit" class="active">What did mp program response when you type wrong script?
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
        class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//Response Text if fail
//Response Text if fail

//Response Text for quitting
//Response Text for quitting
$(document).on("click", '#johanResponseTextIfYouQuitAddEdit', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#johanResponseTextIfYouQuitNewInputsEdit").append(
    `
      <div class="input-field col s12 ` + id + ` johanResponseTextIfYouQuitRemove">
      <input placeholder="You quit and open the mp program again. mp program said..."
        id="johanResponseTextIfYouQuitEdit" type="text" name="johanResponseTextIfYouQuitEdit[]"
        class="validate johanResponseTextIfYouQuitEdit">
      <label for="johanResponseTextIfYouQuitEdit" class="active">What did mp program response after you turn on the mp program
        again?
        <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
        class="material-icons">cancel</i></button>
        </label>
    </div>
        `
  );
});

//Response Text for quitting
//Response Text for quitting

//ASCII image
//ASCII image
$(document).on("click", '#johanAsciiTextAddEdit', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#johanAsciiTextNewInputsEdit").append(
    `
      <div class="input-field col s12 ` + id + ` johanAsciiTextRemove">
      <textarea placeholder="If Johan is trying to show something in photo format." id="johanAsciiTextEdit"
        class="materialize-textarea johanAsciiTextEdit" name="johanAsciiTextEdit"></textarea>
      <label for="johanAsciiTextEdit" class="active">Johan's trying to show photo in ASCII
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
$(document).on("click", '#johanAsciiAnimationAddEdit', function () {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  $("#johanAsciiAnimationNewInputsEdit").append(
    `
      <div class="input-field col s12 ` + id + ` johanAsciiAnimationRemove">
      <textarea placeholder="If Johan is trying to show something in ASCII animation." id="johanAsciiAnimationEdit"
        class="materialize-textarea johanAsciiAnimationEdit" name="johanAsciiAnimationEdit"></textarea>
      <label for="johanAsciiAnimationEdit" class="active">Johan's trying to show photo in ASCII animation
      <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
      class="material-icons">cancel</i></button>
      </label>
    </div>
        `
  );
});

//ASCII Animation
//ASCII Animation

//ADD MORE Edit INPUTS FOR JOHAN
//ADD MORE Edit INPUTS FOR JOHAN
//ADD MORE Edit INPUTS FOR JOHAN

io.socket.on('getAllJohan', function (data) {

  $(".johanList").remove();

  $.each(data, (index, value) => {

    const editId = tempIdGenerate();
    const deleteId = tempIdGenerate();

    $("#johanList").append(`

    <div class="col s12 johanList">
      <div class="card grey darken-3">
        <div class="card-content white-text">
          <p>` + value.text + `</p>
        </div>
        <div class="card-action right-align">
          <a class="modal-trigger waves-effect waves-light editJohan ` + editId + `" href="#johanEdit"><i class="material-icons green-text">edit</i></a>
          <a class="modal-trigger waves-effect waves-light deleteJohan ` + deleteId + `" href="#johanDelete"><i class="material-icons red-text">delete</i></a>
        </div>
      </div>
    </div>
  `);

    $('.' + editId).data('id', value.id);
    $('.' + editId).data('text', value.text);
    $('.' + editId).data('audio', value.audio);
    $('.' + editId).data('audioPlayTiming', value.audioPlayTiming);
    $('.' + editId).data('textDuration', value.textDuration);
    $('.' + editId).data('textSpeed', value.textSpeed);
    $('.' + editId).data('textFlash', value.textFlash);
    $('.' + editId).data('response', value.response);
    $('.' + editId).data('responseText', value.responseText);
    $('.' + editId).data('responseTextIfFail', value.responseTextIfFail);
    $('.' + editId).data('responseTextIfYouQuit', value.responseTextIfYouQuit);
    $('.' + editId).data('responseTextDuration', value.responseTextDuration);
    $('.' + editId).data('responseTextSpeed', value.responseTextSpeed);
    $('.' + editId).data('responseTextFlash', value.responseTextFlash);
    $('.' + editId).data('asciiText', value.asciiText);
    $('.' + editId).data('asciiTextDuration', value.asciiTextDuration);
    $('.' + editId).data('asciiTextSpeed', value.asciiTextSpeed);
    $('.' + editId).data('asciiTextFlash', value.asciiTextFlash);
    $('.' + editId).data('asciiAnimation', value.asciiAnimation);
    $('.' + editId).data('cpuUsage', value.cpuUsage);
    $('.' + editId).data('memoryUsage', value.memoryUsage);
    $('.' + editId).data('diskUsage', value.diskUsage);


    $('.' + deleteId).data('id', value.id);
    $('.' + deleteId).data('text', value.text);
    $('.' + deleteId).data('sort', value.sort);

  });


  //Removing loading
  $("#johanListLoading").removeClass("active");

});

io.socket.get('/api/v1/johan/get', getResponse = (data, jwRes) => {

});

$(document).on("click", '#johanAdd', function () {

  const data = {
    text: gettingValuesFromInputs($(".johanText")),
    audio: $('#johanAudio').val(),
    sort: 1,
    audioPlayTiming: $('#johanAudioPlayTiming').prop("checked") ? true : false,
    textDuration: $('#johanTextDuration').val(),
    textSpeed: $('#johanTextSpeed').val(),
    textFlash: $('#johanTextFlash').prop("checked") ? true : false,

    response: $('#johanResponse').val(),
    responseText: gettingValuesFromInputs($('.johanResponseText')),
    responseTextIfFail: gettingValuesFromInputs($('.johanResponseTextIfFail')),
    responseTextIfYouQuit: gettingValuesFromInputs($('.johanResponseTextIfYouQuit')),
    responseTextDuration: $('#johanResponseTextDuration').val(),
    responseTextSpeed: $('#johanResponseTextSpeed').val(),
    responseTextFlash: $('#johanResponseTextFlash').prop("checked") ? true : false,

    asciiText: gettingValuesFromInputs($('.johanAsciiText')),
    asciiTextDuration: $('#johanAsciiTextDuration').val(),
    asciiTextSpeed: $('#johanAsciiTextSpeed').val(),
    asciiTextFlash: $('#johanAsciiTextFlash').prop("checked") ? true : false,

    asciiAnimation: gettingValuesFromInputs($('.johanAsciiAnimation')),

    cpuUsage: $('#johanCpuUsage').val(),
    memoryUsage: $('#johanMemoryUsage').val(),
    diskUsage: $('#johanDiskUsage').val(),
  };


  io.socket.post('/api/v1/johan/create', data, function (resData, jwRes) {
    console.log(resData); // => 200
  });

});

//EDIT JOHAN
//EDIT JOHAN
//EDIT JOHAN
$(document).on("click", '.editJohan', function () {

  $(".johanTextRemove").remove();
  $(".johanResponseTextRemove").remove();
  $(".johanResponseTextIfFailRemove").remove();
  $(".johanResponseTextIfYouQuitRemove").remove();
  $(".johanAsciiTextRemove").remove();
  $(".johanAsciiAnimationRemove").remove();


  $('#johanTextEdit').attr('value', $(this).data('text')[0]);
  $('#johanResponseTextEdit').attr('value', $(this).data('responseText')[0]);
  $('#johanResponseTextIfFailEdit').attr('value', $(this).data('responseTextIfFail')[0]);
  $('#johanResponseTextIfYouQuitEdit').attr('value', $(this).data('responseTextIfYouQuit')[0]);
  $('#johanAsciiTextEdit').val($(this).data('asciiText')[0]);
  $('#johanAsciiAnimationEdit').val($(this).data('asciiAnimation')[0]);


  $('#johanTextDurationEdit').attr('value', $(this).data('textDuration'));
  $('#johanTextSpeedEdit').attr('value', $(this).data('textSpeed'));
  $('#johanResponseTextDurationEdit').attr('value', $(this).data('responseTextDuration'));
  $('#johanResponseTextSpeedEdit').attr('value', $(this).data('responseTextSpeed'));
  $('#johanAsciiTextDurationEdit').attr('value', $(this).data('asciiTextDuration'));
  $('#johanAsciiTextSpeedEdit').attr('value', $(this).data('asciiTextSpeed'));

  $('#johanCpuUsageEdit').attr('value', $(this).data('cpuUsage'));
  $('#johanMemoryUsageEdit').attr('value', $(this).data('memoryUsage'));
  $('#johanDiskUsageEdit').attr('value', $(this).data('diskUsage'));


  $(this).data('response') == true ? $('#johanResponseEdit').val($(this).data('response')) : null;

  $(this).data('audioPlayTiming') == true ? $('#johanAudioTimingEdit').attr('checked', 'checked') : null;
  $(this).data('textFlash') == true ? $('#johanTextFlashEdit').attr('checked', 'checked') : null;
  $(this).data('responseTextFlash') == true ? $('#johanResponseTextFlashEdit').attr('checked', 'checked') : null;
  $(this).data('asciiTextFlash') == true ? $('#johanAsciiTextFlashEdit').attr('checked', 'checked') : null;

  if ($(this).data('text').length > 1) {
    johanTextEdit = $(this).data('text');
    for (i = 1; i < johanTextEdit.length; i++) {
      id = tempIdGenerate();
      $("#johanTextNewInputsEdit").append(
        `
          <div class="input-field col s12 ` + id + ` johanTextRemove">
          <input placeholder="Johan is trying to say something..."  id="johanTextEdit" type="text" name="johanTextEdit[]"
            class="validate johanTextEdit" value="` + johanTextEdit[i] + `">
          <label for="johanTextEdit" class="active">What did Johan say?
          <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
          class="material-icons">cancel</i></button>
          </label>
    
        </div>
            `
      );
    }
  }

  if ($(this).data('responseText').length > 1) {
    johanResponseTextEdit = $(this).data('responseText');
    for (i = 1; i < johanResponseTextEdit.length; i++) {
      id = tempIdGenerate();
      $("#johanResponseTextNewInputsEdit").append(
        `
          <div class="input-field col s12 ` + id + ` johanResponseTextRemove">
          <input placeholder="Johan is trying to say something..." id="johanResponseTextEdit" type="text"
            name="johanResponseTextEdit[]" class="validate johanResponseTextEdit" value="` + johanResponseTextEdit[i] + `">
          <label for="johanResponseTextEdit" class="active">What did
            the shell script response (Customize Text)
            <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
            class="material-icons">cancel</i></button>
            </label>
        </div>
            `
      );
    }
  }

  if ($(this).data('responseTextIfFail').length > 1) {
    johanResponseTextIfFailEdit = $(this).data('responseTextIfFail');
    for (i = 1; i < johanResponseTextIfFailEdit.length; i++) {
      id = tempIdGenerate();
      $("#johanResponseTextIfFailNewInputsEdit").append(
        `
          <div class="input-field col s12 ` + id + ` johanResponseTextIfFailRemove">
          <input placeholder="You type the wrong script and the mp program said..." id="johanResponseTextIfFailEdit"
            type="text" name="johanResponseTextIfFailEdit[]" class="validate johanResponseTextIfFailEdit" value="` + johanResponseTextIfFailEdit[i] + `">
          <label for="johanResponseTextIfFailEdit" class="active">What did mp program response when you type wrong script?
          <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
            class="material-icons">cancel</i></button>
          </label>
        </div>
            `
      );
    }
  }

  if ($(this).data('responseTextIfYouQuit').length > 1) {
    responseTextIfYouQuitEdit = $(this).data('responseTextIfYouQuit');
    for (i = 1; i < responseTextIfYouQuitEdit.length; i++) {
      id = tempIdGenerate();
      $("#johanResponseTextIfYouQuitNewInputsEdit").append(
        `
          <div class="input-field col s12 ` + id + ` johanResponseTextIfYouQuitRemove">
          <input placeholder="You quit and open the mp program again. mp program said..."
            id="johanResponseTextIfYouQuitEdit" type="text" name="johanResponseTextIfYouQuitEdit[]"
            class="validate johanResponseTextIfYouQuitEdit" value="` + responseTextIfYouQuitEdit[i] + `">
          <label for="johanResponseTextIfYouQuitEdit" class="active">What did mp program response after you turn on the mp program
            again?
            <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
            class="material-icons">cancel</i></button>
            </label>
        </div>
            `
      );
    }
  }

  if ($(this).data('asciiText').length > 1) {
    johanAsciiTextEdit = $(this).data('asciiText');
    for (i = 1; i < johanAsciiTextEdit.length; i++) {
      id = tempIdGenerate();
      $("#johanAsciiTextNewInputsEdit").append(
        `
          <div class="input-field col s12 ` + id + ` johanAsciiTextRemove">
          <textarea placeholder="If Johan is trying to show something in photo format." id="johanAsciiTextEdit"
            class="materialize-textarea johanAsciiTextEdit" name="johanAsciiTextEdit">` + johanAsciiTextEdit[i] + `</textarea>
          <label for="johanAsciiTextEdit" class="active">Johan's trying to show photo in ASCII
          <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
          class="material-icons">cancel</i></button>
          </label>
        </div>
            `
      );
    }
  }

  if ($(this).data('asciiAnimation').length > 1) {
    scriptAsciiAnimationEdit = $(this).data('asciiAnimation');
    for (i = 1; i < scriptAsciiAnimationEdit.length; i++) {
      id = tempIdGenerate();
      $("#johanAsciiAnimationNewInputsEdit").append(
        `
          <div class="input-field col s12 ` + id + ` johanAsciiAnimationRemove">
          <textarea placeholder="If Johan is trying to show something in ASCII animation." id="johanAsciiAnimationEdit"
            class="materialize-textarea johanAsciiAnimationEdit" name="johanAsciiAnimationEdit">` + scriptAsciiAnimationEdit[i] + `</textarea>
          <label for="johanAsciiAnimationEdit" class="active">Johan's trying to show photo in ASCII animation
          <button class="btn-floating btn-large waves-effect waves-light red btn-small remove" data-id="` + id + `"><i
          class="material-icons">cancel</i></button>
          </label>
        </div>
            `
      );
    }
  }
  $("#johanUpdate").data("id", $(this).data('id'));
});

$(document).on("click", '#johanUpdate', function () {

  const data = {
    text: gettingValuesFromInputs($(".johanTextEdit")),
    audio: $('#johanAudioEdit').val(),
    sort: 1,
    audioPlayTiming: $('#johanAudioPlayTimingEdit').prop("checked") ? true : false,
    textDuration: $('#johanTextDurationEdit').val(),
    textSpeed: $('#johanTextSpeedEdit').val(),
    textFlash: $('#johanTextFlashEdit').prop("checked") ? true : false,

    response: $('#johanResponseEdit').val(),
    responseText: gettingValuesFromInputs($('.johanResponseTextEdit')),
    responseTextIfFail: gettingValuesFromInputs($('.johanResponseTextIfFailEdit')),
    responseTextIfYouQuit: gettingValuesFromInputs($('.johanResponseTextIfYouQuitEdit')),
    responseTextDuration: $('#johanResponseTextDurationEdit').val(),
    responseTextSpeed: $('#johanResponseTextSpeedEdit').val(),
    responseTextFlash: $('#johanResponseTextFlashEdit').prop("checked") ? true : false,

    asciiText: gettingValuesFromInputs($('.johanAsciiTextEdit')),
    asciiTextDuration: $('#johanAsciiTextDurationEdit').val(),
    asciiTextSpeed: $('#johanAsciiTextSpeedEdit').val(),
    asciiTextFlash: $('#johanAsciiTextFlashEdit').prop("checked") ? true : false,

    asciiAnimation: gettingValuesFromInputs($('.johanAsciiAnimationEdit')),

    cpuUsage: $('#johanCpuUsageEdit').val(),
    memoryUsage: $('#johanMemoryUsageEdit').val(),
    diskUsage: $('#johanDiskUsageEdit').val(),
  };

  console.log(data);

  $('.modal').modal('close');
  //Add loading
  $("#johanListLoading").addClass("active");

  io.socket.put('/api/v1/johan/update/' + $(this).data('id'), data, function (resData, jwRes) {
    console.log(resData);
    //Removing loading
    $("#johanListLoading").removeClass("active");
  });


});
//EDIT JOHAN
//EDIT JOHAN
//EDIT JOHAN

//DELETE JOHAN
//DELETE JOHAN
//DELETE JOHAN
$(document).on("click", '.deleteJohan', function () {
  $("#johanTextNameDelete").text($(this).data('text'));
  $("#deleteJohanModal").attr("data-id", $(this).data('id'));
});
$(document).on("click", '#deleteJohanModal', function () {
  var id = $(this).data('id');
  $('.modal').modal('close');
  //Add loading
  $("#johanListLoading").addClass("active");
  io.socket.delete('/api/v1/johan/delete/' + id, (resData) => {
    //Removing loading
    $("#johanListLoading").removeClass("active");
  });
  $(this).removeData('id');
});
//DELETE JOHAN
//DELETE JOHAN
//DELETE JOHAN
