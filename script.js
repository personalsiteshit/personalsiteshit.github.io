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

let headerText = document.querySelector('#hello_there'); 
let secondArticlesButton = document.querySelector('#article_2_button'); 
let titleText = document.getElementById('header_text_stuff'); 

secondArticlesButton.onclick = function() {
    textOnClick(); 
}

function textOnClick() {
    headerText.textContent = 'Culture Jamming is certainly an interesting and ingenious way of spreading a very important message. All too much of the american population are consumers. Rather than being encouraged to create, we are continuously prodded as to never having enough, with advertisers touching on personal insecurities (like said in the video) or brainwashing politics. The latter I find most disgusting. A key ingredient in capitalism that many people refuse to acknowledge, is that just like any other, politics is a money making industry. Too easy it is to garner an emotional response from the public, the biggest prevailers of this being news networks. And on and on the media will continue to brainwash the public into believing that two equally corrupt, (most likely pedophelic), morally inept individuals are in fact not the same person, arguing for generally the same things. I digress. Anti advertising is a wonderful counter narrative in such a stagnating society. Creating something shocking, as seen in the counter smoking advertisements, serves to wake up the general public to the puppetry on display. I commend whoever plays devils advocate to the complacency of consumerism.'; 
    titleText.textContent = 'Culture Jamming'; 
}

$('document').ready(function() {
    $(".arrow-1").click(function() {
        $('header').addClass('.fullscreen-1');
        $('header').removeClass('.image-1');
        $('header').removeClass('.image-2');
        $('header').removeClass('.image-3');
        $('header').removeClass('.image-4');
    });
});