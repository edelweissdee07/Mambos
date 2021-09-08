const humburger = document.getElementById('hum');
const nav = document.querySelector('.my-nav')

humburger.addEventListener('click',()=>{
      if (humburger.className.includes('open')){
            humburger.className= humburger.className.replace('open','closed')
            nav.style.right = '-200vh'
      }else{
            nav.style.right=0
            humburger.className= humburger.className.replace('closed','open')
      }
      
})


$(document).on('ready', function() {
      $(".lazy").slick({
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true,
            slideToScroll:1,
            slideToShow:1,
            autoplay:true,
            fade:true,
            autoplayspeed:1000,
            nextArrow:'.next',
            prevArrow:".prev"
          });

          $(".center").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                  {
                  breakpoint: 801,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                  }
                  },
                  {
                  breakpoint: 600,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                  }
                  }
                  ]
          }); 
          $(".regular").slick({
            dots: true,
            infinite: true,
            autoplay:true,
            slidesToShow: 3,
            slidesToScroll: 1,

            responsive: [
                  {
                  breakpoint: 801,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 1
                  }
                  },
                  {
                  breakpoint: 480,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                  }
                  }
                  ]

          }); 
          $(".daphne").slick({
            dots: false,
            infinite: true,
            autoplay:true,
            slidesToShow: 5,
            slidesToScroll: 1,
             
            responsive: [
                  {
                  breakpoint: 768,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  slidesToShow: 4,
                  centerPadding: '10px',
                  slidesToShow: 3
                  }
                  },
                  {
                  breakpoint: 480,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                  }
                  }
                  ]

          }); 

          $(".ed").slick({
            dots: false,
            autoplay:true,
            Arrows:true,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,

            
            responsive: [
                  {
                  breakpoint: 992,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
                  }
                  },
                  {
                  breakpoint: 480,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                  }
                  }
                  ]
          });
})




function testTab(evt, dee) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("testmonials1");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("testlinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(dee).style.display = "block";
      evt.currentTarget.className += " active";
    }

    function menuTab(evt, dee) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabContent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(dee).style.display = "block";
      evt.currentTarget.className += " active";
    }




// const dee =tab=>{
//       let mich=document.querySelectorAll('.tab-content')
//       let name=document.querySelector(`.${tab}`)
//       let kue=document.querySelectorAll('.tab1 button')
//       for (let i = 0; i < mich.length; i++) {
//            mich[i].classList.remove('show')
//            kue[i].classList.remove('show')

//       }
//       name.classList.toggle('show')
//       document.querySelector(`#${tab}`).classList.toggle('show')
// }

