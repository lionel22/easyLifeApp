
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
