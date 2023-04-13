// get elements
const nailcareEls = document.querySelectorAll('.nailcare');

// function to check if element is in viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// function to animate elements
function animateElements() {
  nailcareEls.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add('animate');
    }
  });
}

// listen for scroll event and animate elements
window.addEventListener('scroll', animateElements);

// animate elements on page load
animateElements();


// Create the IntersectionObserver object
// const observer = new IntersectionObserver((entries) => {
//     // Loop through the entries that are in view
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Add a class to the <div id="skilled"> to animate it
//         document.getElementById('skilled').classList.add('animate');
//       }
//     });
//   });
  
//   // Start observing the <div class="skilled-wrapper"> element
//   observer.observe(document.querySelector('.skilled-wrapper'));


  

