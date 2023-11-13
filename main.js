function fetchAndRenderSocialLinks() {
    // Fetch the social links from the JSON file
    fetch("links.json")
        .then((response) => response.json())
        .then((data) => {
            const socialLinksSection = document.getElementById("social-links");

            // Clear existing social links
            socialLinksSection.innerHTML = '';

            // Generate buttons for each social link if link.url is present
            data.socialLinks.forEach((link) => {
                if (link.url) {
                    const socialButton = document.createElement("a");
                    socialButton.href = link.url;
                    socialButton.target = "_blank";
                    // Add "btn btn-outline" class for an outlined button
                    socialButton.className = "btn btn-outline btn-primary mr-2 mb-2";
                    socialButton.innerHTML = `${link.name} <i class="${link.icon}"></i>`;

                    socialLinksSection.appendChild(socialButton);
                }
            });
        })
        .catch((error) => {
            console.error("Error loading social links:", error);
        });
}

// Fetch and render social links initially
fetchAndRenderSocialLinks();

// Automatically refresh social links every 3 minutes (180,000 milliseconds)
setInterval(fetchAndRenderSocialLinks, 3 * 60 * 1000); // 3 minutes in milliseconds
