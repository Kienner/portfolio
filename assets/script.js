const btnMobile = document.getElementById("btn-mobile");

const menu = document.querySelector(".list-menu")


function toggleMenu(event){

      if(event.type === 'touchstart')event.preventDefault();

      const nav = document.getElementById("nav");
      nav.classList.toggle('active');

      
}


    
  


btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);






function changeIcon(){
      
      const btnMobile = document.getElementById("btn-mobile");

      btnMobile.classList.toggle("fa-xmark");

      const menu = document.querySelector(".list-menu")

}

      btnMobile.addEventListener("click", changeIcon)
      btnMobile.addEventListener("touchstart", changeIcon);




const menuItems = document.querySelectorAll('.nav a[href^="#"]');
console.log(menuItems)








menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);


})



function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 300;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};










// efeito digitação 


