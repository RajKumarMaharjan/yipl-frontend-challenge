
function validation(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    let hasError = false;

    document.getElementById('fnameError').innerHTML =""
    document.getElementById('lnameError').innerHTML  =""
    document.getElementById('email-error').innerHTML  =""
    document.getElementById('message-error').innerHTML  =""

    if(fname == ""){
        document.getElementById('fnameError').innerHTML ="First name is required."

        hasError =  true;
    };
   

    if(lname == ""){

        document.getElementById('lnameError').innerHTML ="Last name is required."

         hasError =  true;
    };
    
    if(email.indexOf('@') === -1){

        document.getElementById('email-error').innerHTML ="Please enter valid email."

         hasError =  true;
    };
    
    if(message.length > 200 || message.length == 0){

        document.getElementById('message-error').innerHTML ="Please contain your message within 200 words."

         hasError =  true;
    };

    if(!hasError){
        alert("Your form has been submitted. We will contact you soon.")
    }

    return !hasError
   
}