(function($){
   $.extend({
        ajaxExtend : function(options) {
            var _success = options.success;
            options.success = function(data) {
                var code = data.code;
                if (code == 63001) {
                    location.href = 'https://passport.9888.cn/passport/login?sourceSite=jrgc';
                } else if (code == 60000) {
                    GlobalAlert("程序异常");

                } else if (code == 63023) {
                    GlobalAlert("参数格式错误");

                }else if (code == 63011) {
                    GlobalAlert("活动时间配置错误");

                }else if (code == 63008) {
                    GlobalAlert("活动尚未开始");

                }else if (code == 63009) {
                    GlobalAlert("活动已结束");

                }else if (code == 63004) {
                    GlobalAlert("用户没有权限");

                }else if (code == 63002) {
                    GlobalAlert("领取异常");

                } else if (code == 63003) {
                    GlobalAlert("未达到领取条件");

                }else if (code == 63005) {
                    GlobalAlert("大礼包不存在");

                }else if (code == 63006) {
                    GlobalAlert("重复提交");

                }else if (code == 63007) {
                    GlobalAlert("频繁领取");

                }else if (code == 63010) {
                    GlobalAlert("已领取");

                }else if(code == 63022){
                    GlobalAlert("库存不足");

                }else if(code == 63012){
                    GlobalAlert("用户等级未开启");

                }else if(code == 63013){
                    GlobalAlert("转盘与当前活动不一致");

                }else if(code == 63015){
                    GlobalAlert("转盘尚未开始");

                }else if(code == 63016){
                    GlobalAlert("转盘已结束");

                }else if(code == 63017){
                    GlobalAlert("没有抽奖机会");

                }else if(code == 63018){
                    GlobalAlert("抽奖异常");

                }else if(code == 63019){
                    GlobalAlert("奖品已抽完");

                }else if(code == 63020){
                    GlobalAlert("没有中奖");

                }else if(code == 63021){
                    GlobalAlert("红包不存在");

                }else if(code == 63024){
                    GlobalAlert("用户不存在");

                }else if(code == 63025){
                    GlobalAlert("自己不能赠送给自己");

                }else if(code ==63026){
                    GlobalAlert("不是好友");
                    
                }else{
                    _success(data);
                }
            };
            $.ajax(options);
        }
    });
})(jQuery);