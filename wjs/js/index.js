$(function () {
    banner();
    tabSlide();
    $('[data-toggle="tooltip"]').tooltip();

});

//轮播图AJAX功能实现
var banner = function () {
    var getData = function (callback) {
        if (window.data) {
            callback && callback(window.data);
        } else {
            $.ajax({
                type: 'get',
                url: 'data/imgData.json',
                datatype: 'json',
                data: '',
                success: function (data) {
                    window.data = data;
                    callback && callback(window.data);
                }
            })
        }
    };
    var render = function () {
        getData(function (data) {
            var isMobile = $(window).width() < 768?true:false;
            var pointHtml = template('pointTemplate', {list: data});
            var imgHtml = template('imgTemplate', {list: data, isMobile: isMobile});
            // console.log(pointHtml);
            // console.log(imgHtml);
            $('.carousel-indicators').html(pointHtml);
            $('.carousel-inner').html(imgHtml);
        })

    };
    $(window).on('load',function () {
        render();
    });
    $(window).on('resize',function () {
        render();
    });
    // var touch = function () {
    //     var startX = 0;
    //     var distanceX = 0;
    //     var isMove = false;
    //     $('.wjs_banner').on('touchstart',function (e) {
    //         startX=e.originalEvent.touches[0].clientX;
    //     }).on('touchmove',function (e) {
    //         distanceX = e.originalEvent.touches[0].clientX - startX;
    //         isMove = true;
    //     }).on('touchend',function (e) {
    //         if (isMove&&Math.abs(distanceX)>50){
    //             if (distanceX>0){
    //                 $('.carousel').carousel('prev')
    //             }else {
    //                 $('.carousel').carousel('next')
    //             }
    //         }
    //     })
    // }
    // touch();
};

//实现nav-tab在移动端自适应进入可滑动状态

var tabSlide = function () {
    var tabWidth = 0;
    var $tabBox = $('.wjs_product .nav-tabs');
    $tabBox.find('li').each(function (i,item) {
        var liWidth = $(item).outerWidth(true);
        tabWidth += liWidth;
    })
    console.log(tabWidth);
    $tabBox.width(tabWidth);

    new IScroll($('.wjs_product_nav_tab')[0],{
        scrollX:true,
        click:true
    })
}
