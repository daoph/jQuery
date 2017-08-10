$(document).ready(function(){

		$('p')	.css('color','black')
				.css('font-size','1.5em');


		$('button') .css('font-size','30pt')
			.click(function() { 
				$('#p1')	.css('color','red')
				$('#p2')	.css('color','green')
				$('#p3')	.css('color','blue')
				$('#p4')	.hide(1000).show(1000).fadeOut(1000);

			console.log ("The " + this.innerText + " button was clicked");
			


			})
 }); 									

		