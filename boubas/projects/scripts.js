let currentPage = 1;  // Start on the first page
let loading = false;  // Prevent multiple fetches at once
let hasMoreComments = true;  // Flag to check if there are more comments to load

// Function to fetch and display comments with pagination
function fetchComments(page) {
    if (loading || !hasMoreComments) return;  // Prevent fetching if already loading or no more comments

    loading = true;  // Set loading to true to prevent multiple fetches

    fetch(`/projects/fetch_comments.php?page=${page}`)
        .then(response => response.json())
        .then(data => {
            const commentsSection = document.getElementById('commentsSection');
            
            // If it's the first page, clear the existing comments
            if (page === 1) {
                commentsSection.innerHTML = '';  // Clear existing comments
            }

            if (data.length === 0) {
                if (page === 1) {
                    commentsSection.innerHTML = '<p>No comments yet. Be the first to submit a message!</p>';
                } else {
                    commentsSection.innerHTML += '<p>No more comments to load.</p>';
                }
                hasMoreComments = false;  // Set flag to false if no more comments
            } else {
                data.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    commentDiv.innerHTML = `
                        <hr>
                        <strong>${comment.username}</strong>
                        <br>
                        <sup class="timeago" title="${new Date(comment.date).toLocaleString()}">${getTimeAgo(new Date(comment.date).getTime() / 1000)}</sup>
                        <br>${comment.message}
                        <br>${comment.image_url ? `<i><sub><img src="${comment.image_url}" width="64" alt="(An image was provided; The link is invalid.)" />` : ''}
                    `;
                    commentsSection.appendChild(commentDiv);
                });
                currentPage++;  // Increment the page number after successfully loading comments
            }
        })
        .catch(error => console.error('Error fetching comments:', error))
        .finally(() => {
            loading = false;  // Reset loading flag after fetch completes
        });
}

// Function to calculate "X time ago" from the timestamp
function getTimeAgo(timestamp) {
    const now = new Date();
    const diffInSeconds = (now.getTime() / 1000) - timestamp;
    const diffInMinutes = Math.floor(diffInSeconds / 60); // Convert seconds to minutes
    const diffInHours = Math.floor(diffInSeconds / 3600); // Convert seconds to hours
    const diffInDays = Math.floor(diffInSeconds / 86400); // Convert seconds to days
    const diffInMonths = Math.floor(diffInDays / 30); // Approximate number of days in a month
    const diffInYears = Math.floor(diffInDays / 365); // Approximate number of days in a year

    // Return the most relevant time difference
    if (diffInYears > 0) {
        return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
    } else if (diffInMonths > 0) {
        return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} months ago`;
    } else if (diffInDays > 0) {
        return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
    } else if (diffInHours > 0) {
        return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
    } else if (diffInMinutes > 0) {
        return diffInMinutes === 1 ? '1 minute ago' : `${diffInMinutes} minutes ago`;
    } else {
        return 'Just now'; 
    }
}

// Function to handle comment submission
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(() => {
        fetchComments(currentPage);  // Refresh comments after submission
        this.reset();
    })
    .catch(error => console.error('Error submitting comment:', error));
});

// Detect when the user scrolls to the bottom and fetch more comments
window.addEventListener('scroll', function() {
    const scrollableHeight = document.documentElement.scrollHeight; // Total height of the page
    const scrollPosition = window.innerHeight + window.scrollY; // Height of the viewport + current scroll position

    if (scrollPosition >= scrollableHeight - 100) {  // Trigger when the user is within 100px of the bottom
        fetchComments(currentPage);
    }
});

// Initial load of comments (first batch)
fetchComments(currentPage);

// Update the initial click count
updateClickCount();
