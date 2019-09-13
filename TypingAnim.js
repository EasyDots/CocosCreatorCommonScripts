/**
 * version:0.1
 * date:20190913
 * author:easydots
 * description:打字效果动画脚本
 */
cc.Class({
    extends: cc.Component,
    properties: {
    },
    onLoad(){
    },
    start () {
        this.label = this.node.getComponent(cc.Label);
        if(this.label != null){
            this.typingAni(this.label, this.label.string);
        }
    },
    typingAni: function (label, text, cb) {
        var self = this;
        var labelContent = '';
        var arr = text.split('');
        var len = arr.length;
        var step = 0;
        self.func = function () {
            labelContent += arr[step];
            label.string = labelContent;
            if (++step == len) {
                self.unschedule(self.func, self);
                cb && cb();
            }
        }
        self.schedule(self.func,0.1, cc.macro.REPEAT_FOREVER, 0)
    },
     update (dt) {
     },
});
