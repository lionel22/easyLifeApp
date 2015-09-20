angular.module('wallet.user.controllers', [])

  .controller('WalletCtrl', function($scope,$log, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,$ionicAnalytics) {

    $ionicAnalytics.track('WalletCtrl', {
      item: {
        id: 'WC',
        name: 'Loading ... '
      }
    });

    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
      ionicMaterialMotion.slideUp({
        selector: '.slide-up'
      });
    }, 300);
    $scope.navSlide = function(index) {
     // $ionicSlideBoxDelegate.slide(index, 500);
    }

    $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
        startVelocity: 3000
      });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
  })
