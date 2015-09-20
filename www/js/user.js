// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
/*
angular.module('starter',
  [
    'ionic',
    'ionic.service.core',
    'ionic.service.analytics',
   // 'ngMaterial',
    'user.config',
    'user.controllers',
   // 'tabs.swipable.directives',
    'ionic-material',
    'ionMdInput',
    'services'
  ])
  .constant('ApiEndpoint', {
    url: 'http://localhost:8100/api'
   // url: 'https://easy-life.herokuapp.com/api'
  })

  .run(function($ionicPlatform, $ionicAnalytics) {
    $ionicPlatform.ready(function() {

      $ionicAnalytics.register();
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

*/


angular.module('user.config', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Turn off caching for demo simplicity's sake
  $ionicConfigProvider.views.maxCache(0);

  /*
   // Turn off back button text
   $ionicConfigProvider.backButton.previousTitleText(false);
   */


  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.activity', {
      url: '/activity',
      views: {
        'menuContent': {
          templateUrl: 'templates/activity.html',
          controller: 'ActivityCtrl'
        },
        'fabContent': {
          template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
          controller: function ($timeout) {
            $timeout(function () {
              document.getElementById('fab-activity').classList.toggle('on');
            }, 200);
          }
        }
      }
    })

    .state('app.friends', {
      url: '/friends',
      views: {
        'menuContent': {
          templateUrl: 'templates/friends.html',
          controller: 'FriendsCtrl'
        },
        'fabContent': {
          template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
          controller: function ($timeout) {
            $timeout(function () {
              document.getElementById('fab-friends').classList.toggle('on');
            }, 900);
          }
        }
      }
    })

    .state('app.gallery', {
      url: '/gallery',
      views: {
        'menuContent': {
          templateUrl: 'templates/gallery.html',
          controller: 'GalleryCtrl'
        },
        'fabContent': {
          template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
          controller: function ($timeout) {
            $timeout(function () {
              document.getElementById('fab-gallery').classList.toggle('on');
            }, 600);
          }
        }
      }
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/user/login.user.html',
          controller: 'LoginCtrl'
        },
        'fabContent': {
          template: ''
        }
      }
    })


    .state('app.wallet', {
      url: '/wallet',
      views: {
        'menuContent': {
          templateUrl: 'templates/user/wallet.user.html',
          controller: 'WalletCtrl'
        },
        'fabContent': {
          template: ''
        }
      }
    })

    .state('app.java', {
      url: '/java',
      views: {
        'menuContent': {
          templateUrl: 'templates/user/java.user.html',
          controller: 'JavaCtrl'
        },
        'fabContent': {
          template: ''
        }
      }
    })
    .state('app.profil', {
      url: '/profil',
      views: {
        'menuContent': {
          templateUrl: 'templates/user/profil.user.html',
          controller: 'ProfilCtrl'
        },
        'fabContent': {
          template: ''
        }
      }
    })

    .state('app.shopping', {
      url: '/shopping',
      views: {
        'menuContent': {
          templateUrl: 'templates/user/shopping.user.html',
          controller: 'ShoppingCtrl'
        },
        'fabContent': {
          template: ''
        }
      }
    })
    .state('app.transport', {
      url: '/transport',
      views: {
        'menuContent': {
          templateUrl: 'templates/user/transport.user.html',
          controller: 'TransportCtrl'
        },
        'fabContent': {
          template: ''
        }
      }
    })

    .state('app.aliment', {
      url: '/aliment',
      views: {
        'menuContent': {
          templateUrl: 'templates/user/alimentaire.user.html',
          controller: 'AlimentCtrl'
        },
        'fabContent': {
          template: ''
        }
      }
    })
    .state('app.communication', {
      url: '/communication',
      views: {
        'menuContent': {
          templateUrl: 'templates/user/communication.user.html',
          controller: 'CommunicationCtrl'
        },
        'fabContent': {
          template: ''
        }
      }
    })



    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/user/home.user.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.profile', {
      url: '/profil',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        },
        'fabContent': {
          template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
          controller: function ($timeout) {
            /*$timeout(function () {
             document.getElementById('fab-profile').classList.toggle('on');
             }, 800);*/
          }
        }
      }
    })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});

