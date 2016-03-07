'use strict';

app.controller('FeaturesCtrl', ['$scope', '$http', '$routeParams', '$sce', FeaturesCtrl]);

function FeaturesCtrl($scope, $http, $routeParams, $sce) {
  // console.info(1234, $routeParams.category);
  var f = this;
  f.category_url = $routeParams.category;
  f.category = {};
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
