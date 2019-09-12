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

io.socket.on('getAllJohan', function (data) {

  $(".johanList").remove();

  $.each(data, (index, value) => {

    $("#johanList").append(`

    <div class="col s12 johanList">
      <div class="card grey darken-3">
        <div class="card-content white-text">
          <p>`+value.text+`</p>
        </div>
        <div class="card-action right-align">
          <a class="modal-trigger waves-effect waves-light" href="#johanEdit"><i class="material-icons green-text">edit</i></a>
          <a class="modal-trigger waves-effect waves-light deleteJohan" href="#johanDelete" data-id=` + value.id + ` data-text="`+ value.text +`" data-sort="`+value.sort+`"><i class="material-icons red-text">delete</i></a>
        </div>
      </div>
    </div>
  `);
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

    needResponse: $('#johanNeedResponse').val() == "yes" ? true : false,
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


$(document).on("click", '.deleteJohan', function () {

  $("#johanTextNameDelete").text($(this).data('text'));
  $("#deleteJohanModal").attr("data-id", $(this).data('id'));


});

$(document).on("click", '#deleteJohanModal', function () {
  var id = $(this).data('id');
  
  io.socket.delete('/api/v1/johan/delete/' + id, (resData) => {

  });

});