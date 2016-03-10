<?php
session_start();
$host = $_SERVER['HTTP_HOST'];
$host = explode('.', $host);
$ENV = $host[count($host) - 1];
?><!DOCTYPE html>
<html ng-app="ASSORTTOP">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<base href="http://assort.<?php echo $ENV?>/">
	<title>Assort.Top</title>
	<link href="http://assort.<?php echo $ENV?>/images/favicon.png" rel="icon">
	<link rel="stylesheet" href="http://assort.<?php echo $ENV?>/styles/style.css" type="text/css" />
	<link rel="stylesheet" href="http://assort.<?php echo $ENV?>/styles/grid.css" type="text/css" />
	<link rel="stylesheet" href="http://assort.<?php echo $ENV?>/styles/icons.css" type="text/css" />
	<link rel="stylesheet" href="http://assort.<?php echo $ENV?>/styles/main.css" type="text/css" />

	<!-- Config -->
	<script type="text/javascript">
		(function() {
			var v = '0.0.1';
			console.log("%c ASSORT " + "%c TOP " + "%c %s ", "background: #2C89DC; color: #fff;", "background: #6FB4F1; color: #fff;", "background: #ccc; color: #333;", v);
		})();
		
		var lang = 'ru';
	</script>

	<!-- Libs -->
	<script src="http://assort.<?php echo $ENV?>/js/libs/angular.min.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/libs/angular-route.min.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/libs/angular-sanitize.min.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/libs/angular-google-analytics.min.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/libs/ckeditor/ckeditor.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/libs/base64.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/libs/preload.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/_txt.js"></script>
	
	<!-- App -->
	<script src="http://assort.<?php echo $ENV?>/js/app/config.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/router.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/controllers/main.controller.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/controllers/categories.controller.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/directives/breadcrumbs.directive.js"></script>

	<!-- App modules -->
	<script src="http://assort.<?php echo $ENV?>/js/app/home/home.controller.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/projects/projects.controller.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/features/features.controller.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/tasks/tasks.controller.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/sprints/sprints.controller.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/article/article.controller.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/admin/admin.controller.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/login/login.controller.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/app/signup/signup.controller.js"></script>
</head>
<body>
<div class="container" ng-controller="MainCtrl as main">
	<header>
		<a href="/" class="logo">Assort <span>Top</span></a>
		<div class="menu-top">
			<a href="/login" class="dropdown-link">Sign in</a>
			<!-- <div class="dropdown dropdown-menu-top" ng-show="main.loginDropdown">
				<h4>Login</h4>
				<h5 ng-show="!!main.user">{{main.user}}</h5>
				<div ng-show="!main.user">
				<a href="#" ng-click="main.loginDropdown = !main.loginDropdown;runLogin()">Login</a>
				</div>
				<div ng-show="!!main.user">
				<a href="#" ng-click="main.loginDropdown = !main.loginDropdown;main.runLogout()">Logout</a>
				</div>
				<a href="/admin" ng-click="main.loginDropdown = !main.loginDropdown">Admin</a>
				<div>
				<a href="/signup" ng-click="main.loginDropdown = !main.loginDropdown">Signup</a>
				</div>
			</div> -->
		</div>
		<div id="categories" ng-controller="CategoriesCtrl as cats">
			<a href="http://<?php echo $_SERVER['HTTP_HOST']?>{{category.url}}" ng-repeat="category in cats.categories">{{category.title}}</a>
		</div>
	</header>
	<div class="content">
		<div class="drow">
			<div class="dcol11">
				<div class="bredcrumbs"></div>
				<div class="page {{ pageClass }}" ng-view></div>
			</div>
		</div>
	</div>
	<footer>
		<div class="footer-menu">
			<a href="/about">About</a>
		</div>
		&copy; Assort.Top, 2016
	</footer>
</div>
</body>
</html>