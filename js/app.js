/**
 * Created by 火星时代 on 2016/11/22.
 */
//主模块
var myapp = angular.module("myapp", ["ionic"]);
//主要控制器
myapp.controller("mainCtrl", function ($scope) {
    //body背景图
   //显示tabs
   //所有频道------
    $scope.channel=[
        {"txt":"重庆","check":true},
        {"txt":"愉生活","check":false},
        {"txt":"今日看点","check":false}

    ];
    $scope.channelNum=0;
    //先判断有几个频道选中
    $scope.checkChannelNum=function () {
        angular.forEach($scope.channel,function (m) {
           if(m.check==true){
               $scope.channelNum++;
           };
        });
        $scope.channelNum==3?$scope.channelNum=3:$scope.channelNum=0;
    };
    $scope.checkChannelNum();
    //点击全选、、
    $scope.checkallChannel=function (channelNum) {
        if(channelNum!=$scope.channel.length){
            angular.forEach($scope.channel,function (m) {
                m.check=true;
            });
            $scope.channelNum=3;
            console.log($scope.channelNum);
        }else if(channelNum==$scope.channel.length){
            angular.forEach($scope.channel,function (m) {
                m.check=false;
            });
            $scope.channelNum=0;
        }
    };
    //点击单选
    $scope.chooseChannel=function (m) {
        if(m.check==true){
            m.check=false;
        }else{
            m.check=true;
        }
        $scope.checkChannelNum();
    }




});
//配置路由
myapp.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
//android 设备tabs 始终在下面
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $stateProvider
        .state("home", {//主页
            url: "/home",
            templateUrl: "template/home/home.html"
        })
        .state("tabs", {//导航页
            url: "/tabs",
            abstract: true,
            templateUrl: "template/tabs/tabs.html"
        })
        .state("tabs.areas", {//tabs---社区--部分
            url: "/areas",
            views: {areas: {templateUrl: "template/areas/areas.html",controller:"areasCtrl"}}
        })
        .state("tabs.information", {//tabs--资讯部分
            url: "/information",
            views: {information: {templateUrl: "template/information/information.html",controller:"informationCtrl"}}
        })
        .state("tabs.playfun", {//tabs---玩乐部分
            url: "/playfun",
            views: {playfun: {templateUrl: "template/playfun/playfun.html",controller:"playfunCtrl"}}
        })
        .state("tabs.primary", {//我的
            url: "/primary",
            views: {primary: {templateUrl: "template/primary/primary.html",controller:"primaryCtrl"}}
        })
        .state("moresettings", {//我的----里面的--更多设置
            url: "/moresettings",
            templateUrl: "template/primary/moresettings/moresettings.html",controller:"moresettingsCtrl"}
        )
        .state("outlineLoading", {//我的---里面---离线下载
            url: "/outlineLoading",
            templateUrl: "template/primary/outlineLoading/outlineLoading.html"
        })
        .state("twitterTop", {//我的---里面---推送头条
        url: "/twitterTop",
        templateUrl: "template/primary/twitterTop/twitterTop.html",controller:"twitterTopCtrl"
    });
    //默认路由
    $urlRouterProvider.otherwise("/home");

});