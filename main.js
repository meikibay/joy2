$(document).ready(function(){
speed=parseInt($('#txtspeed').val());
console.log(speed);

	$('#bt2').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left +speed;
		if (newpleft > 950) {
			newpleft = 950
		}
		//$b.css('left', newpleft + 'px');
		$b.animate({"left": "+=" + speed + "px"}, "slow");
	})

	$('#bt1').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left -speed;
		if (newpleft < 40) {
			newpleft = 40
		}
		$b.css('left', newpleft + 'px');
	})

	$('#bt3').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top +speed;
		if (newpleft > 300) {
			newpleft = 300
		}
		$b.css('top', newpleft + 'px');
	})

	$('#bt4').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top -speed;
		if (newpleft < 0) {
			newpleft = 0
		}
		$b.css('top', newpleft + 'px');
	})
});