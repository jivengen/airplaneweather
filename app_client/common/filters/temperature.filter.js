(function() {

    angular
        .module('darkSkyApp')
        .filter('temperature', temperatureFilter);

    function temperatureFilter() {
        return function(input){
            
            var output = Math.round(input);
            
            return output;
            
        };
    };
})();