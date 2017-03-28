var li = [];
var lengths = [];
var links = [];
count = 0
var j = 1;
function display(){
	$('body').on('click', 'a', function() {

		var id = $(this).attr('id');
		console.log(id);
		if((id != "uneeded" || typeof id != 'undefined' || id != null) && (count === 0)){
			count = count + 1;
			document.getElementById("output").innerHTML = "";
			var i= 0;
			if(id == "mar2017"){
				for(var x of myMap)  {

					var temp_json = "";
					var json_contents = "";
					j = 1;
					i = i + 1;
					//console.log(i);
					if(i > 10)
					break;
					console.log(x);
					var myDiv = document.createElement("DIV");
					myDiv.setAttribute("id", "top" + i);
					myDiv.innerHTML = "#" + x[0];
					$('#output').append(myDiv);
					var aSearchURL = "http://api.elsevier.com/content/article/"
					var format = "?httpAccept=application/json";
					//var j = 0;
					for (var y of x[1]) {
						//console.log(x[1].size);
						var doi = y;
						var abstractURL = aSearchURL + doi + format;
						//console.log(abstractURL);
						$.ajax({
							method: "GET",
							url: "worker.php",
							dataType: "json",
							data: { url : abstractURL }
						})
<<<<<<< HEAD

						.done(function( json_contents ) {
							temp_json = json_contents;
							lengths.push(temp_json);

=======

						.done(function( json_contents ) {
							temp_json = json_contents;
							lengths.push(temp_json);

>>>>>>> ea095a6bfb7cf4b7434a652bde0d66749a815b30
						});
					}
				}
			}
		}
	});
	getDescriptions(lengths);
}
function getDescriptions(arr)
{
	console.log(arr);
				for (var i of arr)
				{
							var data = i["full-text-retrieval-response"]["coredata"];
							//console.log(data);
							var title = data["dc:title"]
							var url = data["link"][1]["@href"]
							var doi = data["prism:doi"]
							var pn = data["prism:publicationName"]
							var date = data["prism:coverDate"]
							var desc = title + ". " + pn + " " + date + " " + doi;
							desc = desc.replace(/['”]+/g, '');
							desc = desc.replace(/['“]+/g, '');
							desc = desc.replace(/['"]+/g, '');
							li.push(desc);
							links.push(url);
						}
						if(arr.length === li.length)
						{
							console.log(li);
						}
							// 					// li.push(desc);
							// 					// if(li.length == 52){
							// 					// 	addList();
							// 					// }
							//var desDiv = document.createElement("a");
							//desDiv.setAttribute("class", "snow")
							//var br = document.createElement("br");
							//desDiv.innerHTML = desc;
							//desDiv.href = url;
							//var top = "#top" + j;
							//console.log(top);
							//$(top).append(br);
							//$(top).append(desDiv);
						}
						if(arr.length === li.length)
						{
							return li;
						}
}

>>>>>>> ea095a6bfb7cf4b7434a652bde0d66749a815b30
