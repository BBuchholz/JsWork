//processes each file and returns textOutput related 
//to the processing 
function processFile(file){
  var textOutput = "";
  if ('name' in file) {
          textOutput += "name: " + file.name + "<br>";
        }
  if ('size' in file) {
    textOutput += "size: " + file.size + " bytes <br>";
  }
  textOutput += processForXML(file);
  return textOutput;
}

//analyzes for XML data (stub, to be expanded)
function processForXML(file){
  var textOutput = "";
  if ('name' in file && file.name.endsWith(".xml")){
    textOutput += "XML extension discovered";
  }
  return textOutput;
}

//loads all selected files and runs each through processFile(file)
//concatenating the ouput of each run into one long text output
function loadSelectedFiles(){
  var x = document.getElementById("myFile");
  var txt = "";
  if ('files' in x) {
    if (x.files.length == 0) {
      txt = "Select one or more files.";
    } 
    else {
      for (var i = 0; i < x.files.length; i++) {
        txt += "<br><strong>" + (i+1) + ". file</strong><br>";
        var file = x.files[i];
        txt += processFile(file);
      }
    }
  } 
  else {
    if (x.value == "") {
      txt += "Select one or more files.";
    } else {
      txt += "The files property is not supported by your browser!";
      txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
    }
  }
  document.getElementById("output").innerHTML = txt;
}
