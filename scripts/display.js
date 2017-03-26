function display(){
	 $('body').on('click', 'a', function() {
    	var id = $(this).attr('id');
    	console.log(id);
			document.getElementById("output").innerHTML = "";
			var i= 0;
			if(id = "mar2017"){
				for(var x of myMap)  {
					i = i + 1;
					if(i > 10){
						break;
					}
					console.log(x);
					var aSearchURL = "http://api.elsevier.com/content/article/"
					var format = "?httpAccept=application/json";
					var aLink;
					var myDiv = document.createElement("DIV");
					myDiv.innerHTML = "#" + x[0];
					for (var y of x[1]) {
				    var doi = y;
				    var abstractURL = aSearchURL + doi + format;
						console.log(abstractURL);
						$.ajax({
						  method: "GET",
						  url: "worker.php",
			        dataType: "json",
						  data: { url : abstractURL }
						})
					  .done(function( json_contents ) {
							var data = json_contents["full-text-retrieval-response"]["coredata"];
							var title = data["dc:title"]
							var url = data["link"][1]
							var doi = data["prism:doi"]
							var pn = data["prism:publicationName"]
							var date = data["prism:coverDate"]
							var desc = title + ". " + pn + " " + date + " " + doi;
							aLink  = document.createElement("A");
							aLink.innerHTML = desc;

					  });
					}
					myDiv.setAttribute("class", "boshal");
					myDiv.setAttribute("id", "top" + i);
					$("#result" + i).html(x[0]);
					$('#output').append(myDiv);
					$('#output').append(aLink);
				}
			}
		});
}
