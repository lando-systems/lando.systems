<?php

$path = $_SERVER['DOCUMENT_ROOT'];
$navName = 'games';
include $path.'/templates/header.php';
include $path.'/templates/nav.php';
?>
<!doctype html>
<html>
       <head>
              <title>LudumDare33</title>
              <meta http-equiv="content-type" content="text/html; charset=UTF-8">
<!--              <link href="styles.css" rel="stylesheet" type="text/css">-->
<!--              <link href="../css/main.css" rel="stylesheet" type="text/css">-->
              <script src="soundmanager2-setup.js"></script>
  			  <script src="soundmanager2-jsmin.js"></script>
       </head>

       <body>
              <div align="center" id="embed-html"></div>
              <script type="text/javascript" src="html/html.nocache.js"></script>
              <div align="center"><a href="ld33-goomba-sim.jar">Download Desktop Version (jar)</a></div>
              <div align="center"><a href="http://ludumdare.com/compo/ludum-dare-33/?action=preview&uid=18212">Ludum Dare 33 Entry Page</a></div>
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
              document.getElementById('embed-html').addEventListener('mousedown', handleMouseDown, false);
              document.getElementById('embed-html').addEventListener('mouseup', handleMouseUp, false);
       </script>
</html>

<?php include $path.'/templates/footer.php'; ?>