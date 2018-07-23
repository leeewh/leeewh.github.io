$(function () {


    //按钮刷新功能

    //修改购物车商品




    //删除商品

    $('body').on('tap','.mui-icon-trash',function () {
        $(this).parent().parent().remove();
    })


    //打勾显示总金额
    $('body').on('change','input',function () {
        setMoney();
    })


})

//计算金额
var setMoney = function () {
    var sum = 0;
    $('input:checked').each(function (i,item) {
        var num = $(this).attr('data-price');
        var mul = $(this).attr('data-num');
        num = num*mul;
        sum += num
    });
    if((Math.floor(sum*100))%100==0){
        sum = Math.floor(sum*100)/100+'.00'
        $('.mt_cart span').html(sum);
        return false;
    }
    if(Math.floor(sum*100)%10==0){
        sum = Math.floor(sum*100)/100+'.0';
        $('.mt_cart span').html(sum);
        return false;
    }
    console.log(sum)
    $('.mt_cart span').html(sum)
}
mui('.mui-scroll-wrapper').scroll({
    scrollY:true,
    scrollX:true,
    bounce: true ,//是否启用回弹
    indicators: false, //是否显示滚动条
});