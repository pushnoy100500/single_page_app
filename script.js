$().ready(function() {
    $("#form1").validate({
        rules: {
            user: {
                required: true,
                minlength: 5
            },
            pass1: {
                required: true,
                minlength: 5
            },
            pass2: {
                required: true,
                minlength: 5,
                equalTo: "#pass1"
            },
            email: {
                required: true,
                email: true
            },
            $(".datepicker").datepicker({
                minDate: new Date(1910,0,1),
                maxDate: new Date(2010,0,1),
                yearRange: '1910:2010' ,
                changeYear: true,
                changeMonth: true
            });
            
        }
    })
    
    
    
    
    
    
    
    
    
    
    
    
   /* //changing day in DOB
    $("#day").datepicker({
        changeDay: true
    })
    //getter
    var changeDay = $( "#day" ).datepicker( "option", "changeDay" );
    //setter
    $( "#day" ).datepicker( "option", "changeDay", true );
    
    //changing month in DOB
    $("#month").datepicker({
        changeMonth: true
    })
    //getter
    var changeMonth = $( "#month" ).datepicker( "option", "changeMonth" );
    //setter
    $( "#month" ).datepicker( "option", "changeMonth", true );
    
    //changing month in DOB
    $("#year").datepicker({
        changeYear: true
    })
    //getter
    var changeYear = $( "#year" ).datepicker( "option", "changeYear" );
    //setter
    $( "#year" ).datepicker( "option", "changeYear", true );
})
*/



















/*function convertToJson {
   var geek = JSON.stringify($("#form1").serializeArray()); 
}

// if user clicked on cancel then hide form and clear all fields
function redirectToHome() {
    var b = document.getElementById("btnCancel");
    if (b.onclick) {
        document.getElementById("btn").style.visibility = "visible";
        document.getElementById("user").value = "";
        document.getElementById("pass1").value = "";
        document.getElementById("pass2").value = "";
        document.getElementById("email").value = "";
        document.getElementById("languages").value = "";
        document.getElementById("description").value = "";
        document.getElementById("pass2").style.backgroundColor = "#FFFFFF";
        document.getElementsByClassName("disabled")[0].style.pointerEvents = "none";
        document.getElementsByClassName("disabled")[0].style.cursor = "default";
        document.getElementById("btnRegister").style.color = "#000000";
    }
}

//validate the user name
function checkFieldName() {

    //regular expression to match only alphanumeric characters including spaces
    var regExp = /^[\w ]+$/;

    //validate if the input is empty, if it's empty show the error
    if (document.getElementById("user").value === " ") {
        alert("Name field is empty! You are not an nameless person, please enter a name: ");
    }

    //also validate if the input matches to regExp
    else if (!regExp.test(document.getElementById("user").value)) {
        alert("Your name have to include only letters, numbers and underscore characters");
    }
}

//validate the password
function checkPass1() {
    //if user didn't type anything 
    if (document.getElementById("pass1").value === "") {
        alert("You deffinitelly should type something here!");
    }
}

//validate confirmation of password and match passwords
function checkPass2() {
    //if password2 is empty background color of password2 is red and alert the message
    if (document.getElementById("pass2").value === "") {
        document.getElementById("pass2").style.backgroundColor = "red";
        alert("You deffinitelly should type something here to confirm password!");
    }

        //if passwords don't match, background color of password2 is red and alert the message
    else if (document.getElementById("pass2").value !== document.getElementById("pass1").value) {
        document.getElementById("pass2").style.backgroundColor = "red";
        //alert("Kidding, passwords have to be matched");
    }
    else {
        //return true if validation was successfull and change the color of backround of password2,
        //cursor to pointer type, pointer event should be visible 
        document.getElementById("pass2").style.backgroundColor = "green";
        document.getElementsByClassName("disabled")[0].style.pointerEvents = "visible";
        document.getElementsByClassName("disabled")[0].style.cursor = "pointer";
        document.getElementById("btnRegister").style.color = "#006400";
        return true;
    }
    return false;
}

// by clicking on save button it will give you only correct alert if condition is met
function saving() {
    if (document.getElementById("user").value === "" & document.getElementById("pass1").value === "" & document.getElementById("pass2").value === "") {
        alert("Please fill up the form");
    }
   else if (checkPass2()) {
        var res = document.getElementById("user").value + "," + document.getElementById("pass1").value;
        alert(res);
    }     
}*/