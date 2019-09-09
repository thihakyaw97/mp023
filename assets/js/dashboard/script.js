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

//ADD MORE INPUTS FOR Scripts
//ADD MORE INPUTS FOR Scripts
//ADD MORE INPUTS FOR Scripts
