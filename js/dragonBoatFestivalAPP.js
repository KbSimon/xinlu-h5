/**
 * Created by ¸ð½­ÌÎ on 2017/5/24.
 */
$(function(){
    var i=$("#he_long01").css('width');
    console.log(parseFloat(i));
    if(parseFloat(i)<=494 && parseFloat(i)>=0){
        console.log("1111");
        $("#he_long_img01").removeClass("he_long_img_active");
        $("#he_long_img01").removeClass("he_long_img_active02");
    }else if(parseFloat(i)>494 && parseFloat(i)<674){
        console.log("2222");
        $("#he_long_img01").removeClass("he_long_img_active");
        $("#he_long_img01").removeClass("he_long_img_active02");
        $("#he_long_img01").addClass("he_long_img_active");
    }else if(parseFloat(i)==674){
        console.log("3333");
        $("#he_long_img01").removeClass("he_long_img_active");
        $("#he_long_img01").removeClass("he_long_img_active02");
        $("#he_long_img01").addClass("he_long_img_active02");
    }else{
        console.log("0000");
    }



    var i02=$("#he_long02").css('width');
    console.log(parseFloat(i02));
    if(parseFloat(i02)<=494 && parseFloat(i02)>=0){
        console.log("aaaa");
        $("#he_long_img02").removeClass("he_long_img_active");
        $("#he_long_img02").removeClass("he_long_img_active02");
    }else if(parseFloat(i02)>494 && parseFloat(i02)<674){
        console.log("bbbb");
        $("#he_long_img02").removeClass("he_long_img_active");
        $("#he_long_img02").removeClass("he_long_img_active02");
        $("#he_long_img02").addClass("he_long_img_active");
    }else if(parseFloat(i02)==674){
        console.log("cccc");
        $("#he_long_img02").removeClass("he_long_img_active");
        $("#he_long_img02").removeClass("he_long_img_active02");
        $("#he_long_img02").addClass("he_long_img_active02");
    }else{
        console.log("dddd");
    }

});