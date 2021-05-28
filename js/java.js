/* show menu */

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/* menu show
validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click" , ()=> {
        navMenu.classList.add('show-menu')
    })
}
/* close menu */
if (navClose) {
    navClose.addEventListener("click" , ()=> {
        navMenu.classList.remove('show-menu')
    })
}
 /* end */

 /* هنا هعمل ان اما ادوس على اي ناف لينك تقفل */
 const navLink = document.querySelectorAll('.nav_link');

 function linkAction(){
    
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* جبت الناف كلها و عملت فانكشن الفانكشن دي بتلغي كلاس تمام و عملت لوب ب فور ايش */


/* skills*/


const skillsContent = document.getElementsByClassName('skills_content') ,
skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills () {
    let itemsClass = this.parentNode.ClassName

    for (i = 0 ; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }
    if (itemsClass === 'skills_content skills_close' ) {
        this.parentNode.className = 'skills_content skills_open'
    }
    else {
        this.parentNode.className = 'skills_content close'
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click' , toggleSkills)
}) 

/* في الجزء 58.38 */


/* qualification_content tab*/


const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');


tabs.forEach(tab =>{
    tab.addEventListener('click', ()=> {
        const target = document.querySelector(tab.dataset.target )
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')
        tab.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
    
})


/* start  pop up */
const modalViews = document.querySelectorAll(".services_modal") ,
        modalBtns = document.querySelectorAll('.services_button') ,
        modalCloses = document.querySelectorAll('.services_modal-close') 
        let modal = function(modalClick) {
            modalViews[modalClick].classList.add('active-me')

        }
       

        modalBtns.forEach((modalBtn , i) => {
            modalBtn.addEventListener('click' , () => {
                modal(i)
            })
        })


        



        modalCloses.forEach((modalClose) => {
            modalClose.addEventListener('click', () =>{
                modalViews.forEach((modalView) =>{
                    modalView.classList.remove('active-me')
                })
            })
        })


   /*
     modalCloses.forEach((modalclose) =>{
         modalclose.addEventListener('click' , () => {
             modalViews.forEach((modalView) => {
                 modalView.classList.remove('active-me')
             })
         })
     })
*/


        /* swiper protfilio*/
        var swiper = new Swiper(".mySwiper", {
           loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
          /* end*/


          /* our
          */
          let test = new Swiper(".testiomonial_container", {
            slidesPerView: 1,
            spaceBetween: 3,
            
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              "@0.00": { 
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20, 
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            },
           
          });
          /* end our client*/
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

          const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* change color header*/
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
