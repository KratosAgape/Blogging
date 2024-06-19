<?php
// Connect to the SQLite database
$db = new PDO('sqlite:blog.db');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Fetch all blog posts
$result = $db->query("SELECT * FROM posts");

$posts = [];
foreach ($result as $row) {
    $posts[] = [
        'title' => $row['title'],
        'content' => $row['content']
    ];
}

// Return the posts as JSON
header('Content-Type: application/json');
echo json_encode($posts);
?>
