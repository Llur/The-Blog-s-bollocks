$.getJSON("https://blogdata.firebaseio.com/.json", function(posts)
{	
	//re-create the json data as an array (posts2)... arrays can be sorted!
	var posts2 = new Array();

	$.each(posts,function(i,v){
	//add a new entry to the array with all the json data
	posts2.push({"key": i, "title": v.title, "content":v.content, "date":v.date, "timestamp":v.timestamp});
	});
	
	posts2.sort(function (a, b) {
	
	var a_timestamp = a.timestamp.valueOf();
		b_timestamp = b.timestamp.valueOf();
		return_value = 0;
		
		if(a_timestamp == b_timestamp) return_value = 0;
		if(a_timestamp > b_timestamp) return_value = -1;
		if(a_timestamp < b_timestamp) return_value = 1;
		
		return return_value;
		
	});
				
	$.each(posts2,function(i,v)
	{
		$("#blog-posts").append("<li><h2>" + v.title + "</h2></li>");
		$("#blog-posts").append("<li><p>" + v.content + "</p></li>");
		$("#blog-posts").append("<li><p>" + "(" + v.date + ")" + "</p></li>");
	});
});