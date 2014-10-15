$(document).ready(function(){

	$('#bt2').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left +30;
		if (newpleft > 950) {
			newpleft = 950
		}
		$b.css('left', newpleft + 'px');
	})

	$('#bt1').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left -30;
		if (newpleft < 40) {
			newpleft = 40
		}
		$b.css('left', newpleft + 'px');
	})

	$('#bt3').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top +30;
		if (newpleft > 300) {
			newpleft = 300
		}
		$b.css('top', newpleft + 'px');
	})

	$('#bt4').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top -30;
		if (newpleft < 0) {
			newpleft = 0
		}
		$b.css('top', newpleft + 'px');
	})
});