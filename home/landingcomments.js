 
    // Function to load the top 2 comments from the PHP script and display them in the preview section
    async function loadCommentsPreview() {
      const commentsSection = document.querySelector('.commentsSection-preview');
      try {
          const response = await fetch('/fetch_comments.php');
          if (!response.ok) {
              throw new Error('Failed to fetch comments');
          }
          const comments = await response.json();
  
          // Clear the preview section
          commentsSection.innerHTML = '';
  
          // Display the comments in the preview section
          comments.slice(0, 3).forEach(comment => {
              const commentElement = document.createElement('div');
              commentElement.classList.add('comment-preview');
              commentElement.innerHTML = `
              <strong>${comment.username}</strong>
              <br>
              <sup class="timeago" title="${new Date(comment.date).toLocaleString()}">${getTimeAgo(new Date(comment.date).getTime() / 1000)}</sup>
              <br>${comment.message}
              <br>${comment.image_url ? `<i><sub><img src="${comment.image_url}" width="64" alt="(An image was provided; The link is invalid.)" /></sub></i>` : ''}
               `;
              commentsSection.appendChild(commentElement);
          });
      } catch (error) {
          commentsSection.innerHTML = '<p>Error loading comments: ' + error.message + '</p>';
      }
  }
  
      // Load the comments preview when the page loads
      window.addEventListener('DOMContentLoaded', loadCommentsPreview);


      function getTimeAgo(timestamp) {
    const now = new Date();
    const diffInSeconds = (now.getTime() / 1000) - timestamp;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInSeconds / 3600);
    const diffInDays = Math.floor(diffInSeconds / 86400);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

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



