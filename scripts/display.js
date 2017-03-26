var li = myLi;
var links = mylinks;
var lengths = [];
count = 0
var j = 1;
var snowshal = 0;
function display(){
	$('body').on('click', 'a', function() {

		var id = $(this).attr('id');
		console.log(id);

		if((id != "uneeded" || typeof id != 'undefined' || id != null) && (count === 0)){
			count = count + 1;
			document.getElementById("output").innerHTML = "";
			var i = 0;
			if(id == "mar2017"){
				for (var m of myMap.entries())
				{
					if(i>10)
					break;
					var myDiv = document.createElement("DIV");
					myDiv.setAttribute("id", "top" + i);
					myDiv.innerHTML = "#" + m[0];
					$('#output').append(myDiv);
					for(var index = snowshal; index < snowshal+ m[1].size; index++)
					{
						snowshal = snowshal + 1;
						var desDiv = document.createElement("a");
						desDiv.setAttribute("class", "snow")
						var br = document.createElement("br");
						desDiv.innerHTML = myLi[index];
						desDiv.href = links[index];
						var top = "#top" + i;
						console.log(top);
						$(top).append(br);
						$(top).append(desDiv);
					}
					i = i + 1;
				}
				// for(var x of myMap)  {
				// 	var temp_json = "";
				// 	j = 1;
				// 	i = i + 1;
				// 	//console.log(i);
				// 	if(i > 10)
				// 	break;
				// 	//	console.log(x);
				// 	var myDiv = document.createElement("DIV");
				// 	myDiv.setAttribute("id", "top" + i);
				// 	myDiv.innerHTML = "#" + x[0];
				// 	$('#output').append(myDiv);
				// 	var aSearchURL = "http://api.elsevier.com/content/article/"
				// 	var format = "?httpAccept=application/json";
				// 	//var j = 0;
				// 	for (var y of x[1]) {
				// 		//console.log(x[1].size);
				// 		lengths.push(x[1].size);
				// 		var doi = y;
				// 		var abstractURL = aSearchURL + doi + format;
				// 		//console.log(abstractURL);
				// 		$.ajax({
				// 			method: "GET",
				// 			url: "worker.php",
				// 			dataType: "json",
				// 			data: { url : abstractURL }
				// 		})
				// 		.done(function( json_contents ) {
				// 			temp_json = json_contents;
				// 			console.log(temp_json);
				// 			// 					//console.log(i);
				// 			var data = temp_json["full-text-retrieval-response"]["coredata"];
				// 			console.log(data);
				// 			var title = data["dc:title"]
				// 			var url = data["link"][1]["@href"]
				// 			var doi = data["prism:doi"]
				// 			var pn = data["prism:publicationName"]
				// 			var date = data["prism:coverDate"]
				// 			var desc = title + ". " + pn + " " + date + " " + doi;
				// 			console.log(desc);
				// 			li.push(desc);
				// 			// 					// li.push(desc);
				// 			// 					// if(li.length == 52){
				// 			// 					// 	addList();
				// 			// 					// }
				// 			var desDiv = document.createElement("a");
				// 			desDiv.setAttribute("class", "snow")
				// 			var br = document.createElement("br");
				// 			desDiv.innerHTML = desc;
				// 			desDiv.href = url;
				// 			var top = "#top" + j;
				// 			console.log(top);
				// 			$(top).append(br);
				// 			$(top).append(desDiv);
				// 			//
				// 			// 					$("#result" + i).html(x[0]);
				// 			// 			  });
				// 			// 			}
				// 			// 			myDiv.setAttribute("class", "boshal");
				// 			//
				// 			// 		}
				// 			// 	}
				// 			// });
				// 		});
				// 	}
				//
			}
		}		// //	j = j + 1;
	});
	count = 0;
}
