
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/ProjectInfo/ProjectInfo","pages/mainpage/home/home","pages/mainpage/engin/engin","pages/mainpage/assess/assess","pages/mainpage/usermes/usermes"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"--","navigationBarBackgroundColor":"#343440","backgroundColor":"#00aa00"},"tabBar":{"borderStyle":"black","backgroundColor":"#343440","color":"#8F8F94","selectedColor":"#46BDCF","list":[{"pagePath":"pages/mainpage/home/home","iconPath":"static/img/tabbar/home.png","selectedIconPath":"static/img/tabbar/homeactive.png","text":"首页"},{"pagePath":"pages/mainpage/engin/engin","iconPath":"static/img/tabbar/engin.png","selectedIconPath":"static/img/tabbar/enginactive.png","text":"工程项目"},{"pagePath":"pages/mainpage/assess/assess","iconPath":"static/img/tabbar/news.png","selectedIconPath":"static/img/tabbar/newsactive.png","text":"现场评定"},{"pagePath":"pages/mainpage/usermes/usermes","iconPath":"static/img/tabbar/me.png","selectedIconPath":"static/img/tabbar/meactive.png","text":"我的信息"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"myuniapp","compilerVersion":"2.7.9","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/ProjectInfo/ProjectInfo","meta":{},"window":{"navigationBarTitleText":"建设工程详情"}},{"path":"/pages/mainpage/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"建设工程消防验收"}},{"path":"/pages/mainpage/engin/engin","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"工程项目"}},{"path":"/pages/mainpage/assess/assess","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"现场评定"}},{"path":"/pages/mainpage/usermes/usermes","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的信息"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
