/**
 * Created by 火星时代 on 2016/11/24.
 */
//注册控制器
angular.module("myapp").controller("playfunCtrl",function ($scope) {
    //logo 图片
    $scope.playfunlogo=[
        {"imgsrc":"playfunlogo_03.jpg"},
        {"imgsrc":"playfunlogo_05.jpg"},
        {"imgsrc":"playfunlogo_07.jpg"}
    ];
    //图片滑动区域
    $scope.playfunimglist=[
        {"imgsrc":"playfunbg (1).jpg","txt":"辣眼睛！她裤裆藏 22 部苹果过海关"},
        {"imgsrc":"playfunbg (2).jpg","txt":"世界最贵汽车 稀有法拉利 250 GTO"},
        {"imgsrc":"playfunbg (3).jpg","txt":"大尺度碎节操，这些片最适合躲在被窝看"},
        {"imgsrc":"playfunbg (4).jpg","txt":"在江南的冷空气里吃一碗热汤面，是入冬时最幸福的事"},
        {"imgsrc":"playfunbg (5).jpg","txt":"清水泡一泡这些东西，秋冬不生病！"},
        {"imgsrc":"playfunbg (6).jpg","txt":"这些外型超酷的小岛你去过吗 ?"},
        {"imgsrc":"playfunbg (7).jpg","txt":"12 星座今天最应该感恩谁？"},
        {"imgsrc":"playfunbg (8).jpg","txt":"金刚石合成石墨烯技术成功：省时省钱"},
        {"imgsrc":"playfunbg (9).jpg","txt":"宝宝接种疫苗 , 打预防针必看"},
        {"imgsrc":"playfunbg (10).jpg","txt":"魂斗罗手游定名《魂斗罗 : 归来》 含装备升级系统"}
    ];

});