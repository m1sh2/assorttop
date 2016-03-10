'use strict';

app.controller('FeaturesCtrl', ['$scope', '$http', '$routeParams', '$sce', FeaturesCtrl]);

function FeaturesCtrl($scope, $http, $routeParams, $sce) {
  var f = this;
  f.form = {};
  f.features = [];
  f.projects = [];

  f.submit = function(form) {
    // console.info(form, f.id, f.title, f.project_id, f.user_id);
    $http.get('api.php?act=save&act2=feature&data=' + Base64.encode(JSON.stringify({
      id: f.form.id,
      title: Base64.encode(f.form.title),
      project_id: f.form.project_id
    }))).then(function(result) {
      // console.info(result);
      get();
      $scope.addForm = false;
      document.getElementById('add_form').reset();
      formReset();
    });
  }

  formReset();
  get();
  getProjects();

  function formReset() {
    f.form.id = 0;
    f.form.title = '';
    f.form.project_id = 0;
  }

  function get() {
    $http.get('api.php?act=get&act2=features&data=' + Base64.encode(JSON.stringify({start: 0}))).then(function(result) {
      // console.info(result);
      f.features = result.data;
    });
  }

  function getProjects() {
    $http.get('api.php?act=get&act2=projects&data=' + Base64.encode(JSON.stringify({start: -1}))).then(function(result) {
      // console.info(result);
      f.projects = result.data;
    });
  }
}
