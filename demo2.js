/**
 * Created by Administrator on 2017/1/6.
 */
$(function(){
    $('.bigger').click(function(){
        var str = $('#comment').height();
        //var s=parseInt($('#comment').css('font-size'))+5;
        //$('#comment').css('font-size',s);
       // $('#comment').height(str+50);
        //is�����ж��Ƿ���ִ��  ���ִ�ж���  ����Ͳ���  û��ִ�в����Ӷ���  ��ֹ�����ͣ�������ڶ�
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