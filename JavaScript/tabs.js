
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
    var computedStyle = window.getComputedStyle(mainImage);
    var currentBackgroundImage = computedStyle.getPropertyValue('background-image');

    // Split the current background images into an array
    var backgroundImages = currentBackgroundImage.split(',');
    backgroundImages = backgroundImages.map(function(url) {
        return url.trim();
    });
    // Replace the background image for the specified tab
    backgroundImages[tab - 1] = 'url(' + imagePath + ')';

    // Set the new background images
    var newBackgroundImage = backgroundImages.join(',');
    mainImage.style.backgroundImage = newBackgroundImage;
}

function changeBannerSize(width, height) {
    var mainImage = document.getElementById('banner');
    mainImage.style.width = width + 'px';
    mainImage.style.height = height + 'px';
}

function showImages(elementId) {
    // Hide all image squares within tab1
    var imageSquares = document.getElementById('tab1').getElementsByClassName('image-square');
    for (var i = 0; i < imageSquares.length; i++) {
        imageSquares[i].style.display = 'none';
    }

    // Display only the image squares with the same ID as the clicked element
    var imageSquare = document.getElementById('tab1').querySelectorAll('.image-square[id="' + elementId + '"]');
    for (var j = 0; j < imageSquare.length; j++) {
        imageSquare[j].style.display = 'block';
    }
}