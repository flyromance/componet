/** baseUrl：来源
 * 1、data-main的路径值，如果没有往下
 * 2、config配置中baseUrl，如果没有往下
 * 3、使用当前页面的路径
 */

/** 以下三种情况，会被认为是绝对路径，忽略baseUrl配置
 * 1、url有.js后缀
 * 2、以/开头
 * 3、以http(s)开头
 */
 

require.config({
    baseUrl: '/js',
    paths: {
        'jquery': 'lib/jquery-1.11.3',
        'jqueryUI': 'lib/jquery-ui',
        'widget': 'component/widget',
        'popup': 'component/popup'
    }
});

require(['jquery', 'popup'], function ($, popup) {

    // 初始化popup组件，并且传入显示文字
    /*$('#btn').click(function(e){
        var _popup = new popup.popup();
        _popup.alert('welcome!');
    });*/

    // 添加回调函数
    /*$('#btn').click(function(e){
        var _popup = new popup.popup();
        _popup.alert('welcome!',function(){alert('sure to close it?')});
    });*/

    // 自定义弹窗的宽高
    /*$('#btn').click(function(e){
        var _popup = new popup.popup();
        _popup.alert('welcome!',function(){
            alert('sure to close it?')
        },{
            width:300,
            height:150,
            y:50
        });
    });*/

    // 重新定义传参方式，也就是修改接口格式api，更加的优雅了！
    /*$('#btn').click(function(e){
        var _popup = new popup.popup();
        _popup.alert({
            content:'welcome!',
            callback:function(){
                alert('sure to close it?')
            },
            width:300,
            height:150,
            y:50
        });
    });*/

    // 定制标题、添加关闭按钮、添加回调、添加换肤、添加拖拽功能
    /*$('#btn').click(function(e){
        var _popup = new popup.popup();
        _popup.alert({
            content:'你好，这是弹窗',
            title:'系统消息',
            width:400,
            height:200,
            y:100,
            confirmCallback:function(){
                alert('custom sure callback')
            },
            closeCallback:function(){
                alert('custom close callback');
            },
            hasCloseButton:true,
            skinClassName:'popup-skin-a',
            confirmBtnText:'提交',
            dragHandler:'.popup-header'
        });
    });*/

    // 自定义事件，也就是观察者模式
    // 优点：跳出原生事件的限制，提高封装的抽象层级
    /*$('#btn').click(function(e){
        var _popup = new popup.popup();
       console.log(_popup);
        _popup.alert({
            content:'你好，这是弹窗',
            title:'系统消息',
            width:400,
            height:200,
            y:100,
            confirmCallback:function(){
                alert('custom sure callback')
            },
            closeCallback:function(){
                alert('custom close callback');
            },
            hasCloseButton:true,
            skinClassName:'popup-skin-a',
            confirmBtnText:'提交',
            dragHandler:'.popup-header',
        });
        _popup.on('close',function(){
            alert('this is customized close event');
        });
        _popup.on('confirm',function(){
            alert('this is customized confirm event');
        });
        console.log(_popup);
    });*/

    // 组件类设计widget Class 设计模式
    $('#btn').click(function (e) {
        var _popup = new popup.popup(); // 创建实例化对象

        // 设置对象的配置参数，并创建组件（包括创建dom节点、设置特性等等）
        _popup.initConfirm({
            content: '你好，这是弹窗!!!',
            title: '系统消息',
            width: 400,
            height: 300,
            y: 100,
            confirmCallback: function () {
                alert('custom sure callback')
            },
            closeCallback: function () {
                alert('custom close callback');
            },
            hasCloseButton: true,
            skinClassName: 'popup-skin-a',
            isDraggable: true,
            dragHandler: '.popup-header'
        });
        // 添加自定义的事件
        _popup.on('close', function () {
            alert('this is customized close event');
        });
        _popup.on('alert', function () {
            alert('this is customized confirm event');
        });
    });
})
