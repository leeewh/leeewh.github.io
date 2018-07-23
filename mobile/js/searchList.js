$(function () {
    var key = $.trim(getLocUrl().key) || '';
    $('.mt_searchBar input').val(key);
    // 渲染页面
    $('.mt_pro_con a').on('tap', function () {
        location.href = 'product.html';
    });
})

