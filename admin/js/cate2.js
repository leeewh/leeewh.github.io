
$(function () {
    $('.addBtn1').on('click',function () {
        $('#form').data('bootstrapValidator').updateStatus('brandName','INVALID','notEmpty');
        $('#form').data('bootstrapValidator').updateStatus('categoryId','INVALID','notEmpty');
        $('#form').data('bootstrapValidator').updateStatus('brandLogo','INVALID','notEmpty');
    })

    $('.dropdown-menu').on('click','a',function () {
        var value = $(this).html();
        var id = $(this).attr('data-id')
        $('.categoryName').html(value);
        $('[name="categoryId"]').val(id);
        $('#form').data('bootstrapValidator').updateStatus('categoryId','VALID');
    })

    $('#form').bootstrapValidator({
        /*默认不去校验的表单元素（包含隐藏）*/
        excluded:[],
        /*配置校验的不同状态下显示的图标*/
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        /*需要校验的表单元素 通过名称 name*/
        fields: {
            brandName: {
                validators: {
                    notEmpty: {
                        message: '请输入二级分类名称'
                    }
                }
            },
            categoryId: {
                validators: {
                    notEmpty: {
                        message: '请选择一级分类'
                    }
                }
            },
            brandLogo:{
                validators: {
                    notEmpty: {
                        message: '请上传图片'
                    }
                }
            }
        }
    }).on('success.form.bv', function (e) {
        e.preventDefault();
        $('#addModal2').modal('hide');
    });
});