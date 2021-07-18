//window.resizeTo(1345, 840);
//Length, height

//TO LOGIN SITE JAVASCRIPT CODE BELOW//

function createAccount() {
username = document.getElementById("username").value;
password = document.getElementById("password").value;

var username;
var password;

    if(username === "" || password === "") {
      test = document.getElementById("alert-Text").style.display = "block";

     setTimeout(function() {
       var test = document.getElementById("alert-Text").style.display = "none";

     }, 3000);
    }
    else if(username.length < 10 && password.length < 10) {
      test = document.getElementById("alert-Text").innerHTML = "Please make your username and password longer";
      document.getElementById("alert-Text").style.display = "block";

      setTimeout(function() {
        test = document.getElementById("alert-Text").style.display = "none";
      }, 3000);
    }
    else if(username.length < 10) {
      test = document.getElementById("alert-Text").innerHTML = "Please make your username longer";
      document.getElementById("alert-Text").style.display = "block";

      setTimeout(function() {
        test = document.getElementById("alert-Text").style.display = "none";
      }, 3000);

    }
    else if(password.length < 10){
      test = document.getElementById("alert-Text").innerHTML = "Please make your password longer";
      document.getElementById("alert-Text").style.display = "block";

      setTimeout(function() {
        test = document.getElementById("alert-Text").style.display = "none";
      }, 3000);
    }
    else if(username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
      test = document.getElementById("alert-Text").innerHTML = "This account has already been created";
      document.getElementById("alert-Text").style.display = "block";

      setTimeout(function() {
        test = document.getElementById("alert-Text").style.display = "none";
      }, 3000);
    }
    else {
      alert("Login created!");
      window.location.href = "index.html";
      password = localStorage.setItem('password', password);
      username = localStorage.setItem('username', username);
   }
}

//LOGGED IN SITE CODE:

function createNewPassword() {

  var newPass1 = document.getElementById("pass1").value;
  var newPass2 = document.getElementById("pass2").value;
  var newPassword;

  if(newPass1 !== newPass2) {
   alert("Please make sure both your passwords are the same");
 }
 /*
 else if(newPass1 || newPass2 == "") {
   alert("Please fill in the form");
   //Maybe change the background color to red.
 }
 */
 else {
   alert("Password Successfully Changed!");
   window.location.href = "loggedinSite.html";
   //ADD PASSWORD BEING CHANGED CODE HERE
 }
}

username = localStorage.getItem('username');
function logintoAccount() {
  var test;
  password = localStorage.getItem('password');
  username = localStorage.getItem('username').value;
  var loggedusername = document.getElementById("username1").value;
  var loggedpassword = document.getElementById("password1").value;

   if(loggedusername == localStorage.getItem('username') && loggedpassword == localStorage.getItem('password')) {
   window.location.href = "index.html";
   //document.getElementById("username-Here").innerHTML = localStorage.getItem('username');
  }
  else if(loggedusername == "" && loggedpassword == "") {

     test = document.getElementById("alert-Text").style.display = "block";

    setTimeout(function() {
      var test = document.getElementById("alert-Text").style.display = "none";
    }, 3000);
  }
  else if(loggedusername == "") {

     test = document.getElementById("alert-Text").style.display = "block";

    setTimeout(function() {

       test = document.getElementById("alert-Text").style.display = "none";
    }, 3000);
  }
  else if(loggedpassword == "") {

    test = document.getElementById("alert-Text").style.display = "block";
    setTimeout(function() {

      test = document.getElementById("alert-Text").style.display = "none";
    }, 3000);
  }
  else {
      test = document.getElementById("alert-Text").innerHTML = "Incorrect username or password. Please try again.";
      document.getElementById("alert-Text").style.display = "block";

      setTimeout(function() {
        test = document.getElementById("alert-Text").style.display = "none";
      }, 3000);
   }
}

function logoutButton() {

  var confirmation = confirm("Are you sure you want to log out?");
  if(confirmation == true) {
    alert("Logged out");
    window.location.href = "loggedinSite.html";
  }
}

//NOTEPAD SITE CODE:
function loadsaved() {

  var confirmation = confirm("Are you sure you'd like to load any previously saved notes? If so, please copy your current notes before proceeding");

  if(confirmation == true) {
    stringValue = document.getElementById("text").innerHTML = localStorage.getItem("savetext");
  }
  else {
    alert("Cancelled");
  }
}

