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
        functionPen.scale(100/filmImage.naturalWidth,functionAreaHeight/filmImage.naturalHeight);
        //填充canvas
        functionPen.fill();
    };
    functionPen.fillStyle="#000";
    // 画胶卷中间按钮
    var actualFilmHeight = 100;
    var borderWidth = 20;
    var buttonWidth = 100;
    var buttonHeight = actualFilmHeight - borderWidth * 2;
    //胶卷中间按钮的初始坐标
    var baseX = 100;
    var baseY = 30;
    functionPen.fillRect(baseX,baseY,ClientWidth-baseX,actualFilmHeight);
    var filmRecOption = {
        pen: functionPen,
        startX: baseX+borderWidth-3,
        startY: baseY + borderWidth,
        width: buttonWidth,
        height: buttonHeight,
        borderWidth: borderWidth,
        wholeWidth: ClientWidth,
        fillStyle: "#FFF"
    };
    drawListOfRectangle(filmRecOption);
    //画胶卷上方小方框
    var borderRecTopOption = {
        pen: functionPen,
        startX: baseX+5,
        startY: baseY + borderWidth/3,
        width: borderWidth/3,
        height: borderWidth/3,
        borderWidth: borderWidth*0.8,
        wholeWidth: ClientWidth,
        fillStyle: "#FFF"
    };
    drawListOfRectangle(borderRecTopOption);
    //画胶卷下方小方框
    var borderRecBottomOption = {
        pen: functionPen,
        startX: baseX+5,
        startY: baseY+borderWidth+buttonHeight+borderWidth/3,
        width: borderWidth/3,
        height: borderWidth/3,
        borderWidth: borderWidth*0.8,
        wholeWidth: ClientWidth,
        fillStyle: "#FFF"
    };
    drawListOfRectangle(borderRecBottomOption);

    function alertMessage(){alert("看电影，coming soon!");}
    var clickEventToRectangle = new BindClickEventToRectangle();
    for(var i = 0;i<6;i++){
        var clickEvent = {
            rectArea: {x: buttonBaseX+baseX+i*(buttonWidth+borderWidth), y: buttonBaseY+baseY+borderWidth, width: buttonWidth, height: buttonHeight},
            clickEvent: alertMessage
        };
        clickEventToRectangle.addClickEvent(clickEvent);
    }

});

