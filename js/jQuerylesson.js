var IsRed = true;
	$(document).ready(function(){
		if(IsRed){ 
			$('p')	.css('color','red')
					.css('font-size','2em')
					.css('font-style','italic');
		} else {
			$('p').hide();
		}

		$('button').click(function() { 
			console.log ("The " + this.innerText + " button was clicked");
			
		})
 }); 									

		function alertMe() {
			alert("Help me!");
		}
