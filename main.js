$(document).ready(function(){

	$('#bt2').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left +10;
		$b.css('left', newpleft + 'px');
	})

	$('#bt1').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left -10;
		$b.css('left', newpleft + 'px');
	})

	$('#bt3').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top +10;
		$b.css('left', newpleft + 'px');
	})

	$('#bt4').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top -10;
		$b.css('left', newpleft + 'px');
	})
});