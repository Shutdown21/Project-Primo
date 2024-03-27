function showTab(tabNumber) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById('tab' + tabNumber).classList.add('active');
}
function changeBannerImage(imagePath, tab) {
    var mainImage = document.getElementById('banner');
    var currentBackgroundImage = mainImage.style.backgroundImage;

    // Split the current background images into an array
    var backgroundImages = currentBackgroundImage.split(',');

    // Replace the background image for the specified tab
    backgroundImages[tab - 1] = 'url(' + imagePath + ')';

    // Set the new background images
    mainImage.style.backgroundImage = backgroundImages.join(',');
}