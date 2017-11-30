(function () {

  angular
    .module('darkSkyApp')
    .directive('weatherInfo', ['temperatureFilter', 'percentageFilter',
        weatherInfo]);

  function weatherInfo () {
    return {
      restrict: 'EA',
      scope: {
        weather : '=info',
      },      
      templateUrl: '/common/directives/weatherInfo/weatherInfo.template.html'
    };
  }
})();