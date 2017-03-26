function display(){
	 $('body').on('click', 'a', function() {
    	var id = $(this).attr('id');
    	console.log(id);
			if(id = "mar2017"){
				for (var i = 0; i < 10; i++) {
					console.log(myMap[i]);
					document.getElementById("output").innerHTML = myMap[i];
				}
			}
		});
}
