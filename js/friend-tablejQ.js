$(document).ready(function(){

	$('#submitButton').click(function(){

		console.log('the function has initiated')
			var friendname = $('#friendnameCtrl').val()
			var friendmail = $('#emailCtrl').val()
			var friendcell = $('#cellCtrl').val()
			var obj = {}
				obj.Name = friendname
				obj.Email = friendmail
				obj.Cell = friendcell
			fRIENDS.push(obj)

		console.log('pushed')
			for (var idx = (fRIENDS.length - 1) ; idx <fRIENDS.length ; idx++) {
				var NameM = fRIENDS[idx].Name;
				var EmailM = fRIENDS[idx].Email;
				var CellM = fRIENDS[idx].Cell; }
				var createdObj = ("<tr>" 
					 + "<td>" + NameM + "</td>"
					 + "<td>" + EmailM + "</td>"
					 + "<td>" + CellM + "</td>"
					 + "</tr>")
				console.log(createdObj);
				$('#tableCtrl').append(createdObj);
		console.log('added to html')
		})
});