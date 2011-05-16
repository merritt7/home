// JavaScript Document

$(document).ready(function() {
			
	//Show the paging and activate its first link
	$(".paging2").show();
	$(".paging2 a:first").addClass("active");

	

	//Get size of the image, how many images there are, then determine the size of the image reel
	var imageWidth = $(".window2").width();
	var imageSum = $(".image_reel img").size();
	var imageReelWidth = imageWidth * imageSum;

	//Adjust the image reel to its new size
	$(".image_reel").css({'width' : imageReelWidth});



//Paging + Slider Function

rotate =  function(){
	var triggerID = $active.attr("rel") - 1; //Get number of times to slide
	var image_reelPosition = triggerID * imageWidth; //Determines the distance the images reel needs to slide
	$(".paging2 a").removeClass('active'); //Remove all active class
	$active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)

	//Slider Animation
	$(".image_reel").animate({
		left: -image_reelPosition
	}, 500 );
};

//Rotation + Timing Event

rotateSwitch = function(){
	play = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds
			$active = $('.paging2 a.active').next(); //Move to the next paging
			if ( $active.length === 0) { //if paging reaches the end
				$active = $('.paging2 a:first'); //go back to the first
			}
			rotate(); //Trigger the paging and slider function
		}, 5000); //Timer seed in milliseconds (7 seconds)
};		

			rotateSwitch(); //Run function on launch

			//On Hover

			$(".image_reel a").hover(function() {
				clearInterval(play); //Stop the rotation
			}, function() {
				rotateSwitch(); //Resume rotation timer
			});

			

			//On Click
			$(".paging2 a").click(function() {
				$active = $(this); //Avtivate the clicked paging
				//Reset Timer
				clearInterval(play); //Stop the rotation
				rotate(); //Trigger rotation immediately
				rotateSwitch(); //Resume rotation timer
				return false; //Prevent browser jump to link anchor
			});
});