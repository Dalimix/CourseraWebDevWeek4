(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  var name;
  for (var name in names) {
    var curName = names[name];
    var initLetter= curName.charAt(0).toLowerCase();
    if (initLetter === 'j'){
      byeSpeaker.speak(curName);
    }
    else{
      helloSpeaker.speak(curName);
    }
  }
})();
