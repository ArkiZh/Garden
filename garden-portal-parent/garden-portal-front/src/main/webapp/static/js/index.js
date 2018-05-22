$(function () {

    //获取首页欢迎图片的canvas对象
    var canvas = document.getElementById("homeCanvas");
    //设置canvas区域大小
    var ClientWidth = document.body.clientWidth;
    var welcomeImageWidth = ClientWidth;
    var wecomeImageHeight = welcomeImageWidth*0.45;
    canvas.setAttribute("width", welcomeImageWidth.toString());
    canvas.setAttribute("height", wecomeImageHeight.toString());
    var pen = canvas.getContext("2d");
    //加载欢迎图片
    var welcomeImage = new Image();
    welcomeImage.src = "static/image/元旦壁纸.jpg";
    welcomeImage.onload=function(){
        pen.fillStyle = pen.createPattern(welcomeImage, "no-repeat");
        //先按图片原大小填充，再缩放为canvas区域大小
        pen.rect(0,0,welcomeImage.naturalWidth,welcomeImage.naturalHeight);
        pen.scale(welcomeImageWidth/welcomeImage.naturalWidth,wecomeImageHeight/welcomeImage.naturalHeight);
        //填充canvas
        pen.fill();
    };
    function alertMessage(){alert("Hello!");}
    BindClickEventToRectangle({rectArea:{x:0,y:0,width:welcomeImageWidth,height:wecomeImageHeight},clickEvent:alertMessage});

});

