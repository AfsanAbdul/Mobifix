var btn=$('.buttn .tb1');
btn.click(function(){
	$('.tb2').toggleClass('active');
	$('.tb3').toggleClass('active2');

	var subscribe=$('#forpart .buttn .subscribe')
	if ($('body').width() < 767) {
		subscribe.toggleClass('subactive')
	}
})

// hover Slide

$(function(){
	var arrImg = ["img/Layer 18.png","img/4.png","img/ipad.png","img/iphone-x.png","img/ipod.png"];
	var slide= $("#twopart .bxslider img");
	var slideLi= $("#twopart .list-inline li");
	
	slideLi.mouseover(function(e) {
        slideLi.removeClass("active");
		$(this).addClass("active");
		val = e.target.getAttribute("data-value");
		slide.attr("src",arrImg[val]);

	})
})

 /*header slide*/
	 $(function(){
	var arrimage = ["img/Layer 18.png","img/4.png","img/ipad.png"];
	var arrtext= ["iPhone-X","iMac","iPod"];
	var arrpar= ["Say hello to the future", "With Retina 5k Display","Say hello to the future"];
	
	var phoneImg=$(" section .two img ");
	var phoneH1=$("header .first h1");
	var phoneP=$(" header .first p");

	var i=1;

 function slide(){
    phoneImg.attr('src',arrimage[i])
    phoneH1.html(arrtext[i])
    phoneP.html(arrpar[i])
    
   i++;
    if(i==arrtext.length){
        i=0;
    }
 }
         
setInterval(slide,5000);
}) 

 // MAP START
function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.3774315, lng: 49.8541026},
            scrollwheel: false,
            zoom: 17
          });
        }
// MAP END

/*Triangle Move*/
$('.triangle-move1').click(function(){
	$('.triangle').css( {
		'top':'45px'
	});
});

$('.triangle-move2').click(function(){
	$('.triangle').css( {
		'top':'115px'
	});
});

$('.triangle-move3').click(function(){
	$('.triangle').css( {
		'top':'190px'
	});
});