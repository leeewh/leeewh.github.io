$(function () {

    var changeNum = function () {
        $('body').on('tap','.mui-btn',function () {

            var $input = $(this).siblings('input');
            var curr = parseInt($input.val());
            var max = $input.parent().attr('data-numbox-max');
            // console.log(max)
            if($(this).hasClass('mui-btn-numbox-minus')){
                if(curr==0){
                    mui.toast('不能更少了！');
                    return false;
                }
                curr--;
            };
            if($(this).hasClass('mui-btn-numbox-plus')){
                if(curr>=max){
                    mui.toast('没有更多库存了！');
                    return false;
                };
                curr++;
                console.log(1)
            };
            // console.log(curr)
            $input.val(curr)
        }).off('tap','.mui-btn')
    };

    changeNum();


    var choose = function () {
        $('body').on('tap','.size',function () {
            $(this).addClass('now').siblings().removeClass('now')
        })
    }
    choose();

    var addCart = function () {
        $('.mui-btn-danger').on('tap',function () {
            var size = $('.size.now').html()
            if (!size){
                mui.toast('请选择尺码！');
                return false
            }
            if($('.mui-btn').siblings('input').val()==0){
                mui.toast('请选择数量！');
                return false
            }
            else {
                location.href = 'user/cart.html'
            }
        })
    }

    addCart();

})




