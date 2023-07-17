<?php

$path = $_SERVER['DOCUMENT_ROOT'];
$navName = 'games';
include $path.'/templates/header.php';
include $path.'/templates/nav.php';
?>
<html>
<head>
	<title>Lando Systems</title>
<!--    <link rel="stylesheet" type="text/css" href="../css/main.css">-->
</head>
<body>
    <div class="container">
        <div class="well">
            <div id="wrapper">
                <h1>Sorry</h1>
                <p>We don't have a web version of this game at the moment...</p>
                <p>In the meantime download the desktop version: <a href="ld30-prismaticworlds.jar">Prismatic Worlds (jar)</a></p>
            </div>
        </div>
    </div>
</body>
</html>
<?php include $path.'/templates/footer.php'; ?>