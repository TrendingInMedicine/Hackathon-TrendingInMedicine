console.log("Loaded");
l = ["Journal of American College of Surgeons", "Surgery", "International Journal of Surgery"];
var d = new Date();
/*if(d.getDay == 0){ //Calls this weekly
  sendRequest();
}*/
sendRequest();
function sendRequest(){
    for (var i = 0; i < l.length; i++) {
      input = l[i];
      var inFormated = input.split(' ').join('+');
      console.log(inFormated);
      var searchURL = "https://api.elsevier.com/content/search/scidir?"
      var inputData={
          query:  "query=srctitle(" + inFormated +")",
          apiKey: "&apiKey=ac165557b6b0a14aeb6309577f50875a",
          count: "&count=200",
          date : "+and+pub-date+aft+20170201",
          output: "&httpAccept=application/json",
      }
      var jsonURL = searchURL + inputData.query + inputData.date + inputData.apiKey + inputData.count + inputData.output;
      console.log(jsonURL);
      $.ajax({
			  method: "GET",
			  url: "worker.php",
        dataType: "json",
			  data: { url : jsonURL }
			})
			  .done(function( json_contents ) {
          console.log(json_contents);
          abstractGrabber(json_contents)
			  });
    }
    // grab each articles DOI and parse them
    // http://api.elsevier.com/content/article/[doi]?httpAccept=application/json - format to get abstract and other shit
    // http://api.elsevier.com/content/article/doi/10.1016/j.ijsu.2005.03.007?httpAccept=application/json - example
    // to grab a json named obj's abstract do: obj["full-text-retrieval-response"].originalText
    // its going to have a bunch of jargon so what you are going to have to do is remove any text uptil the text state's its DOI
}

function abstractGrabber(data){
  array = data["search-results"].entry;
  var aSearchURL = "http://api.elsevier.com/content/article/"
  var format = "httpAccept=application/json";
  for (var i = 0; i < array.length; i++) {
    var entry = array[i];
    var doi = "doi/" + entry["prism:doi"];
    console.log(aSearchURL+doi+format);
  }
}
