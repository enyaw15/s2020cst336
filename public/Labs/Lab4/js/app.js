loadStates();

var usernameAvailable = false;

$("#zip").on("change",function()
{
    $.ajax({
        method: "GET",
           url: "https://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php",
      dataType: "json",
          data:  {"zip" : $("#zip").val() },
      success: function(result,status) {
        
        $("#city").html(result.city);
        $("#latitude").html(result.latitude);
        $("#longitude").html(result.longitude);
      } 
      });
})

$("#state").on("change",function(){
    $.ajax({
        method: "GET",
           url: "https://itcdland.csumb.edu/~milara/ajax/countyList.php",
      dataType: "json",
          data:  {"state" : $("#state").val() },
      success: function(result,status) {
        $("#county").html("");
        for(let i = 0; i < result.length; i++)
        {
            $("#county").append("<option>" +result[i].county + "</option>");
        }
      } 
      });
});

$("#username").on("change",function()
{
    $.ajax({
        method: "GET",
           url: "https://cst336.herokuapp.com/projects/api/usernamesAPI.php?username=eeny",
      dataType: "json",
          data:  {"username" : $("#username").val() },
      success: function(result,status) {
        
        if(result.available)
        {
            $("#usernameError").html("Username is available");
            $("#usernameError").css("color", "green");
            usernameAvailable = true;
        }
        else
        {
            $("#usernameError").html("Username is unavailable");
            $("#usernameError").css("color", "red");
            usernameAvailable = false;
        }
      } 
      });
})

$("#signupForm").on("submit", function()
{
    if(!isFormValid())
    {
        event.preventDefault();
    }
})

function isFormValid()
{
    let isValid = true;
    if(!usernameAvailable)
    {
        isValid = false;
    }

    if($("#username").val().length == 0)
    {
        isValid = false;
        $("#usernameError").html("Username is required");
    }

    if($("#password").val() != $("#passwordAgain").val())
    {
        $("#passwordAgainError").html("Password mismatch");
        isValid = false;
    }
    
    if($("#password").val().length < 6)
    {
        $("#passwordAgainError").html("Password must be atleast 6 characters");
        isValid = false;
    }
    return isValid;
}

function loadStates()
{
    console.log("loadStates");
    $.ajax({
        method: "GET",
        url: "https://itcdland.csumb.edu/~milara/ajax/states.php",
        dataType: "json",
        success: function(result,status)
        {
            result.forEach(function(entry) {
                $("#state").append("<option value=\""+ entry["usps"].toLowerCase() +"\">" + entry["state"] +"</option>")
            });
        
        }, 
        error: function(err)
        {
            console.log(err);
        }
    });
}