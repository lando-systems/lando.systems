<?php

$path = $_SERVER['DOCUMENT_ROOT'];
$navName = 'games';
include $path.'/templates/header.php';
include $path.'/templates/nav.php';
?>
<!doctype html>
<html>
	<head>
		<title>goldenage</title>
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
		<div align="center" id="embed-com.gamedev.ld26.goldenage.GwtDefinition"></div>
		<script type="text/javascript" src="com.gamedev.ld26.goldenage.GwtDefinition/com.gamedev.ld26.goldenage.GwtDefinition.nocache.js"></script>
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
		
		document.getElementById('embed-com.gamedev.ld26.goldenage.GwtDefinition').addEventListener('mousedown', handleMouseDown, false);
		document.getElementById('embed-com.gamedev.ld26.goldenage.GwtDefinition').addEventListener('mouseup', handleMouseUp, false);
	</script>
</html>
<?php include $path.'/templates/footer.php'; ?>