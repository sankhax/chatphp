<?php
include "tampilan.html";
$message = isset($_POST['message']) ? $_POST['message'] : null;
file_put_contents('chat.txt',"$message\n",FILE_APPEND);
