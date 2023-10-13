
function validation(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if(fname == ""){

        document.getElementById('fnameError').innerHTML ="Require"

        return false;
    };
   

    if(lname == ""){

        document.getElementById('lnameError').innerHTML ="Require"

        return false;
    };
    
    if(email.indexOf('@') === -1){

        document.getElementById('email-error').innerHTML ="Please enter your email"

        return false;
    };
    
    if(message.length < 200){

        document.getElementById('message-error').innerHTML ="Your Message should be 200 word"

        return false;
    };
    



}
