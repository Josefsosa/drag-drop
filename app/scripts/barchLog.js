/**
 * batchLog service allows for messages to be queued in memory and flushed
 * to the console.log every 50 seconds.
 *
 * @param {*} message Message to be logged.
 */
function batchLogModule($provide){
  $provide.factory('batchLog', ['$timeout', '$log', function($timeout, $log) {
    var messageQueue = [];

    function log() {
      if (messageQueue.length) {
        $log('batchLog messages: ', messageQueue);
        messageQueue = [];
      }
      $timeout(log, 50000);
    }

    // start periodic checking
    log();

    return function(message) {
      messageQueue.push(message);
    }
  }]);

  /**
   * routeTemplateMonitor monitors each $route change and logs the current
   * template via the batchLog service.
   */
  $provide.factory('routeTemplateMonitor',
      ['$route', 'batchLog', '$rootScope',
        function($route,   batchLog,   $rootScope) {
          $rootScope.$on('$routeChangeSuccess', function() {
            batchLog($route.current ? $route.current.template : null);
          });
        }]);
}

