$(document).ready(function() 
{
	
	var blogPosts = new Firebase ('https://blogdata.firebaseio.com/');
	$('#title').focus();	//put cursor in 'title' entry box
	
	/*  $(document).keyup(function() {
		console.log($("#title").val().length)
		if (($("#title").val().length) == 0 || ($("#content").val().length) == 0)
		{
			 $('#add').attr('disabled', true);			 
		}
		else 
		{
			$('#add').removeAttr('disabled');
		}	
	}); */
		
	$('#add').click(function (e) 
	{
		
		var name = $('#title').val();
		var text = $('#content').val();
		var date = moment().format('MMMM Do YYYY, h:mm:ss a');
				
		//push data into firebase:			
		if (($("#title").val().length) != 0 && ($("#content").val().length) != 0)
		{
		$('#alert').text("");
		blogPosts.push({title: name, content: text, date: date, timestamp: moment().unix()});		
		}
		else
		{
		$('#alert').text("Error: You need to fill in both boxes!");
		}		
		
		//$('#add').attr('disabled');
		
		//reset for boxes to blank after submit (and refocus on title entry box)
		$('#content, #title').val('');
		$('#title').focus();
		e.preventDefault();
		
	});	

});