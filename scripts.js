document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create a new post element
    const post = document.createElement('div');
    post.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;
    post.appendChild(postTitle);

    const postContent = document.createElement('p');
    postContent.textContent = content;
    post.appendChild(postContent);

    // Add the new post to the posts container
    const postsContainer = document.getElementById('posts-container');
    postsContainer.appendChild(post);

    // Clear the form
    document.getElementById('blog-form').reset();
});
