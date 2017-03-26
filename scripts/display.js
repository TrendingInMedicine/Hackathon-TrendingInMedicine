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
					var myDiv = document.createElement("DIV");
					myDiv.setAttribute("id", "top" + i);
					myDiv.innerHTML = "#" + x[0];
					var aSearchURL = "http://api.elsevier.com/content/article/"
					var format = "?httpAccept=application/json";
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
							console.log(desc);
							aLink  = document.createElement("a");
							var node = document.createTextNode(desc);
							aLink.appendChild(node);
							console.log(aLink);
							myDiv.appendChild(aLink);
					  });
						$("#result" + i).html(x[0]);
					}
					myDiv.setAttribute("class", "boshal");

					$('#output').append(myDiv);
				}
			}
		});
}
