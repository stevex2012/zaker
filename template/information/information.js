/**
 * Created by 火星时代 on 2016/11/24.
 */
//注册控制器
angular.module("myapp").controller("informationCtrl",function ($scope) {
    //轮播图片数据
    $scope.lunbodata=[
        {"imgsrc":"1 (1).jpg"},
        {"imgsrc":"1 (2).jpg"},
        {"imgsrc":"1 (3).jpg"},
        {"imgsrc":"1 (4).jpg"},
        {"imgsrc":"1 (5).jpg"}
    ];
   //logo图片区域数据
    $scope.logodata=[
        {"imgsrc":"information-logo (1).png"},
        {"imgsrc":"information-logo (2).png"},
        {"imgsrc":"information-logo (3).png"},
        {"imgsrc":"information-logo (4).png"},
        {"imgsrc":"information-logo (5).png"},
        {"imgsrc":"information-logo (6).png"},
        {"imgsrc":"information-logo (7).png"},
        {"imgsrc":"information-logo (8).png"},
        {"imgsrc":"information-logo (9).png"},
        {"imgsrc":"information-logo (10).png"},
        {"imgsrc":"information-logo (11).png"},
        {"imgsrc":"information-logo (12).png"},
        {"imgsrc":"information-logo (13).png"},
        {"imgsrc":"information-logo (14).png"},
        {"imgsrc":"information-logo (15).png"},
        {"imgsrc":"information-logo (16).png"}
    ];
    //重排按钮的show   hide
    $scope.config={
        showDelete:false,
        showReorder:false

    };
});