app.directive('lessonHider', function() {
    return {
        scope: {
            lesson: '=',
            dayAlert: '&'
        },
        restrict: 'E',
        templateUrl: 'lessonHider.html',
        link: function(scope, element, attrs) {
            scope.getSchedule.then(function(res) {
                scope.schedule = res.data;

                scope.schedule.forEach(function (scheduleDay) {
                    if (scheduleDay.lesson === scope.lesson) {
                        element.css('text-decoration', 'line-through');
                        scope.lessonDay = scheduleDay.weekday;
                        return;
                    }
                });
            });
        },
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();
        }
    }
});