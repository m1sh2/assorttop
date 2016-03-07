'use strict';

app.controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', '$sce', ProjectsCtrl]);

function ProjectsCtrl($scope, $http, $routeParams, $sce) {
  // console.info(1234, $routeParams.category);
  var p = this;
  p.category_url = $routeParams.category;
  p.category = {};
  p.id = 0;
  p.title = '';
  p.manager = 0;
  p.submit = function(f) {
    console.info(p.id, p.title, p.manager);
    $http.get('api.php?act=projectsSave&data=' + Base64.encode(JSON.stringify({id: p.id, title: Base64.encode(p.title), manager: p.manager}))).then(function(result) {
      console.info(result);
      // if (result.data.error) {
      //   arts.articles = [];
      //   arts.category.title = _txt(result.data.error);
      // } else {
      //   arts.articles = result.data.articles;
      //   arts.category = result.data.category;
      // }
      
      // $scope.categories = result.data;
    });
  }
  
}
