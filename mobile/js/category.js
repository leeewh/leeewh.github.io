$(function () {
    var data1 = {
        rows:[
            {id: 1, categoryName: "运动馆", isDelete: 1},
    {id: 2, categoryName: "女士馆", isDelete: 1},
    {id: 3, categoryName: "男士馆", isDelete: 1},
    {id: 4, categoryName: "帆布馆", isDelete: 1},
    {id: 5, categoryName: "户外管", isDelete: 1},
    {id: 6, categoryName: "电竞馆", isDelete: 1},
    {id: 7, categoryName: "篮球馆", isDelete: 1},
    {id: 8, categoryName: "足球馆", isDelete: 1}]
    };

    var data2 = {
        rows:[{id: 1, brandName: "耐克", categoryId: 1, brandLogo: "images/brand1.png" },
            {id: 2, brandName: "阿迪", categoryId: 1, brandLogo:"images/brand2.png"},
            {id: 3, brandName: "新百伦", categoryId: 1, brandLogo: "images/brand3.png" },
            {id: 4, brandName: "哥伦比亚", categoryId: 1, brandLogo: "images/brand4.png"},
            {id: 5, brandName: "匡威", categoryId: 1, brandLogo: "images/brand5.png" },
            {id: 8, brandName: "BEAU", categoryId: 1, brandLogo: "../upload/brand/b245d650-8dd2-11e8-9b4b-2b94c343d706.png" }]
    }
    $('.mt_left ul').html(template('mt_cate_left',data1));
    $('.mt_left ul').on('tap','li',function () {
        if ($(this).hasClass('now')){ return false }
        $(this).parent().find('li').removeClass('now');
        $(this).addClass('now');
    })
    $('.mt_right').find('ul').html(template('mt_cate_right', data2))
});

// var getLeftCate = function (callback) {
//     $.ajax({
//         type: 'get',
//         url:'/category/queryTopCategory',
//         data:'',
//         dataType:'json',
//         success:function (data) {
//             console.log(data);
//             callback&&callback(data);
//         }
//     })
// }
//
// var getRightCate = function (params,callback) {
//     $.ajax({
//         type: 'get',
//         url:'/category/querySecondCategory',
//         data:params,
//         dataType:'json',
//         success:function (data) {
//             console.log(data);
//             callback&&callback(data);
//         }
//     })
// }
//
var cateTap = function () {
    $('.mt_left ul').on('tap','li',function () {
        if ($(this).hasClass('now')){ return false }
        $(this).parent().find('li').removeClass('now')
        $(this).addClass('now');
        var dataId = $(this).attr('data-id');
        getRightCate({id: dataId}, function (data) {
            if(data.rows.length<=0){
                $('.mt_right').find('ul').html('没有获取到数据')
            }else {
                $('.mt_right').find('ul').html(template('mt_cate_right', data))
            }
        });
    })
}

