$(function () {

    //获取首页欢迎图片的canvas对象
    var welcomeCanvas = document.getElementById("welcomeCanvas");
    //设置canvas区域大小
    var ClientWidth = document.body.clientWidth;
    var welcomeImageWidth = ClientWidth;
    var wecomeImageHeight = welcomeImageWidth*0.409;
    welcomeCanvas.setAttribute("width", welcomeImageWidth.toString());
    welcomeCanvas.setAttribute("height", wecomeImageHeight.toString());
    var welcomePen = welcomeCanvas.getContext("2d");
    //加载欢迎图片
    var welcomeImage = new Image();
    welcomeImage.src = "static/image/元旦壁纸.jpg";
    welcomeImage.onload=function(){
        welcomePen.fillStyle = welcomePen.createPattern(welcomeImage, "no-repeat");
        //先按图片原大小填充，再缩放为canvas区域大小
        welcomePen.rect(0,0,welcomeImage.naturalWidth,welcomeImage.naturalHeight);
        welcomePen.scale(welcomeImageWidth/welcomeImage.naturalWidth,wecomeImageHeight/welcomeImage.naturalHeight);
        //填充canvas
        welcomePen.fill();
    };

    //获取首页功能区的canvas
    //buttonCanvas
    var buttonCanvas = document.getElementById("buttonCanvas");
    var buttonBaseX = 0;
    var buttonBaseY = buttonCanvas.offsetTop;
    var functionAreaWidth = ClientWidth;
    var functionAreaHeight = 150;
    buttonCanvas.setAttribute("width", functionAreaWidth.toString());
    buttonCanvas.setAttribute("height", functionAreaHeight.toString());
    var functionPen = buttonCanvas.getContext("2d");
    var filmImage = new Image();
    filmImage.src = "static/image/胶卷.gif";
    filmImage.onload=function(){
        functionPen.fillStyle = functionPen.createPattern(filmImage, "no-repeat");
        //先按图片原大小填充，再缩放为canvas区域大小
        functionPen.rect(0,0,filmImage.naturalWidth,filmImage.naturalHeight);
        functionPen.scale(130/filmImage.naturalWidth,functionAreaHeight/filmImage.naturalHeight);
        //填充canvas
        functionPen.fill();
    };
    functionPen.fillStyle="#000";
    // canvas高150，宽屏幕宽度
    functionPen.fillRect(130,30,ClientWidth-130,20);
    functionPen.fillRect(130,100,ClientWidth-130,20);
    // functionPen.stroke();

    function alertMessage(){alert("看电影，coming soon!");}
    BindClickEventToRectangle({rectArea:{x:buttonBaseX+130,y:buttonBaseY+50,width:ClientWidth-130,height:50},clickEvent:alertMessage});

});

