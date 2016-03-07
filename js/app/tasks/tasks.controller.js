'use strict';

app.controller('TasksCtrl', ['$scope', '$http', '$routeParams', '$sce', TasksCtrl]);

function TasksCtrl($scope, $http, $routeParams, $sce) {
  // console.info(1234, $routeParams.category);
  var t = this;
  t.category_url = $routeParams.category;
  t.category = {};
  // $http.get('api.php?act=getArticles&category_url=' + arts.category_url).then(function(result) {
  //   if (result.data.error) {
  //     arts.articles = [];
  //     arts.category.title = _txt(result.data.error);
  //   } else {
  //     arts.articles = result.data.articles;
  //     arts.category = result.data.category;
  //   }
    
  //   // $scope.categories = result.data;
  // });
}
