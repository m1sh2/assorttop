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
		var lang = 'ru';
	</script>

	<!-- Libs -->
	<script src="http://assort.<?php echo $ENV?>/js/libs/base64.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/libs/preload.js"></script>
	<script src="http://assort.<?php echo $ENV?>/js/_txt.js"></script>
</head>	
<body>
<div class="container">
	<header>
		<a href="/" class="logo">Assort <span>Top</span></a>
	</header>
	<div class="content">
		<div class="drow">
			<div class="dcol11">
				<div class="bredcrumbs"></div>
				<div class="page">
					<?php
					$folders = scandir('./sub/');
					foreach ($folders as $key => $value) {
						if ($value !== '.' && $value !== '..') {
							echo '<h4><a href="http://' . $value . '.assort.' . $ENV . '/">' . $value . '</a></h4>';
						}
					}
					?>
				</div>
			</div>
		</div>
	</div>
	<footer align="center">
		&copy; Assort.Top, 2016
	</footer>
</div>
</body>
</html>