$(function () {
    var canvas = document.getElementById("homeCanvas");
    var ClientWidth = window.screen.availWidth;
    var ClientHeight = window.screen.availHeight;
    canvas.setAttribute("width", ClientWidth);
    canvas.setAttribute("height", ClientHeight);
    var pen = canvas.getContext("2d");
    pen.moveTo(0, 0);
    pen.lineTo(ClientWidth/2, ClientHeight/2);
    pen.lineTo(ClientWidth, 0);
    pen.lineWidth=1;
    pen.strokeStyle="#FF0000";
    pen.stroke();
});