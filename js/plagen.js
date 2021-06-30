$(function () {
"use strict";
   AOS.init();
});


$(function () {
    
      "use strict";
    
        $('html').niceScroll({
            cursorcolor:"#009970",
            cursoropacity:"1"
            
        });
});
$(function () {
    

});  


$(function () {
    
      "use strict";
    
  var containerEl = document.querySelector('#containermix');
  var mixer = mixitup(containerEl);
  
});
  


$(function () {
      
  wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };
  
});

$(function () {
  jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            time:"2000",
            delay:"10"
        });
    });
});



