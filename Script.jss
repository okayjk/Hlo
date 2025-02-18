// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Fetch the JSON data from movies.json
  fetch('movies.json')
    .then(response => response.json())
    .then(data => {
      const contentList = document.getElementById('content-list');
      data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('content-item');
        div.textContent = item.title;
        // Store the URL and type in data attributes
        div.setAttribute('data-url', item.url);
        div.setAttribute('data-type', item.type);

        // Attach a click event that opens three links:
        // Two custom links and the original movie/anime link
        div.addEventListener('click', () => {
          const originalURL = item.url;
          const customLink1 = "https://yourcustom1.com"; // Replace with your actual custom URL
          const customLink2 = "https://yourcustom2.com"; // Replace with your actual custom URL

          // Open the custom links and then the original link in new tabs/windows
          window.open(customLink1, '_blank');
          window.open(customLink2, '_blank');
          window.open(originalURL, '_blank');
        });

        contentList.appendChild(div);
      });
    })
    .catch(error => console.error('Error fetching JSON data:', error));
});
