$(document).ready(function(){
speed=parseInt($('#txtspeed').val());
console.log(speed);
$b = $( "#boneco" );

	function moveRight(){
		speed=parseInt($('#txtspeed').val());
		position = $b.position();
		newpleft = position.left +speed;
		if (newpleft < 500) {
			$b.animate({"left": "+=" + speed + "px"}, "slow");
		}
		$( "#coordenadas" ).text(position.left + " " + position.top);
	}
	
	function moveLeft(){
		speed=parseInt($('#txtspeed').val());
		position = $b.position();
		newpleft = position.left -speed;
		if (newpleft > 40) {
			$b.animate({"left": "-=" + speed + "px"}, "slow");
		}
		$( "#coordenadas" ).text(position.left + " " + position.top);

	}

	$('#bt2').click(function(){
		moveRight();
	})

	$('#bt1').click(function(){
		moveLeft();
	})

	$('#bt3').click(function(){
		speed=parseInt($('#txtspeed').val());
		position = $b.position();
		newpleft = position.top +speed;
		if (newpleft < 150) {
			$b.animate({"top": "+=" + speed + "px"}, "slow");
		}
		//$b.css('top', newpleft + 'px');
		//$b.animate({"top": "+=" + speed + "px"}, "slow");
		$( "#coordenadas" ).text(position.left + " " + position.top);
	})

	$('#bt4').click(function(){
		speed=parseInt($('#txtspeed').val());
		position = $b.position();
		newpleft = position.top -speed;
		if (newpleft > 5) {
			$b.animate({"top": "-=" + speed + "px"}, "slow");
		}
		//$b.css('top', newpleft + 'px');
		//$b.animate({"top": "-=" + speed + "px"}, "slow");
		$( "#coordenadas" ).text(position.left + " " + position.top);
	})
});