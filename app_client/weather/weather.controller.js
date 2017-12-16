(function() {

    angular
        .module('darkSkyApp')
        .controller('weatherCtrl', weatherCtrl);

    weatherCtrl.$inject = ['$scope', 'SelectedData', 'DarkskyWeather'];

    function weatherCtrl($scope, SelectedData, DarkskyWeather) {

        var vm = this;
        console.log(window.location);

        vm.content = "Weather";

        vm.selectedDepartureICAO = "";

        vm.selectedWeight = "";

        //check selected Departure
        if (SelectedData.selectedDepartureICAO !== null) {
            vm.selectedDepartureICAO = "Nowhere";
        }



        //refactored for Angular 1.6 - removed success/error, used Promises...
         vm.getDepartureWeather = function() {
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showLocation);
            }
            else {
                console.log('Geolocation is not supported by this browser.');
            }
            
            
            function showLocation(position) {
                var lat = position.coords.latitude;
                console.log("latitude: " + lat);
              
                var lon = position.coords.longitude;
                console.log("longitude: " + lon);

            DarkskyWeather.getWeather(lat, lon)
                .then(function(response) {
                    vm.departureWeather = response.data;
                    console.log(vm.departureWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }


        
        //call services
        vm.getDepartureWeather();
       // vm.getArrivalWeather();

    }
}
})();
