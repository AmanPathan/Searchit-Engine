<?php


include_once 'configuration.php';

if(isset($_GET['term'])){
    $term = $_GET['term'];
}else{

    exit("Enter something for search !");
}

$term = $_GET['term'];
	
//  $get_result = mysqli_query("select * from search where MATCH(title,description) AGAINST('$search_val')");
 $result = mysqli_query($con, "SELECT * FROM search_table
    where MATCH(book_name) AGAINST('$term')");
 while($row=mysqli_fetch_array($result))
 {
     echo"<div class='res'>";
  echo "<li><a class='lin'><span class='title'>".$row['book_name']."</span><br><span class='desc'>".$row['author']."</span></a></li>";
  echo'<hr>';

  echo'</div>';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search It</title>
    <link rel="stylesheet" href="assets/css/style1.css">
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
        <input type="text" id="textareaa" name="term" class="search-bar" value="<?php echo $term; ?>" autocomplete="off">
        <input type="submit" name="search" id="hell" class="bts" value="search">
    </form>
        <i onclick="swal12()" id="start" class="fa-solid fa-microphone fa-xl"></i>
    </div>

 <div class="results" id="results">

   

    


    </div>
</body>
</html>