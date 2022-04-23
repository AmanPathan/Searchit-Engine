<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search It</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="https://kit.fontawesome.com/47b91ac613.js" crossorigin="anonymous"></script>
    <script src="script/sweeralert.js"></script>
    <link rel="stylesheet" href="sweetalert2.min.css">
    <script src="script/script.js"></script>
    <script type="text/javascript" src="jquery.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>

<img src="assets/images/image.png" alt="">
    <div class="bar" id="division">
        <form action="search.php" method="GET" id="searchform" >
        <input type="text" id="textareaa" name="term" class="search-bar" autocomplete="off">
        <input type="submit" name="search" id="hell" class="bts" value="search">
    </form>
        <i onclick="swal12()" id="start" class="fa-solid fa-microphone fa-xl"></i>
    </div>

    <!-- <div class="results" id="resultssec">


    </div> -->
</body>
</html>