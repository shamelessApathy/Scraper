<?php

// Including the php file simple_html_dom.php so that its available from this top file down

require_once('/home/b/ReactProjects/Scraper/api/simple_html_dom/simple_html_dom.php');
//use /home/b/ReactProjects/Scraper/api/simple_html_dom as SIMPLE_DOM;


$body = $_POST('body');
$ip = $_SERVER['REMOTE_ADDR'];

$time = time();
$json_response 	= {
	"name" : "Catch.php json response", 
	"time": $time, 
	"client-ip": $ip,   
	"body": "This is the main body of the API Response that will be sent back to the client. I need to make this sufficiently long enough to see if there are any limitiations to the response object having to do with # of characters or spacing"
};

echo json_encode($json_response);