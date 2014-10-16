$(document).ready(function(){
speed=parseInt($('#txtspeed').val());
console.log(speed);

	$('#bt2').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left +speed;
		if (newpleft < 500) {
			$b.animate({"left": "+=" + speed + "px"}, "slow");
		}
		//$b.css('left', newpleft + 'px');
		//$b.animate({"left": "+=" + speed + "px"}, "slow");
	})

	$('#bt1').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left -speed;
		if (newpleft > 40) {
			$b.animate({"left": "-=" + speed + "px"}, "slow");
		}
		//$b.css('left', newpleft + 'px');
		//$b.animate({"left": "-=" + speed + "px"}, "slow");
	})

	$('#bt3').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top +speed;
		if (newpleft < 150) {
			$b.animate({"top": "+=" + speed + "px"}, "slow");
		}
		//$b.css('top', newpleft + 'px');
		//$b.animate({"top": "+=" + speed + "px"}, "slow");
	})

	$('#bt4').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top -speed;
		if (newpleft < 2) {
			$b.animate({"top": "-=" + speed + "px"}, "slow");
		}
		//$b.css('top', newpleft + 'px');
		//$b.animate({"top": "-=" + speed + "px"}, "slow");
	})
});