function display(){
	 $('body').on('click', 'a', function() {
    	var id = $(this).attr('id');
    	console.log(id);
			var i= 0;
			if(id = "mar2017"){
				for(var x of myMap)  {
					i = i + 1;
					console.log(x);
					var myDiv = document.createElement("DIV");
					myDiv.setAttribute("id", "top" + i);
					$("#result" + i).html(x[0]);
				}
			}
		});
}