/**
 * Created by Demax on 11/09/2015.
 */
angular.module('aliment.user.controllers', [])

  .controller('AlimentCtrl', function($scope,$log, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);


  })

/**
 * Created by Demax on 11/09/2015.
 */
angular.module('communication.user.controllers', [])

  .controller('CommunicationCtrl', function($scope,$log, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);


  })

angular.module('home.user.controllers', [])

  .controller('HomeCtrl', function($scope,$log, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    $log.log("loading HomeCtrl ....");

   // window.analytics.trackView('Home Screen');

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

    $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
        startVelocity: 3000
      });
    }, 700);



    // Set Ink
    ionicMaterialInk.displayEffect();
  })

/**
 * Created by Demax on 11/09/2015.
 */
angular.module('java.user.controllers', [])

  .controller('JavaCtrl', function($scope,$log, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);


  })

angular.module('profil.user.controllers', [])

  .controller('ProfilCtrl', function($scope,$log, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    $log.log("loading ProfileCtrl ....");

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

    $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
        startVelocity: 3000
      });
    }, 700);



    // Set Ink
    ionicMaterialInk.displayEffect();
  })


/**
 * Created by Demax on 11/09/2015.
 */
angular.module('shopping.user.controllers', [])

  .controller('ShoppingCtrl', function($scope,$log, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);


  })

/**
 * Created by Demax on 11/09/2015.
 */
angular.module('transport.user.controllers', [])

  .controller('TransportCtrl', function($scope,$log, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);


  })

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


/*
 angular.module('tabs.swipable.directives')

 .directive('tabsSwipable', ['$ionicGesture', function($ionicGesture){
 //
 // make ionTabs swipable. leftswipe -> nextTab, rightswipe -> prevTab
 // Usage: just add this as an attribute in the ionTabs tag
 // <ion-tabs tabs-swipable> ... </ion-tabs>
 //
 return {
 restrict: 'A',
 require: 'ionTabs',
 link: function(scope, elm, attrs, tabsCtrl){
 var onSwipeLeft = function(){
 var target = tabsCtrl.selectedIndex() + 1;
 if(target < tabsCtrl.tabs.length){
 scope.$apply(tabsCtrl.select(target));
 }
 };
 var onSwipeRight = function(){
 var target = tabsCtrl.selectedIndex() - 1;
 if(target >= 0){
 scope.$apply(tabsCtrl.select(target));
 }
 };

 var swipeGesture = $ionicGesture.on('swipeleft', onSwipeLeft, elm).on('swiperight', onSwipeRight);
 scope.$on('$destroy', function() {
 $ionicGesture.off(swipeGesture, 'swipeleft', onSwipeLeft);
 $ionicGesture.off(swipeGesture, 'swiperight', onSwipeRight);
 });
 }
 };
 }]);
 */

'use strict';

/* Services */
//var baseUrl = 'http://localhost:5000/';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('services', [])
  /*
  .factory('socket', function ($rootScope) {
  var socket = io.connect(baseUrl);
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },

    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
})
  */
  .factory('Auth', function Auth($q, $http,ApiEndpoint) {
    var user = null;

    try {
      user = JSON.parse(window.localStorage.getItem('user'));
    } catch(ex) { /* Silently fail, no user */ }

    var login = function login(name, password) {
      var deferred = $q.defer();

      var url = ApiEndpoint.url + '/users/login';
      var postData = { name: name, password: password };

      console.log("url",url);


      $http.post(url, postData).success(function(response) {
        console.log("response",response);

        if(response.success && (response.success == true || response.success == "true")) {
          user = { name: response.name, id: response.id };
          window.localStorage.setItem('user', JSON.stringify(user));
          return deferred.resolve(response);
        } else {
          return deferred.resolve('No user found');
        }
      }).error(function(error) {
        //Fail our promise.
        deferred.reject(error);
      })

      return deferred.promise;
    }

    var currentUser = function currentUser() {
      return user;
    }

    var logout = function logout() {
      user = null;
      window.localStorage.removeItem('user');
    }

    return {
      login: login,
      logout: logout,
      currentUser: currentUser
    };
  })
