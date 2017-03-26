function display(){
	 $('body').on('click', 'a', function() {
    	var id = $(this).attr('id');
    	console.log(id);
			if(id = "mar2017"){
				for(var x of myMap)  {
					console.log(x);
					document.getElementById("output").innerHTML = x;
				}
			}
		});
}
