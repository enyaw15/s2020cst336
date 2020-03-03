
$("#generate").on("click",function()
{
    let imageNumber = $("#imageNumber").val();
    let imageDisplay = $("#image-display");
    imageDisplay.html("");
    let theUrl = "https://dog.ceo/api/breeds/image/random/" + imageNumber; 
    console.log("the url: " + theUrl);
    $.ajax({
        method: "GET",
        url: theUrl,
        dataType: "json",
        success: function(result,status)
        {
            let data = result.message;
            let html = "";
            for(let i = 0; i < data.length;i++)
            { 
                if(i%3 == 0 )
                {
                    html = html + "<div class = 'col'>"
                }
                html = html +`<img class = "col-4" src = '${data[i]}'/>`;
                
                if(i%3 == 2 )
                {
                    html = html + "</div>"
                }
            }
            imageDisplay.html(html);
        },
        error(err)
        {
            console.log("ERROR!" + err);
        }
        
    })
});