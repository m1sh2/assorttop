'use strict';

app.controller('TasksCtrl', ['$scope', '$http', '$routeParams', '$sce', TasksCtrl]);

function TasksCtrl($scope, $http, $routeParams, $sce) {
  var t = this;
  t.form = {};
  t.tasks = [];
  t.projectsFeatures = [];
  t.statesTasks = [];
  t.usersDev = [];
  t.usersQA = [];

  t.submit = function(form) {
    console.info(t.form, t.form.task_users);
    $http.get('api.php?act=save&act2=task&data=' + Base64.encode(JSON.stringify({
      id: t.form.id,
      title: Base64.encode(t.form.title),
      feature_id: t.form.feature_id,
      time_plan: t.form.time_plan,
      time_fact: t.form.time_fact,
      task_users: t.form.task_users
    }))).then(function(result) {
      // console.info(result);
      get();
      $scope.addForm = false;
      document.getElementById('add_form').reset();
      formReset();
    });
  }

  t.usersInTask = function(id) {
    return t.form.task_users.indexOf(id) > -1 ? true : false
  }

  t.addUsersTask = function(id) {
    // console.info(document.getElementById('add_form').developers_id.value);
    // var userId = document.getElementById('add_form').developers_id.value;
    t.form.task_users.push(id);
    console.info(t.usersInTask(id), t.form.task_users);
  }

  t.removeUsersTask = function(id) {
    // console.info(document.getElementById('add_form').developers_id.value);
    // var userId = document.getElementById('add_form').developers_id.value;
    t.form.task_users.splice(t.form.task_users.indexOf(id), 1);
    console.info(t.usersInTask(id), t.form.task_users);
  }

  formReset();
  get();
  getFeaturesProjects();
  getStatesTasks();
  getUsersDev();
  getUsersQA();
  getUsersTask();

  function formReset() {
    t.form.id = 0;
    t.form.title = '';
    t.form.feature_id = 0;
    t.form.state = '1';
    t.form.time_plan = 0;
    t.form.time_fact = 0;
    t.form.task_users = [];
  }

  function get() {
    $http.get('api.php?act=get&act2=tasks&data=' + Base64.encode(JSON.stringify({start: 0}))).then(function(result) {
      console.info('get', result);
      t.tasks = result.data;
    });
  }

  function getFeaturesProjects() {
    $http.get('api.php?act=get&act2=features_projects&data=' + Base64.encode(JSON.stringify({start: -1}))).then(function(result) {
      console.info('getFeaturesProjects', result);
      t.projectsFeatures = result.data;
      t.form.feature_id = t.projectsFeatures[Object.keys(t.projectsFeatures)[0]][0].id;
    });
  }

  function getStatesTasks() {
    $http.get('api.php?act=get&act2=states&act3=tasks&data=' + Base64.encode(JSON.stringify({start: -1}))).then(function(result) {
      console.info('getStatesTasks', result);
      t.statesTasks = result.data;
    });
  }

  function getUsersDev() {
    $http.get('api.php?act=get&act2=users&act3=dev&data=' + Base64.encode(JSON.stringify({start: -1}))).then(function(result) {
      console.info('getUsersDev', result);
      t.usersDev = result.data;
    });
  }

  function getUsersQA() {
    $http.get('api.php?act=get&act2=users&act3=qa&data=' + Base64.encode(JSON.stringify({start: -1}))).then(function(result) {
      console.info('getUsersQA', result);
      t.usersQA = result.data;
    });
  }

  function getUsersTask() {
    $http.get('api.php?act=get&act2=users&act3=task&data=' + Base64.encode(JSON.stringify({start: -1}))).then(function(result) {
      console.info('getUsersTask', result);
      t.form.task_users = result.data;
    });
  }
}
