var li = [];
var wordMap = new Map();
function display(){
	$('body').on('click', 'a', function() {
		 	var id = $(this).attr('id');
			console.log(id);
		  document.getElementById("output").innerHTML = "";
		  var i= 0;
	  	if(id = "mar2017"){
		  	for(var x of myMap)  {
		   			i = i + 1;
		   			console.log(i);
					if(i > 10)
						break;
		// 			console.log(x);
		// 			var myDiv = document.createElement("DIV");
		// 			myDiv.setAttribute("id", "top" + i);
		// 			myDiv.innerHTML = "#" + x[0];
		// 			$('#output').append(myDiv);
		// 			var aSearchURL = "http://api.elsevier.com/content/article/"
		// 			var format = "?httpAccept=application/json";
		// 			var j = 0;
		// 			for (var y of x[1]) {
		//
		// 		    var doi = y;
		// 		    var abstractURL = aSearchURL + doi + format;
		// 				//console.log(abstractURL);
		// 				$.ajax({
		// 				  method: "GET",
		// 				  url: "worker.php",
		// 	        dataType: "json",
		// 				  data: { url : abstractURL }
		// 				})
		// 			  .done(function( json_contents ) {
		// 					j = j + 1;
		// 					//console.log(i);
		// 					var data = json_contents["full-text-retrieval-response"]["coredata"];
		// 					console.log(data);
		// 					var title = data["dc:title"]
		// 					var url = data["link"][1]["@href"]
		// 					var doi = data["prism:doi"]
		// 					var pn = data["prism:publicationName"]
		// 					var date = data["prism:coverDate"]
		// 					var desc = title + ". " + pn + " " + date + " " + doi;
		// 					// li.push(desc);
		// 					// if(li.length == 52){
		// 					// 	addList();
		// 					// }
		// 					//console.log(desc);
		//
		// 					var desDiv = document.createElement("a");
		// 					desDiv.setAttribute("class", "snow")
		// 					var br = document.createElement("br");
		// 					desDiv.innerHTML = desc;
		// 					desDiv.href = url;
		// 					console.log("#top" + j);
		// 					var top = "#top" + j;
		// 					console.log(top);
		// 					$(top).append(br);
		// 					$(top).append(desDiv);
		//
		// 					$("#result" + i).html(x[0]);
		// 			  });
		// 			}
		// 			myDiv.setAttribute("class", "boshal");
		//
		// 		}
		// 	}
		// });
	}
	}
});
}
