console.log("Loaded");
var counter = 0;
var gayshit;
var freqs = []
var b = false;
var l = ["Journal of American College of Surgeons", "Surgery", "International Journal of Surgery", "British Journal of Oral and Maxillofacial Surgery", "The Journal of Heart and Lung Transplantation", "Annals of Vascular Surgery"];
var commonWords = new Set(['a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', "aren't", 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', "can't", 'cannot', 'could', "couldn't", 'did', "didn't", 'do', 'does', "doesn't", 'doing', "don't", 'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had', "hadn't", 'has', "hasn't", 'have', "haven't", 'having', 'he', "he'd", "he'll", "he's", 'her', 'here', "here's", 'hers', 'herself', 'him', 'himself', 'his', 'how', "how's", 'i', "i'd", "i'll", "i'm", "i've", 'if', 'in', 'into', 'is', "isn't", 'it', "it's", 'its', 'itself', "let's", 'me', 'more', 'most', "mustn't", 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours\tourselves', 'out', 'over', 'own', 'same', "shan't", 'she', "she'd", "she'll", "she's", 'should', "shouldn't", 'so', 'some', 'such', 'than', 'that', "that's", 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', "there's", 'these', 'they', "they'd", "they'll", "they're", "they've", 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', "wasn't", 'we', "we'd", "we'll", "we're", "we've", 'were', "weren't", 'what', "what's", 'when', "when's", 'where', "where's", 'which', 'while', 'who', "who's", 'whom', 'why', "why's", 'with', "won't", 'would', "wouldn't", 'you', "you'd", "you'll", "you're", "you've", 'your', 'yours', 'yourself', 'yourselves', 'review', "surgery", "report", "peer", "patients", "systematic", "surgical", "management", "meta-analysis", "versus", "total", "factors", "controlled", "repair", "cancer", "randomized", "study", "outcomes", "reconstruction", "safety", "open", "analysis", 'meta-analysis”', '“comparison', '“the', 'study”', "cancer:", "clinical"]);

console.log(commonWords);
var myMap = new Map();

for (i of stringMap)
{
  myMap.set(i[0], new Set(i[1]));
}
//
// console.log(commonWords);
//
console.log("Done");
a = [];
for(var x of myMap)
  a.push(x);
a.sort(function(x, y) {
  return y[1].size - x[1].size;
});
myMap = new Map(a);
console.log(myMap);



// var d = new Date();
/*if(d.getDay == 0){ //Calls this weekly
sendRequest();
}*/
//sendRequest();
var temp_json = "";
function sendRequest(){
  for (var i = 0; i < l.length; i++) {
    temp_json = "";
    input = l[i];
    var inFormated = input.split(' ').join('+');
    //console.log(inFormated);
    var searchURL = "https://api.elsevier.com/content/search/scidir?"
    var inputData={
      query:  "query=srctitle(" + inFormated +")",
      apiKey: "&apiKey=ac165557b6b0a14aeb6309577f50875a",
      count: "&count=200",
      date : "+and+pub-date+aft+20170301+and+pub-date+bef+20170331",
      output: "&httpAccept=application/json",
    }
    var jsonURL = searchURL + inputData.query + inputData.date + inputData.apiKey + inputData.count + inputData.output;
    //console.log(jsonURL);

    $.ajax({
      method: "GET",
      url: "worker.php",
      dataType: "json",
      data: { url : jsonURL }
    })
    .done(function( json_contents ) {
      temp_json = json_contents;
      console.log(temp_json);
      array = temp_json["search-results"].entry;
      console.log(array);
      for (var j = 0; j < array.length; j++) {
        var entry = array[j];
        var doi = "doi/" + entry["prism:doi"];
        var title = entry["dc:title"];
        //console.log(title);
        if (typeof title === 'undefined' || title === null) {
          console.log("Error");
          return;
        }

        var res = title.split(" ");
        //console.log(res);
        for (var k = 0; k < res.length; k++) {
          //console.log(k);
          var boshal = res[k].toLowerCase();
          boshal = boshal.replace(/['“]+/g, '');
          //console.log(boshal);
          if (commonWords.has(boshal) === false && boshal != "" && boshal.length > 3){

            if(myMap.has(boshal)){
              var doiList = myMap.get(boshal);
              doiList.push(doi);
              myMap.set(boshal, doiList)
            }
            else{
              var doiList = [];
              doiList.push(doi);
              myMap.set(boshal, doiList)
            }
          }
        }
      }


      //}
    });
  }
}
//   var boshal = res[i].toLowerCase();
// boshal = boshal.replace(/['“]+/g, '');
//console.log(boshal);
