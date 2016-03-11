'use strict';

app.controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', '$sce', ProjectsCtrl]);

function ProjectsCtrl($scope, $http, $routeParams, $sce) {
  var p = this;
  p.form = {};
  p.projects = [];
  p.managers = [];

  p.submit = function(form) {
    // console.info(form, p.id, p.title, p.manager_id);
    $http.get('api.php?act=save&act2=project&data=' + Base64.encode(JSON.stringify({
      id: p.form.id,
      title: Base64.encode(p.form.title),
      manager_id: p.form.manager_id
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
  getManagers();

  function formReset() {
    p.form.id = 0;
    p.form.title = '';
    p.form.project_id = 0;
  }

  function get() {
    $http.get('api.php?act=get&act2=projects&data=' + Base64.encode(JSON.stringify({start: 0}))).then(function(result) {
      // console.info(result);
      p.projects = result.data;
    });
  }

  function getManagers() {
    $http.get('api.php?act=get&act2=managers&data=' + Base64.encode(JSON.stringify({start: 0}))).then(function(result) {
      // console.info(result);
      p.managers = result.data;
    });
  }

}