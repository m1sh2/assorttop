'use strict';

app.controller('CategoriesCtrl', ['$scope', '$http', '$routeParams', '$sce', ArticlesCtrl]);

function ArticlesCtrl($scope, $http, $routeParams, $sce) {
  var cats = this;
  // console.info(1234, $routeParams.category);
  $scope.category = $routeParams.category;
  cats.categories = [];
  cats.categories.push({
  	url: '/projects',
  	title: 'Projects'
  });
  cats.categories.push({
  	url: '/features',
  	title: 'Features'
  });
  cats.categories.push({
  	url: '/tasks',
  	title: 'Tasks'
  });
  
  // $http.get('api.php?act=getCategories').then(function(result) {
  //   // console.info(result.data);

  //   cats.categories = result.data;
  // });
}
