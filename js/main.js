

/*header slide*/
	 $(function(){
	var arrimage = ["img/Layer 91.png","img/Layer 18.png"];
	
	var phoneImg=$(" header .headerbody .image img ");

	var i=1;

 function slide(){
    phoneImg.attr('src',arrimage[i])
    
   i++;
    if(i==arrimage.length){
        i=0;
    }
 }
         
setInterval(slide,3000);
})
	 				//button/
	 
		$(document).ready(function(){
			$('.navbar-header button').click(function(){
				$('.icon').toggleClass('active')
			})
		});

					//radiobutton//

		$(".check2 input").click(function(){

			$('.physical-person').css({
				'display':'none'
			});

			$('.legal-person').css({
				'display':'block'
			});
		});

			//Map//
			
		function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.3774315, lng: 49.8541026},
            scrollwheel: false,
            zoom: 17
          });
        }


		$(".check1 input").click(function(){
			
			$('.physical-person').css({
				'display':'block'
			});

			$('.legal-person').css({
				'display':'none'
			});
		})
		
		
		//label//
		
	$('.label-first').addClass("labelall");
	$('.label-second').addClass("labelall");
	$('.label-third').addClass("labelall");
	
	$('.labelall').mouseover(function(){
		$(this).css({
			"transform": "scale(1.05)",
    		"position": "relative",
    		"z-index":"5"
		})
	})
	
	$('.labelall').mouseout(function(){
		$(this).css({
			"transform": "scale(1)",
    		"position": "relative",
    		"z-index":"1"
		})
	})
			//select//
	
	$('.header-inner select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('header-inner.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


/*$(function() {
  $(".accordion-seen").on( "click", function() {
    $(this).next().slideToggle(200);
    $expand = $(this).find(".arrow");
    
    if($expand.text() == "+") {
      $expand.text("-");
    } else {
      $expand.text("+");
    }
  });
});

$(".accordion-seen").on( "click", function() {*/

$(".accordion-seen").click(function() {
  $(this).next().slideToggle(500);
  $(this).toggleClass('active1')
  $(this).parent().siblings().find('.accordion-text').slideUp(); // Added code
});

/*$(".accordion-seen").click(function() {
  $('.arrow').css({
    'transform':'rotate(90deg)'
  })
});*/
/*$('.accordion-content').eq(0).find('.accordion-text').css('display', 'block');*/
