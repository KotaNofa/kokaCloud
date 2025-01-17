var firstColumn = document.querySelector('.gallery-column.first');
var secondColumn = document.querySelector('.gallery-column.second');

// Create a new div element for the new post
var newPost = document.createElement('div');
newPost.classList.add('gallery-post');  // Add the gallery-post class for styling

// Set the inner HTML of the new post (this can include text, images, etc.)
newPost.innerHTML = `
    <h3>New Post</h3>
    <p>This is a dynamically inserted post into the first gallery column.</p>
`;

// Append the new post to the 'first' gallery column
firstColumn.appendChild(newPost);

// Create another new div element for the second post
var newPostSecondColumn = document.createElement('div');
newPostSecondColumn.classList.add('gallery-post');  // Add the gallery-post class for styling

// Set the inner HTML of the new post for the second column
newPostSecondColumn.innerHTML = `
    <h3>New Post in Second Column</h3>
    <p>This is a dynamically inserted post into the second gallery column.</p>
`;

// Append the new post to the 'second' gallery column
secondColumn.appendChild(newPostSecondColumn);