document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create form data object
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    // Send the blog post to the server
    fetch('save_post.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Success') {
            loadPosts(); // Reload the posts
            document.getElementById('blog-form').reset(); // Clear the form
        } else {
            console.error('Error:', data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Function to load posts from the server
function loadPosts() {
    fetch('get_posts.php')
    .then(response => response.json())
    .then(data => {
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = ''; // Clear current posts

        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            const postTitle = document.createElement('h3');
            postTitle.textContent = post.title;
            postElement.appendChild(postTitle);

            const postContent = document.createElement('p');
            postContent.textContent = post.content;
            postElement.appendChild(postContent);

            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Load posts when the page loads
window.onload = loadPosts;
