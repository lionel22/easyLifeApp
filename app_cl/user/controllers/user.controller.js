/**
 * Created by Demax on 24/08/2015.
 */
/* global angular, document, window */
'use strict';

angular.module('user.controllers', [
  'profil.user.controllers',
  'communication.user.controllers',
  'home.user.controllers',
  'communication.user.controllers',
  'wallet.user.controllers',
  'shopping.user.controllers',
  'java.user.controllers',
  'aliment.user.controllers',
  'communication.user.controllers',
  'transport.user.controllers',
])

  .controller('AppCtrl', function($scope,$log, $ionicModal, $ionicPopover, $timeout) {

    $log.log("loading AppCtrl ....");

    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;


    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
      navIcons.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
      document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
      document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
      var content = document.getElementsByTagName('ion-content');
      for (var i = 0; i < content.length; i++) {
        if (content[i].classList.contains('has-header')) {
          content[i].classList.toggle('has-header');
        }
      }
    };

    $scope.setExpanded = function(bool) {
      $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
      var hasHeaderFabLeft = false;
      var hasHeaderFabRight = false;

      switch (location) {
        case 'left':
          hasHeaderFabLeft = true;
          break;
        case 'right':
          hasHeaderFabRight = true;
          break;
      }

      $scope.hasHeaderFabLeft = hasHeaderFabLeft;
      $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
      var content = document.getElementsByTagName('ion-content');
      for (var i = 0; i < content.length; i++) {
        if (!content[i].classList.contains('has-header')) {
          content[i].classList.toggle('has-header');
        }
      }

    };

    $scope.hideHeader = function() {
      $scope.hideNavBar();
      $scope.noHeader();
    };

    $scope.showHeader = function() {
      $scope.showNavBar();
      $scope.hasHeader();
    };

    $scope.clearFabs = function() {
      var fabs = document.getElementsByClassName('button-fab');
      if (fabs.length && fabs.length > 1) {
        fabs[0].remove();
      }
    };
  })

  .controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk,$ionicLoading /*,socket*/,Auth,$state) {
    console.log("loading LoginCtrl ....");


   // window.analytics.debugMode();
  //  window.analytics.trackView('Login Page');

    $scope.user={
      name:"",
      password:""
    }

    $scope.$parent.clearFabs();
    $timeout(function() {
      $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();

    $scope.login=function login(user) {

      $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
      });
     // window.analytics.trackEvent('Action', 'Click', 'login button', 0);

      Auth.login(user.name, user.password).then(function(data) {


        if(data.success) {
          //window.analytics.trackEvent('Action', 'Click', 'login button', 1);
          $ionicLoading.hide();
        //  $cordovaGoogleAnalytics.setUserId('demax-test');
          $state.go('app.home');
        } else {
        //  window.analytics.trackEvent('Action', 'Click', 'login button', 2);

          alert('Username / Password not valid. Try again');
        }
      })


      /*
      socket.emit('login',{user:$scope.user},function(result){
        if(!result){

        }else{
          alert("okay")
        }
      })*/

    }
  })


  .controller('FriendsCtrl', function ($scope,$log, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
  // console.log("loading FriendsCtrl ....");
    $log.log("loading FriendsCtrl ....");

    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function () {
      $scope.isExpanded = true;
      $scope.$parent.setExpanded(true);
      ionicMaterialMotion.fadeSlideInRight();

    }, 300);

    // Set Motion


    // Set Ink

    $scope.liste=[
      {img: 'img/jon-snow.jpg', title: 'Daenerys Targaryen', content: 'Dragon mommy'},
      {img: 'img/daenerys.jpg', title: 'Daenerys Targaryen', content: 'Dragon mommy'},
      {img: 'img/arya.jpg', title: 'Arya Stark', content: 'Is Chuck Norris  fear'},
      {img: 'img/sansa.jpg', title: 'Tyrion Lannister', content: 'B.A.M.F. imp'}
    ];

    ionicMaterialInk.displayEffect();

  })

  .controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
      ionicMaterialMotion.fadeSlideIn({
        selector: '.animate-fade-slide-in .item'
      });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    $scope.don="lionel";

  })

  .controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
      selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
      selector: '.animate-fade-slide-in .item'
    });

  })

;
