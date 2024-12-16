(function() {
    var rotate, timeline;
  
    rotate = function() {
        return $('.card:first-child').fadeOut(400, 'swing', function() {
            return $('.card:first-child').appendTo('.project-container').hide();
        }).fadeIn(400, 'swing');
    };
  
    // timeline = setInterval(rotate, 1200);
  
    // $('body').hover(function() {
    //   return clearInterval(timeline);
    // });
  
    $('.next').click(function() {
      return rotate();
    });//FPVHWCHD
}).call(this);


document.addEventListener("DOMContentLoaded", function () {
    // Select the first card and the image inside it
    const firstCard = document.querySelector('.project-container .card:first-child');
    const firstImage = firstCard.querySelector('.image img');
    
    // Get the image URL (src attribute)
    const imageUrl = firstImage.src;
    console.log('Image URL:', imageUrl); // Log the image URL
    
    // Extract the image name (file) from the URL
    const imageName = imageUrl.split('/').pop(); // This will give '1.png'
    console.log('Image Name:', imageName);
    
    // Create a new image element for the background
    const backgroundImage = document.createElement('img');
    backgroundImage.src = imageUrl; // Set the source to the same as the current image
    backgroundImage.style.position = 'absolute';
    backgroundImage.style.top = '0';
    backgroundImage.style.left = '0';
    backgroundImage.style.width = '100%';
    backgroundImage.style.height = '100%';
    backgroundImage.style.objectFit = 'cover'; // Ensure it covers the whole container
    backgroundImage.style.filter = 'blur(200px)'; // Apply blur effect
    backgroundImage.style.transform = 'scale(0.9)'; // Scale down the image
    backgroundImage.style.zIndex = '-1'; // Place it behind the main image
    
    // Append the new background image to the .image container
    const imageContainer = firstCard.querySelector('.image');
    imageContainer.appendChild(backgroundImage);
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');

        }
    });
});

const hiddenelements = document.querySelectorAll('.hidden');
hiddenelements.forEach((el) => observer.observe(el));