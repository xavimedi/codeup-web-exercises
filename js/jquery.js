// "use strict";
//
// $('h1, h3, h5').css('text-align', 'center');
// // $('#comp').css('background', '#FCC');
// // $('.codeup').css('border', '1px solid #000');
// //
// // var contents = $('#comp').html();
// // alert(contents);
//
// $('li').css('font-size', '20px');
// $('h1, p, li').css('background', '#FF0');
// $('h2').css('color', 'blue')
// $('h3').css('background', 'red');
// $('h5').css('background', 'orange')
//
// var contents = $('h4').html();
// alert(contents);
//
// $('#how-to-win').css('color', 'green')
//
// $('#cat').css('background', 'none')
//
// $('#first-lorem').css('text-decoration', 'line-through');
// $('#cells').css('text-decoration', 'underline');
// $('.within').css('text-decoration', 'overline');
//
// $('#second-lorem').css('font-weight', 'bold');
// $('#tic, #tac, #toe').css('font', '2rem monospace');
//
// $('#third-lorem').css('font-style', 'italic');
// $('#fe').css('font-size', '1rem');
// $('#fi').css('font-size', '2rem');
// $('#fo').css('font-size', '3rem');
// $('#fu').css('font-size', '4rem');
//
// $('h4').css('text-align', 'center');
//
//
// $('h1').hover(
// 	function() {
// 		$(this).css('background-color', '#FF0');
// 	},
// 	function() {
// 		$(this).css('background-color', '#FFF');
// 	}
// );
// $('p').dblclick(
// 	function() {
// 		$(this).css('font-size', '18px');
// 	}
// );
//
// $('li').hover(
// 	function() {
// 		$(this).css('background-color', 'red');
// 	},
// 	function() {
// 		$(this).css('background-color', '#FF0');
// 	}
// );


	"use strict";

	let theKonamiCode = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"b",
	"a",
	"Enter"
	];
	let konamiCodeProg = 0;

	$(document).keyup(function(e){
	if (e.key === theKonamiCode[konamiCodeProg]){
	konamiCodeProg++;

	if (konamiCodeProg === theKonamiCode.length){
	$('body').css('content-visibility', 'hidden');
	konamiCodeProg = 0;
}
}
	else{
	konamiCodeProg = 0;
}
});


</script>
