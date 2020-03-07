var data = null;
var dataKeyword = "";

$("#search").on("click", function(){
    let keyword = $("#keyword").val();

    if(keyword == "")
    {
        return;
    }
    if(keyword == dataKeyword)//same keyword no need to make another ajax call
    {
        displayImages();
        return;
    }
    else
    {
        dataKeyword = keyword;
        $.ajax({
            method: "GET",
            url: "https://api.unsplash.com/search/photos",
            dataType: "json",
            data: { "client_id" :"mZK0RrMlNuXHvJH9DWn5vsWxjKeXo9U3wPL4ASq4zkQ" , "query": keyword},
            success: function(result,status)
            {
                data = result.results;
                displayImages();
            },
            error(err)
            {
                console.log(err);
            }
        });
    }
    
});

$("#count").on("change", function(){
    $("#count-display").html(`Number of Images: ${$("#count").val()}`);
})

function displayImages(){
    let imageDisplay = $("#image-display");
    let imageCount = $("#count").val();
    imageDisplay.html("");

    console.log(data);
    let htmlStr = ""
    for(var i = 0; i < imageCount;i++)
    {
        htmlStr = "<div class = 'image-info col-4'>";
        htmlStr = htmlStr + `<img src = "${data[i].urls.small}" alt = "${data[i].alt_description}"/>`;
        htmlStr = htmlStr + `<p><strong>Created: </strong>${data[i].created_at.substring(0,10)}</p>`;
        htmlStr = htmlStr + `<p><strong>Description: </strong>${data[i].description}</p>`;
        htmlStr = htmlStr + `<p><strong>Likes: </strong> ${data[i].likes}</p>`;
        htmlStr = htmlStr + `<p><strong>By: </strong> ${data[i].user.name} on Unsplash.com</p>`;
        htmlStr = htmlStr + "</div>";
        imageDisplay.append(htmlStr);
    }
}