function wordCount() {

    var stringValue = document.getElementById("text").innerHTML;
    if(stringValue == "") {
       document.getElementById("count").innerHTML = 0;
    }
    else {
      document.getElementById("count").innerHTML = stringValue.split(" ").length;
    }
}

function downloadNotes() {
  var information = document.getElementById("text").innerText;
  var textToBLOB = new Blob([information], {
     type: 'text/plain'
  });
  //var sFileName = 'formData = document.doc';
  var sFileName = 'formData.txt';
  var newLink = document.createElement("a");
         newLink.download = sFileName;

         if (window.webkitURL != null) {
             newLink.href = window.webkitURL.createObjectURL(textToBLOB);
         }
         else {
             newLink.href = window.URL.createObjectURL(textToBLOB);
             newLink.style.display = "none";
             document.body.appendChild(newLink);
         }
          newLink.click();
    }

var stringValue = document.getElementById("text");
function reset() {
  stringValue = document.getElementById("text").innerHTML;
}

notes = localStorage.setItem("savetext", notes);
  var noteName;
  var confirmation;
function save() {
  document.getElementById("confirmation-Here").innerHTML = "";
    var notes = document.getElementById("text").innerHTML;
    var confirmation = confirm("Are you sure you'd like to save your note?");
  if(confirmation == false) {
    alert("Save Cancelled");
  }
  else if(confirmation == true) {
        noteName = prompt("Please name your notes");
      if(noteName == "") {
        alert("Please write a name");
        return;
      }
      else {
        if(noteName === null || undefined) {
          return;
        }
       else {
        alert(noteName + " successfully saved!");
        localStorage.setItem("savetext", notes);
        yes = "Yes";
        document.getElementById("confirmation-Here").innerHTML = yes.fontcolor("green");
        lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;
      }
    }
  }
}

//Load saved function originally here

var noteName;
function reset() {
  if (!localStorage.getItem("savetext")) {
    alert("There is nothing to delete");
    return;
  }
  confirmation = confirm("Are you sure you'd like to delete " + noteName + "?");
  if (!confirmation) {
    alert("Deletion Cancelled");
  }
  else {
    alert("Delete Successful");
    localStorage.removeItem("savetext");
    document.getElementById("confirmation-Here").innerHTML = "Deleted";
    lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;
  }
}


/*

if(localStorage.getItem("savetext") == localStorage.removeItem('savetext')) {
  alert("There is nothing to delete");
}
else {
  confirmation = confirm("Are you sure you'd like to delete " + noteName + "?");

  if(confirmation === false) {
   alert("Deletion Cancelled");
 }
 else {
   alert("Delete Successful");
   localStorage.removeItem('savetext');
  document.getElementById("confirmation-Here").innerHTML = "Deleted";
  lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;
 }
}

*/

function fontStyles() {
  var fonts = document.getElementById("fonts").value;
  var tnr = document.getElementById("tnr").value;
  var mono = document.getElementById("mono").value;
  var sans = document.getElementById("sans").value;

  if(fonts == mono) {
    notes = document.getElementById("text").value = document.execCommand('fontName', false, mono);
  }
  else if(fonts == tnr) {
    notes = document.getElementById("text").value = document.execCommand('fontName', false, tnr);
  }
  else if(fonts == sans) {
    notes = document.getElementById("text").value = document.execCommand('fontName', false, sans);
  }
}

function fontSizes() {
  var fontSize = document.getElementById("fonts-size").value;
  var size3 = document.getElementById("three").value;
  var size4 = document.getElementById("four").value;
  var size5 = document.getElementById("five").value;

  if(fontSize == size3) {
    notes = document.getElementById("text").value = document.execCommand('fontSize', false, size3);
  }
  else if(fontSize == size4) {
    notes = document.getElementById("text").value = document.execCommand('fontSize', false, size4);
  }
  else {
    notes = document.getElementById("text").value = document.execCommand('fontSize', false, size5);
  }
}

function backgroundColor() {
  var backgroundColor = document.getElementById("background-color").value;
  var white = document.getElementById("white").value;
  var green = document.getElementById("green").value;
  var blue = document.getElementById("blue").value;
  var yellow = document.getElementById("yellow").value;

  if(backgroundColor == white) {
    notes = document.getElementById("text").value = document.execCommand('backColor', false, white);
  }
  else if(backgroundColor == green) {
    notes = document.getElementById("text").value = document.execCommand('backColor', false, green);
  }
  else if(backgroundColor == blue) {
    notes = document.getElementById("text").value = document.execCommand('backColor', false, blue);
  }
  else {
    notes = document.getElementById("text").value = document.execCommand('backColor', false, yellow);
  }
}

