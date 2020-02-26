
$("#search").on("click",function()
{
    let keyword = $("#keyword").val();
    keyword.replace(" ", "+");
    let orientation = $("#orientation").val()==="h"?"horizontal":"vertical";
    let imageDisplay = $("#image-display");
    imageDisplay.html("");
    $.ajax({
        method: "GET",
        url: "https://pixabay.com/api/",
        dataType: "json",
        data: { "key" :"15401070-3f0e62fc6ef63c9390f6fb50d" , "q": keyword, "orientation" : orientation},
        success: function(result,status)
        {
            let data = result.hits;
            /*
            data.forEach(function(img){
                imageDisplay.append(`<div class = "col-sm"><img src = '${img.previewURL}' width = '${img.previewWidth}' height = '${img.previewHeight}'/></div>`);
            });
            */
            for(var i = 0; i < 4; i++)
            {
                let img = data[Math.floor(Math.random()*data.length)];
                imageDisplay.append(`<div class = "col-sm"><img src = '${img.previewURL}' width = '${img.previewWidth}' height = '${img.previewHeight}'/></div>`);
            }
        },
        error(err)
        {
            console.log(err);
        }
        
    })
});