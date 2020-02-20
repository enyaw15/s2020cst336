$(".btn").on("click",function() 
{
    let isCompleted = $("input[name=todo-tf]:checked").val();
    let todoDisplay = $(".todos-display");
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        type: "GET",
        dataType: "json",
        success: function(data)
        {
            //console.log(data);
            var displayStr = "<h2>Completed Todos: " + isCompleted + "</h2>";
            for(var key in data)
            {
                //console.log(data[key]["completed"]);
                console.log("" + isCompleted === "" + data[key]["completed"] );
                todoDisplay.removeAttr("hidden");
                if("" + isCompleted === "" + data[key]["completed"] )
                {
                    displayStr = displayStr + "<p>" + (data[key]["title"] + "</p>");
                }
            }
                todoDisplay.html(displayStr);
                console.log(displayStr);
        },
        error: function(err)
        {
            console.log(err);
        }
    });
});