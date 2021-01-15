 // Javascript Animasi Muncul Navbar ketika di Scroll kebawah
//  var navbar = document.getElementById('nav');
//  window.onscroll = function(){
//      if (window.pageYOffset > 100) {
//          // Warna berubah untuk Navbar
//          nav.style.background = "#45aaf2";
         
//      }
//      else {
//          nav.style.background = "transparent";
         
//      }
//  }
 // Javascript Hamburger menu
 function openSideMenu(){
     document.getElementById("side-menu").style.height="100%";
     document.getElementById("side-menu").style.width="300px";
 }
 function closeSideMenu(){
     document.getElementById("side-menu").style.width="0px";
     document.getElementById("mainBox").style.marginRight="0px";
 }