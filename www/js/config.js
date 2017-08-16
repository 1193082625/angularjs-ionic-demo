/**
 * Created by 小虎Oni on 2016/5/19.
 */
'use strict';

// 使用$provide.constant来定义了一个静态变量(见app.js中的config的配置)
app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
        //*** Controllers
        'AccountCtrl':"js/controllers/AccountCtrl.js",
        'ChatDetailCtrl':"js/controllers/ChatDetailCtrl.js",
        'ChatsCtrl':"js/controllers/ChatsCtrl.js",
        'DashCtrl':"js/controllers/DashCtrl.js",
        'TestCtrl':"js/controllers/TestCtrl.js",
        //*** Services
        'ChatsService':"js/services/ChatsService.js",
        'TestService':"js/services/TestService.js"
        //***  工具类
        //*** 主件
    },
    CssArg:{
      TestStyle:'css/style.css'
    },
    ViewArgs: {
      ChatsArgs: ['ChatsCtrl','ChatsService'],
      ChatDetailCtrlArgs: ['ChatDetailCtrl','ChatsService'],
      TestArgs: ['TestCtrl', 'TestService','TestStyle']
    }
});
