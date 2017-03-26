function display(){
	 $('body').on('click', 'a', function() {
    	var id = $(this).attr('id');
    	console.log(id);
			var i= 0;
			if(id = "mar2017"){
				for(var x of myMap)  {
					i = i + 1;
					if(i > 10){
						break;
					}
					console.log(x);
					var myDiv = document.createElement("DIV");
					myDiv.innerHTML = x[0];
					myDiv.setAttribute("id", "top" + i);
					$("#result" + i).html(x[0]);
					$('#output').append(myDiv);
				}
			}
		});
}
