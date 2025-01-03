<?php

$token = '7860304058:AAFBHy9UObz6H5_KEAm68LTDPX-YW2mW_bs';
$chat_id = '6786725433';


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$text = "New message from your website:\n\nName: $name\nEmail: $email\nMessage: $message";
$telegram_api_url = "https://api.telegram.org/bot$token/sendMessage";


$params = [
    'chat_id' => $chat_id,
    'text' => $text
];


$options = [
    'http' => [
        'method'  => 'POST',
        'header'  => 'Content-Type: application/x-www-form-urlencoded',
        'content' => http_build_query($params)
    ]
];
$context  = stream_context_create($options);
$response = file_get_contents($telegram_api_url, false, $context);


if ($response) {
    echo 'Message sent successfully';
} else {
    echo 'Error sending message';
}
?>
