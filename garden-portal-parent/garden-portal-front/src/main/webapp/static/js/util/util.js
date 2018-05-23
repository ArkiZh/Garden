/**
 * 为指定矩形区域绑定点击事件
 * @param option 示例值：{rectArea:{x:0,y:0,width:30,height:30},clickEvent:alertMessage}
 * @constructor
 */
var BindClickEventToRectangle=function (option) {
    this.rectArea=option.rectArea;
    this.clickEvent=option.clickEvent;

    var judgeInsideRectArea=function(x,y,rectArea){
        return x>rectArea.x && x<(rectArea.x+rectArea.width)
            && y>rectArea.y && y<(rectArea.y+rectArea.height);
    }
    this.trigger={};
    this.trigger.list=[];
    if(option) this.trigger.list.push(option);

    this.trigger.listen = function () {
        //访问的时this的list，this指trigger
        var list = this.list;
        document.addEventListener('click', function (event) {
            for (var i = 0; i < list.length; ++i) {
                var bindedEvent = list[i];
                if(judgeInsideRectArea(event.clientX, event.clientY, bindedEvent.rectArea)) {
                    bindedEvent.clickEvent(event);
                }
            }
        });
    };

    this.trigger.listen();
};