$('.progress-bar-fill').delay(1000).queue(function () {
        $(this).css('width', '100%')
    });
        (function(){
 
 var preload = document.getElementById("preload");
 var loading = 0;
 var id = setInterval(frame, 58);

 function frame(){
  if(loading == 100) {
   clearInterval(id);
   window.open("Loginscreen.html", "_self");
  }
  else {
   loading = loading + 1;
   if(loading == 90) {
    preload.style.animation = "fadeout 1s ease";
   }
  }
 }


})();
        
$(function(){
   setTimeout(function() {
      $(".main").fadeOut("slow", function() {
      });
   }, 5600);
});
