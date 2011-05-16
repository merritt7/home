$(document).ready(function() {


$(".infoPanel li a img").fadeTo(1,0.8);

$(".infoPanel li a").eq(0).addClass("current");
$("a.current").next().fadeIn();
$(".infoPanel li a.current img").fadeTo(250,1);

$(".infoLink").mouseover(function() {
	if (this.className.indexOf("current") == -1) {
		$("a.current").next().fadeOut();
		$(".infoPanel li a.current img").fadeTo(1,0.8);
		$("a.current").removeClass("current");
		$(this).addClass("current");
		$("a.current").next().fadeIn();
		$(".infoPanel li a.current img").fadeTo(250,1);
		
	}
});
});
