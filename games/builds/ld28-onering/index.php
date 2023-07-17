<?php

$path = $_SERVER['DOCUMENT_ROOT'];
$navName = 'games';
include $path.'/templates/header.php';
include $path.'/templates/nav.php';
?>
<!doctype html>
<html>
	<head>
		<title>One to Move them all</title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<style>
			canvas {
				cursor: default;
				outline: none;
			}
		</style>
<!--        <link href="../css/main.css" rel="stylesheet" type="text/css">-->
	</head>
	
	<body>
		<div align="center" id="embed-com.gamedev.ld28.GwtDefinition"></div>
		<script type="text/javascript" src="com.gamedev.ld28.GwtDefinition/com.gamedev.ld28.GwtDefinition.nocache.js"></script>
	</body>
	
	<script>
		function handleMouseDown(evt) {
		  evt.preventDefault();
		  evt.stopPropagation();
		  evt.target.style.cursor = 'default';
		}
		
		function handleMouseUp(evt) {
		  evt.preventDefault();
		  evt.stopPropagation();
		  evt.target.style.cursor = '';
		}
		
		document.getElementById('embed-com.gamedev.ld28.GwtDefinition').addEventListener('mousedown', handleMouseDown, false);
		document.getElementById('embed-com.gamedev.ld28.GwtDefinition').addEventListener('mouseup', handleMouseUp, false);
	</script>
</html>
<?php include $path.'/templates/footer.php'; ?>