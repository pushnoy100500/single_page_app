$(document).ready(function() {
    $("#submit").click(function() {
      
        if($("#username").val() && $("#password").val()) {
            document.getElementById("message").innerHTML = "Logged in";
        }
        else {
            document.getElementById("message").innerHTML = "Username or password is incorrect";
        }
    });
    
    $("#cancel").click(function(){
       $("#form1").trigger('reset');
        document.getElementById("message").innerHTML = "";
    });
    
    $('a[href*=#]').click(function(){
        $("#Signin").replaceWith($("#Signup"));
    });
    
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
    
    $("#cnl").click(function(){
       $("#form2").trigger('reset');
    });
    
    $("#back").click(function() {
        parent.history.back();
    });

});
