/**
 * Created by Administrator on 2017/1/6.
 */
$(function(){
    $('.bigger').click(function(){
        var str = $('#comment').height();
        //var s=parseInt($('#comment').css('font-size'))+5;
        //$('#comment').css('font-size',s);
       // $('#comment').height(str+50);
        //is用于判断是否在执行  如果执行动画  点击就不加  没有执行才增加动画  防止点多了停下来还在动
        if(!$('#comment').is(':animated')){
            $('#comment').animate({
                height:'+=50'
            })
        }
    })
    $('.smaller').click(function(){
        var str = $('#comment').height();
        // $('#comment').height(str+50);
        if(!$('#comment').is(':animated')){
            $('#comment').animate({
                height:'-=50'
            })
        }
    })
});