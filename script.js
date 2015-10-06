/*
Author: Yevhen Kim
Purpose: validate forms on click events
Date:
*/
$(document).ready(function() {
    $("#submit").click(function() {
        //check username and password fields if they are filled and show the message,
        //if not filled then show error message
        if($("#username").val() && $("#password").val()) {
            document.getElementById("message").innerHTML = "Logged in";
        }
        else {
            document.getElementById("message").innerHTML = "Username or password is incorrect";
        }
    });
    
    //click on cancel button and erase all fields in form1
    $("#cancel").click(function(){
       $("#form1").trigger('reset');
        document.getElementById("message").innerHTML = "";
    });
    
    //click on anchor and replace with sign up page
    $('a[href*=#]').click(function(){
        $("#Signin").replaceWith($("#Signup"));
    });
    
    //click on save and check if required input fields are filled and show correct message
    //if not filled out then show error messages
    $("save").click(function() {
        if ($("#username").val() && $("#pass1") && $("#pass2") && $("#email") && $("#codingLang")) {
            document.getElementById("message").innerHTML = "You are NEXT nerd!";
        }
        else if($("#pass2") !== $("#pass1")) {
            document.getElementById("message").innerHTML = "Password verification is incorrect!";
        }
        else {
            document.getElementById("message").innerHTML = "All fields are required";
        }
    });
    
    //this part was for going through every input that has attribute name "name" and if it's empty then place an error message
    /*on('click', function() {
        var flag = true,
            msg = "";
        $('form input').each(function() {
            var $this = $(this);
            
            if(!$this.val()){
                var inputsName = $this.attr('name');
                valid = false;
                msg += 'Please enter ' + inputsName + '\n';
            }
            else if($("#pass2") != $("#pass1")) {
                msg = 'Verification is incorrect!';
            }
        });
        
        if(!flag) {
            document.getElementById("message").innerHTML = msg;
        }  
    });  */
    
    //cancel button on form2 to erase all inputs
    $("#cnl").click(function(){
       $("#form2").trigger('reset');
    });
    
    //back button to sign in page
    /*$("#back").click(function() {
        parent.history.back();
    });*/

});
