/**
 * Created by 火星时代 on 2016/11/25.
 */
angular.module('myapp').controller('primaryCtrl', function($scope, $ionicModal) {
        // 构造模式对话框 - 创建仅服务于当前页面的子页面
        $ionicModal.fromTemplateUrl('primary_modal.html', {
            scope: $scope,       // 作用域使用父作用域
                       animation: 'slide-in-up'  // 内置了一种动画，其余是自己写的
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
            //animation: 'scale-in'
        }).then(function(modal) {
            // 将这个模态对话框保存到一个变量中，方便以后再使用
            $scope.modal = modal;   // 传入的参数model就是构造好的对话框
        });

        $scope.openModal = function() {
            $scope.modal.show();        // 打开对话框
        };

        $scope.closeModal = function() {
            $scope.modal.hide();        // 隐藏对话框(隐藏不是销毁)
        };

        // 创建新联系人
        $scope.createContact = function(u) {
            $scope.contacts.push({ name: u.username,email: u.email});
            $scope.modal.hide();    // 隐藏
        };

        // 离开时清除model
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });

        // 在隐藏modal时执行一些动作
        $scope.$on('modal.hidden', function() {
            // 在这里执行一些操作
        });

        // 在移除modal时执行一些动作
        $scope.$on('modal.removed', function() {
            // 在这里执行一些操作
        });
    });