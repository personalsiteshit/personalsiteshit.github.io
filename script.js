/* eslint-env es6 */
/* eslint-disable */

const IMAGE_NAMES = [
    'image_1',
    'image_2',
    'image_3',
    'image_4'
];

var expandScreen = function(event, selectedImageName) {
    event.stopPropagation();

    const selectedDiv = document.getElementsByClassName(selectedImageName);
    const isFullScreen = selectedDiv[0].style.width === "100%"

    const header = document.getElementById("header");
    if (!isFullScreen) {
        header.classList.add("full-screen-mode");
    }
    else {
        header.classList.remove("full-screen-mode");
    }

    for (const imageName of IMAGE_NAMES) {
        if (selectedImageName == imageName) {
            selectedDiv[0].style.width = isFullScreen ? "25%" : "100%";
            if (isFullScreen) {
                selectedDiv[0].classList.remove("selected");
            }
            else {
                selectedDiv[0].classList.add("selected");
            }
        } else {
            const otherDiv = document.getElementsByClassName(imageName)[0];
            otherDiv.style.width = isFullScreen ? "25%" : "0%";
        }
    }
};

$('document').ready(function() {
    $(".arrow-1").click(function() {
        $('header').addClass('.fullscreen-1');
        $('header').removeClass('.image-1');
        $('header').removeClass('.image-2');
        $('header').removeClass('.image-3');
        $('header').removeClass('.image-4');
    });
});
