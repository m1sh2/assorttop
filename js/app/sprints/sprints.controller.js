'use strict';

app.controller('SprintsCtrl', ['$scope', '$http', '$routeParams', '$sce', SprintsCtrl]);

function SprintsCtrl($scope, $http, $routeParams, $sce) {
  var s = this;
  s.form = {};
  s.sprints = [];
  s.teams = [];
  s.tasks = [];

  s.submit = function(form) {
    console.info(s.form);
    $http.get('api.php?act=save&act2=sprint&data=' + Base64.encode(JSON.stringify({
      id: s.form.id,
      title: Base64.encode(s.form.title),
      team: s.form.team,
      date_start: s.form.date_start,
      date_end: s.form.date_end,
      sprint_tasks: s.form.sprint_tasks
    }))).then(function(result) {
      // console.info(result);
      get();
      getFreeTasks();
      $scope.addForm = false;
      document.getElementById('add_form').reset();
      formReset();
    });
  }

  s.taskInSprint = function(id) {
    return s.form.sprint_tasks.indexOf(id) > -1 ? true : false
  }

  s.addTaskSprint = function(id) {
    s.form.sprint_tasks.push(id);
    console.info(s.taskInSprint(id), s.form.sprint_tasks);
  }

  s.removeTaskSprint = function(id) {
    s.form.sprint_tasks.splice(s.form.sprint_tasks.indexOf(id), 1);
    console.info(s.taskInSprint(id), s.form.sprint_tasks);
  }

  formReset();
  get();
  getTeams();
  getFreeTasks();

  function formReset() {
    s.form.id = 0;
    s.form.title = '';
    s.form.team = '1';
    s.form.date_start = 0;
    s.form.date_end = 0;
    s.form.sprint_tasks = [];
  }

  function get() {
    $http.get('api.php?act=get&act2=sprints&data=' + Base64.encode(JSON.stringify({start: 0}))).then(function(result) {
      // console.info(result);
      s.sprints = result.data;
    });
  }

  function getTeams() {
    $http.get('api.php?act=get&act2=teams&data=' + Base64.encode(JSON.stringify({start: -1}))).then(function(result) {
      // console.info(result);
      s.teams = result.data;
    });
  }

  function getFreeTasks() {
    $http.get('api.php?act=get&act2=tasksfree&data=' + Base64.encode(JSON.stringify({start: -1}))).then(function(result) {
      // console.info(result);
      s.tasks = result.data;
    });
  }
}
