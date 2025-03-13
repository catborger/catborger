function upDate(previewPic) {
    let imageDiv = document.getElementById('image');

    imageDiv.style.backgroundImage = 'url(' + previewPic.src + ')';

    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    let imageDiv = document.getElementById('image');
    
    imageDiv.style.backgroundImage = 'url("")';
    
    imageDiv.textContent = 'Hover over an image below to display here.';
}

function addTabIndex() {
    const images = document.querySelectorAll('.preview');
    
    images.forEach((image, index) => {
        image.setAttribute('tabindex', '0'); 
        console.log(`Tabindex added to image: ${image.alt}`);
 
        image.addEventListener('focus', () => upDate(image));
        image.addEventListener('blur', unDo); 
    });
}

window.onload = function() {
    addTabIndex();

    const images = document.querySelectorAll('.preview');
    
    images.forEach(image => {
        image.addEventListener('mouseover', () => upDate(image));
        
        image.addEventListener('mouseout', unDo);
    });

    console.log("Page has fully loaded and event listeners are set up.");
};
