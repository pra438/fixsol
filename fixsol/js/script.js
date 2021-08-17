$('.blogs').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    items:1,
    responsive:{

       320:
       {
           items:1
       },
        768:{
            items:1
        },
        994:{
            items:1
        }
    }
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  };
  window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
    header.style.backgroundColor="black";
} 
else {
  header.classList.remove("sticky");
  header.style.backgroundColor="transparent";

}
};
$(document).ready(function() {
    $("#basic-form").validate();
  });