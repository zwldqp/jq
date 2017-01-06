/**
 * Created by Administrator on 2017/1/6.
 */
$(function(){
   //$(':input').focus(function(){
   //     $(this).addClass('aa');
   // }).blur(function(){
   //     $(this).removeClass('aa');
   // })
    var str;
    $(':input').on({
        "focus" : function(){
                    str=$(this).val();
                    $(this).addClass('aa');
                    if(str==this.defaultValue){
                        $(this).val("");
                    }
                },
        "blur" : function(){$(this).removeClass('aa');
            if($(this).val()=='') {
                $(this).val(this.defaultValue);
            }
        }
    })
});