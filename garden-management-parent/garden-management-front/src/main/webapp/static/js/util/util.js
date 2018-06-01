/**
 * 为指定矩形区域绑定点击事件
 * 方法：instance.addClickEvent({rectArea:{x:0,y:0,width:30,height:30},clickEvent:alertMessage});
 * @param option 示例值：{rectArea:{x:0,y:0,width:30,height:30},clickEvent:alertMessage}
 *
 * @constructor
 */
var BindClickEventToRectangle=function (option) {

    var judgeInsideRectArea=function(x,y,rectArea){
        return x>rectArea.x && x<(rectArea.x+rectArea.width)
            && y>rectArea.y && y<(rectArea.y+rectArea.height);
    }
    this.trigger={};
    this.trigger.list=[];
    //if(option) this.trigger.list.push(option);
    // this.trigger.listen = function () {
    //     //访问的是this的list，this指trigger
    //     var list = this.list;
    //     document.addEventListener('click', function (event) {
    //         for (var i = 0; i < list.length; ++i) {
    //             var bindedEvent = list[i];
    //             if(judgeInsideRectArea(event.clientX, event.clientY, bindedEvent.rectArea)) {
    //                 bindedEvent.clickEvent(event);
    //             }
    //         }
    //     });
    // };
    this.addClickEvent = function(clickEventToBind){
        this.trigger.list.push(clickEventToBind);
        document.addEventListener('click', function (event) {
            if(judgeInsideRectArea(event.clientX, event.clientY, clickEventToBind.rectArea)) {
                clickEventToBind.clickEvent(event);
            }
        });
    };
    if(option) this.addClickEvent(option);
};
/**
 * 画连续的指定格式矩形
 * @param option {pen:context,startX:10,startY:20,width:200,height:100,borderWidth:15,wholeWidth:500,fillStyle:"#000"}
 */
function drawListOfRectangle(option){
    var pen = option.pen;
    var startX = option.startX;
    var startY = option.startY;
    var width = option.width;
    var height = option.height;
    var borderWidth = option.borderWidth;
    var wholeWidth = option.wholeWidth;
    var fillStyle = option.fillStyle;

    var N = (wholeWidth-startX)/(width+borderWidth);
    pen.fillStyle=fillStyle;
    var i = 0;
    for( ;i<N;i++){
        pen.fillRect(startX + i*(width+borderWidth), startY, width, height);
    }
    var lastX = startX + i*(width+borderWidth);
    pen.fillRect(lastX, startY, wholeWidth-lastX, height);
}