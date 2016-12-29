$(document).ready(function(){

  $("#closer").click(function(){
    $("#signup").hide();
  });
$("#addname").click(function(){

//write to Firebase

});
});
function sendSignupData() {
  var fname = document.getElementById('first_name').value;
  var lname = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
var messageListRef = new Firebase('https://m1jerkyuserbase.firebaseio.com/pre-launch-hype/');
if (email !== ""){

    messageListRef.push({ 'first_name': fname, 'last_name': lname, 'email':email }, console.log('donezo'));
    $("#signup").hide();



}else {  Materialize.toast('E-mail address is required, please try again', 3000); // 3000 is the duration of the toast
}
}
