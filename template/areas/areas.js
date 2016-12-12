/**,
 * Created by 火星时代 on 2016/11/24.
 */
//注册控制器
angular.module("myapp").controller("areasCtrl", function ($scope,$http) {
    //设置3个变量 改变 切换选项卡
    $scope.tab1 = {state: false, id: 1};
    $scope.tab2 = {state: true, id: 2}
    $scope.tab3 = {state: false, id: 3}
    //下拉刷新
    $scope.doRefresh = function () {
    };
    //点击切换
    $scope.changetab = function (tab) {
        switch (tab.id) {
            case 1:
                tab.state = true;
                $scope.tab2.state = false;
                $scope.tab3.state = false;
                break;
            case 2:
                tab.state = true;
                $scope.tab1.state = false;
                $scope.tab3.state = false;
                break;
            case 3:
                tab.state = true;
                $scope.tab1.state = false;
                $scope.tab2.state = false;
                break;
        }
    };
    //话题数据
    $scope.huatidata = [
        {"imgsrc":"areas_huati_logo1 (1).jpg","title":"综合体育","desc":"聚焦各项体育赛事"},
        {"imgsrc":"areas_huati_logo1 (2).jpg","title":"数码脑残粉","desc":"数码科技达人聚集地"},
        {"imgsrc":"areas_huati_logo1 (3).jpg","title":"电影圈","desc":"电影同好联盟"},
        {"imgsrc":"areas_huati_logo1 (4).jpg","title":"健身房","desc":"人鱼线，马甲线都在这里"},
        {"imgsrc":"areas_huati_logo1 (5).jpg","title":"颤抖把吃货","desc":"拥抱美食和吃货"},
        {"imgsrc":"areas_huati_logo1 (6).jpg","title":"时尚大联盟","desc":"生活不止柴米油盐，还有鞋子和包包 "},
        {"imgsrc":"areas_huati_logo1 (7).jpg","title":"懂小姐","desc":"可能是ZAKER最火的社区"},
        {"imgsrc":"areas_huati_logo1 (8).jpg","title":"汽车总动员","desc":"随心所欲畅聊车的一切"},
        {"imgsrc":"areas_huati_logo1 (9).jpg","title":"扎堆","desc":"杂谈"},
        {"imgsrc":"areas_huati_logo1 (10).jpg","title":"APP ","desc":"对方不想理解你，并向你扔了个app"}
    ];
    //精选数据
    $scope.jinxuandata = [
        {
            "headimg": "headimg (1).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (1).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (2).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (2).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (3).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (3).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (4).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (4).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (5).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (5).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (6).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (6).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (7).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (7).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (8).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (8).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (9).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (9).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (10).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (10).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        }
    ];
    // 朋友圈数据
    $scope.haoyouquandata= [
        {
            "headimg": "headimg (1).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (1).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (2).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (2).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (3).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (3).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (4).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (4).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (5).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (5).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (6).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (6).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (7).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (7).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (8).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (8).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (9).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (9).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        },
        {
            "headimg": "headimg (10).jpg",
            "username": "袁芳你怎么看",
            "time": "一小时前",
            "note": "热血篮球",
            "txt": "北京时间 11 月 24 日，今日 NBA 共有 13 场比赛，多人数据大爆炸庆祝感恩节。骑士开拓者上演对攻大战，勒夫单节砍下 34 分助骑士主场奏凯。老鹰止住颓势击败保罗 - 乔治复出的步行者。太阳战胜魔术，马刺击败黄蜂。灰熊双加时击败 76 人，活塞轻取热火。凯尔特人大胜篮网",
            "img": "jinxuanimg (10).jpg",
            "checknum": "1032434",
            "chatnum": "43",
            "thumnum": "21"
        }
    ];
    //下啦刷新
    $scope.doRefresh = function () {
        $http.get("json.json")
            .success(function (data) {
                $scope.jinxuandata = data;
            })
            .finally(function () {
                $scope.$broadcast("scroll.refreshComplete");
            });
    };
    $scope.page=0;
    $scope.total=1;
    //上啦刷新
    $scope.fn = function () {
        $http.get("json1.json")
            .success(function (data) {
                $scope.total++;
                //利用原生的数组方法把 达到的数组 追加到 数组后面
                Array.prototype.push.apply($scope.jinxuandata,data);
            })
            .finally(function () {
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };

});