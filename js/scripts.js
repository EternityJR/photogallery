var countDiv = 4;
var countImg = 3;
var iActiveImg = 0;
var path = "img/img";
var vol = 100;

function CreateImage()
{
    for (var j = 0; j < countDiv; j++)
    for (var i = 0; i < countDiv; i++)
    {
        var html = "<div class = 'img" + i + "'></div>"
        var img = $(html);
        img.css("background-position", "-" + i * 500 / countDiv + "px -" + j * 300 / countDiv + "px");
        img.css("height", 300/countDiv + "px");
        img.css("width", 500/countDiv + "px");
        img.appendTo("#main");

    }
}

function changeImg()
{
    var j = 1;
    $("#main div").each( function ()
    {
        $(this).animate({
            width: "25px",
            height: "100px",
            
          }, vol * j, "linear", function() 
        {
            
            $(this).css('background-image', 'url("'+ path + iActiveImg +'.jpg")');
            $(this).animate({
                width: "125px",
                height: "75px",
                
              }, vol * j, "linear");;
        });
        j++;
    });
}

function leftImg()
{
    iActiveImg--;
    if (iActiveImg < 0)
        iActiveImg = countImg - 1;
    changeImg();
}

function rightImg()
{
    iActiveImg++;
    if (iActiveImg >= countImg)
        iActiveImg = 0;
    changeImg();
}

$(document).ready( function()
{
   CreateImage();

});