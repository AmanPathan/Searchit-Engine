<?php

// for local environment
// $con= new mysqli("localhost","user","abcd","search_db");

// for remote mysql

$con= new mysqli("localhost","Aman123","Pathan@1234","search_db");

// for checking connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

?>