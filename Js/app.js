/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

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
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
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





/*=======Decoration map Card========*/


const CadrArray=[
        {
            img:"./img/decoration1.png",
           title:"Christmas Bells", 
           link:"Go Shopping"
        },
        {
            img:"./img/decoration2.png",
           title:"Christmas Candies", 
           link:"Go Shopping"
        },
        {
            img:"./img/decoration3.png",
           title:"Christmas Trees", 
           link:"Go Shopping"
        },
]
const showCard=document.getElementById("demo")
CadrArray.map(card=>{
showCard.innerHTML +=
`<div class="decoration__data">
<img src=${card.img} alt="" class="decoration__img">
<h3 class="decoration__title">${card.title}</h3>
<a href="#" class="button button-link">${card.link}</a>
</div>`

})



/*=================Assecosires Card map============ */

var AccessoriesArray=[
    {
        id:1, 
       img:"./img/accessory1.png",
       title:"Snow Globe", 
       link:"Go Shopping",
    
    },
    { id:2,
        img:"./img/accessory2.png",
       title:"Candy", 
       link:"Candy",
   
    },
    { id:3,
        img:"./img/accessory3.png",
       title:"Angel", 
       link:"Go Shopping",
     
    },
    { id:4,
        img:"./img/accessory4.png",
       title:"Sphere", 
       link:"Go Shopping",
     
    },
    { id:5,
        img:"./img/accessory5.png",
       title:"Surprise Gift", 
       link:"Go Shopping",
      
    },
    { id:6,
        img:"./img/accessory5.png",
       title:"Surprise Gift", 
       link:"Go Shopping",
   
    },
]
//==========   Heart IsFilled icons  ==========//
  
    function handleClick(){
 var heartIcon=document.getElementsByClassName("heart__icon")
 for(i=0;i<heartIcon.length;i++){
   
    heartIcon[i].addEventListener('click',(event)=>{
        event.target.classList.toggle("bxs-heart")
    })
 }
}
//=========  End of Heart IsFilled icons  ========// 


const AssecosiresCard=document.getElementById("accessory__card")


AccessoriesArray.map(card=>{
    AssecosiresCard.innerHTML +=
    `
    <div class="accessory__content">
<img src=${card.img} alt="" class="accessory__img">
<h3 class="accessory__title">${card.title}</h3>
<span class="accessory__category">Accessory</span>
<span class="accessory__preci"> &#8358;2,380</span>
<a    href="#accessory"  class="button accessory__button"><i   onclick="handleClick()"  class="heart__icon bx bx-heart " ></i></a>
</div>
    `
})