function textColors() {
  var textColor = document.getElementById("text-color").value;
  var white = document.getElementById("white").value;
  var red = document.getElementById("red").value;
  var black = document.getElementById("black").value;
  var blue = document.getElementById("blue").value;
  var purple = document.getElementById("purple").value;
  var green = document.getElementById("green").value;

  if(textColor == white) {
    notes = document.getElementById("text").value = document.execCommand('foreColor', false, white);
  }
  else if(textColor == red) {
    notes = document.getElementById("text").value = document.execCommand('foreColor', false, red);
  }
  else if(textColor == black) {
    notes = document.getElementById("text").value = document.execCommand('foreColor', false, black);
  }
  else if(textColor == purple) {
    notes = document.getElementById("text").value = document.execCommand('foreColor', false, purple);
  }
  else if(textColor == green) {
    notes = document.getElementById("text").value = document.execCommand('foreColor', false, green);
  }
  else {
    notes = document.getElementById("text").value = document.execCommand('foreColor', false, blue);
  }
}

function alignment() {
  var alignment = document.getElementById("alignment").value;
  var right = document.getElementById("right").value;
  var center = document.getElementById("center").value;
  var left = document.getElementById("left").value;

  if(alignment == right) {
    notes = document.getElementById("text").value = document.execCommand('justifyRight', false, right);
  }
  else if(alignment == left) {
    notes = document.getElementById("text").value = document.execCommand('justifyLeft', false, left);
  }
  else {
    notes = document.getElementById("text").value = document.execCommand('justifyCenter', false, center);
  }
}

function scriptTypes() {
  var script = document.getElementById("script").value;
  var subscript = document.getElementById("subscript").value;
  var superscript = document.getElementById("superscript");
  var normal = document.getElementById("normal").value;

  if(script == subscript) {
    notes = document.getElementById("text").value = document.execCommand('subscript', false, subscript);
  }
  else if(script == superscript) {
    notes = document.getElementById("text").value = document.execCommand('superscript', false, superscript);
  }
  else {
    notes = document.getElementById("text").value = document.execCommand('superscript', true, normal);
  }
}

function printNotes() {

  if(localStorage.getItem("savetext") == null) {
    alert("You have no notes to print! Try saving your notes first.");
  }
  else {
      window.location.href = "printsite.html";
  }
}

function accountButton() {
  window.location.href = "accountprofile.html";
}

var remainingProgress = document.getElementById("remaining").innerHTML;
var meterProgress = document.getElementById("textCountMeter").value = remainingProgress;
var compiledTexts = document.getElementById("textCount").innerHTML;
var limitAlert = document.getElementById("limtitReached").innerHTML;
var limitReached = document.getElementById("limitReached2").innerHTML;
function charcounts(startfrom, charend) {
  var length = document.getElementById(startfrom).value.length;
  document.getElementById(charend).innerHTML = length;
  remainingProgress = document.getElementById("remaining").innerHTML;
  meterProgress = document.getElementById("textCountMeter").value = remainingProgress;
}

var text = document.getElementById("yourbio").value;
function saveBio() {

  text = document.getElementById("yourbio").value;
  var saveBio = localStorage.setItem("biography", text);
  text = document.getElementById("yourbio").innerHTML = localStorage.getItem("biography");

function test22() {


  if(text ==  "") {
    alert("You must input something in");
  }
  else if(text == "test") {
     text = document.getElementById("yourbio").setAttribute("readonly", true);
  }

}
  var btn = document.getElementById("savebioBtn").value = "test";
  editBtn = document.getElementById("savebioBtn").style.display = "block";
  length = document.getElementById("remaining").style.display = "none";
  compiledTexts = document.getElementById("textCount").style.display = "none";

  btn = document.getElementById("savebioBtn").innerHTML = testFun();

  function testFun() {
    text = document.getElementById("yourbio").removeAttribute("readonly", false);
 }
}

/*What I want to happen:
When you press the button after typing something, the text display locks and the button value changes to something else along with the meter and remaining characters string disappearing. And then, if you press the button again, you're able to edit the textbox again and the reamining characters string and meter reappear.
*/



function growTextbox(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
}
