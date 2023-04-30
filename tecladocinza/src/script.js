var keyLabels = gsap.timeline();

keyLabels.to("#keyboard-labels", 1,  {opacity: 1});

var presetPiano = 1;
var presetGuitar = 0;
var presetDrums = 0;

function speakersOn(){
  gsap.to("#speaker-l, #speaker-r", 1, {scale: 1.1, transformOrigin: "center", ease: Elastic.easeOut});
};
function speakersOff(){
  gsap.to("#speaker-l, #speaker-r", 1, {scale: 1, transformOrigin: "center", ease: Elastic.easeOut});
};

function notesA(){
  var tl = gsap.timeline();
  tl.to("#note-l0, #note-r2", .25, {opacity: 1, rotate: -20, x: -20, y: -60});
  tl.to("#note-l0, #note-r2", .25, {rotate: 20, x: 20, opacity: 0});
  tl.to("#note-l0, #note-r2", .25, {opacity: 0, rotate: 0, x: 0, y: 0});
};

function notesB(){
  var tl = gsap.timeline();
  tl.to("#note-l1, #note-r1", .25, {opacity: 1, rotate: -20, x: -20, y: -60});
  tl.to("#note-l1, #note-r1", .25, {rotate: 20, x: 20, opacity: 0});
  tl.to("#note-l1, #note-r1", .25, {opacity: 0, rotate: 0, x: 0, y: 0});
};

function notesC(){
  var tl = gsap.timeline();
  tl.to("#note-l2, #note-r0", .25, {opacity: 1, rotate: -20, x: -20, y: -60});
  tl.to("#note-l2, #note-r0", .25, {rotate: 20, x: 20, opacity: 0});
  tl.to("#note-l2, #note-r0", .25, {opacity: 0, rotate: 0, x: 0, y: 0});
};

$("#preset-piano").click(function(){
  presetPiano = 1;
  presetGuitar = 0;
  presetDrums = 0;
  gsap.to("#preset-piano", .5, {opacity: 1});
  gsap.to("#preset-guitar, #preset-drums", .5, {opacity: .5});
});

$("#preset-guitar").click(function(){
  presetGuitar = 1;
  presetPiano = 0;
  presetDrums = 0;
  gsap.to("#preset-guitar", .5, {opacity: 1});
  gsap.to("#preset-piano, #preset-drums", .5, {opacity: .5});
});

$("#preset-drums").click(function(){
  presetDrums = 1;
  presetPiano = 0;
  presetGuitar = 0;
  gsap.to("#preset-drums", .5, {opacity: 1});
  gsap.to("#preset-piano, #preset-guitar", .5, {opacity: .5});
});

// C5 KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "81" || keycode == "113"){
    notesA();
    speakersOn();
    gsap.to("#c5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#piano-c5")[0].play();
  } else if(presetGuitar == 1 && keycode == "81" || keycode == "113"){
    notesA();
    speakersOn();
    gsap.to("#c5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#guitar-c5")[0].play();
  } else if(presetDrums == 1 && keycode == "81" || keycode == "113"){
    notesA();
    speakersOn();
    gsap.to("#c5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#drums-808")[0].play();
  }
  
});
$(document).keyup(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == "81" || keycode == "113"){
    speakersOff();
    gsap.to("#c5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }
});

// C5 CLICK
$("#c5").click(function(){
  if(presetPiano == 1){
    notesA();
    speakersOn();
    gsap.to("#c5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#piano-c5")[0].play();
  } else if(presetGuitar == 1){
    notesA();
    speakersOn();
    gsap.to("#c5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#guitar-c5")[0].play();
  } else if(presetDrums == 1){
    notesA();
    speakersOn();
    gsap.to("#c5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#drums-808")[0].play();
  }
  
  setTimeout(function(){
    speakersOff();
    gsap.to("#c5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// C5B KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "50"){
    speakersOn();
    gsap.to("#c5b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-c5b")[0].play();
  } else if(presetGuitar == 1 && keycode == "50"){
    speakersOn();
    gsap.to("#c5b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-c5b")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "50"){
      speakersOff();
      gsap.to("#c5b", .025, {scale: 1, transformOrigin: "top"});
    }
});

// C5B CLICK
$("#c5b").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#c5b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-c5b")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#c5b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-c5b")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#c5b", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// D5 KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "87" || keycode == "119"){
    speakersOn();
    gsap.to("#d5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#piano-d5")[0].play();
  } else if(presetGuitar == 1 && keycode == "87" || keycode == "119"){
    speakersOn();
    gsap.to("#d5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#guitar-d5")[0].play();
  } else if(presetDrums == 1 && keycode == "87" || keycode == "119"){
    speakersOn();
    gsap.to("#d5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#drums-kick")[0].play();
  }
});
$(document).keyup(function(event){
  speakersOff();
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "87" || keycode == "119"){
      gsap.to("#d5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
    }
});

// D5 CLICK
$("#d5").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#d5", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-d5")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#d5", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-d5")[0].play();
  } else if(presetDrums == 1){
    speakersOn();
    gsap.to("#d5", .05, {scale: .93, transformOrigin: "top"});
    $("#drums-kick")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#d5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// D5B KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "51"){
    speakersOn();
    gsap.to("#d5b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-d5b")[0].play();
  } else if(presetGuitar == 1 && keycode == "51"){
    speakersOn();
    gsap.to("#d5b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-d5b")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "51"){
      speakersOff();
      gsap.to("#d5b", .025, {scale: 1, transformOrigin: "top"});
    }
});

// D5B CLICK
$("#d5b").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#d5b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-d5b")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#d5b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-d5b")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#d5b", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// E5 KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "69" || keycode == "101"){
    notesB();
    speakersOn();
    gsap.to("#e5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#piano-e5")[0].play();
  } else if(presetGuitar == 1 && keycode == "69" || keycode == "101"){
    notesB();
    speakersOn();
    gsap.to("#e5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#guitar-e5")[0].play();
  } else if(presetDrums == 1 && keycode == "69" || keycode == "101"){
    notesB();
    speakersOn();
    gsap.to("#e5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#drums-snare")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "69" || keycode == "101"){
      speakersOff();
      gsap.to("#e5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
    }
});

// E5 CLICK
$("#e5").click(function(){
  if(presetPiano == 1){
    notesB();
    speakersOn();
    gsap.to("#e5", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-e5")[0].play();
  } else if(presetGuitar == 1){
    notesB();
    speakersOn();
    gsap.to("#e5", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-e5")[0].play();
  } else if(presetDrums == 1){
    notesB();
    speakersOn();
    gsap.to("#e5", .05, {scale: .93, transformOrigin: "top"});
    $("#drums-snare")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#e5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// F5 KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "82" || keycode == "114"){
    speakersOn();
    gsap.to("#f5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#piano-f5")[0].play();
  } else if(presetGuitar == 1 && keycode == "82" || keycode == "114"){
    speakersOn();
    gsap.to("#f5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#guitar-f5")[0].play();
  } else if(presetDrums == 1 && keycode == "82" || keycode == "114"){
    speakersOn();
    gsap.to("#f5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#drums-clap")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "82" || keycode == "114"){
      speakersOff();
      gsap.to("#f5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
    }
});

// F5 CLICK
$("#f5").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#f5", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-f5")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#f5", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-f5")[0].play();
  } else if(presetDrums == 1){
    speakersOn();
    gsap.to("#f5", .05, {scale: .93, transformOrigin: "top"});
    $("#drums-clap")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#f5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// F5B KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "53"){
    speakersOn();
    gsap.to("#f5b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-f5b")[0].play();
  } else if(presetGuitar == 1 && keycode == "53"){
    speakersOn();
    gsap.to("#f5b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-f5b")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "53"){
      speakersOff();
      gsap.to("#f5b", .025, {scale: 1, transformOrigin: "top"});
    }
});

// F5B CLICK
$("#f5b").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#f5b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-f5b")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#f5b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-f5b")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#f5b", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// G5
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "84" || keycode == "116"){
    notesC();
    speakersOn();
    gsap.to("#g5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#piano-g5")[0].play();
  } else if(presetGuitar == 1 && keycode == "84" || keycode == "116"){
    notesC();
    speakersOn();
    gsap.to("#g5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#guitar-g5")[0].play();
  } else if(presetDrums == 1 && keycode == "84" || keycode == "116"){
    notesC();
    speakersOn();
    gsap.to("#g5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#drums-hat-c")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "84" || keycode == "116"){
      speakersOff();
      gsap.to("#g5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
    }
});

// G5 CLICK
$("#g5").click(function(){
  if(presetPiano == 1){
    notesC();
    speakersOn();
    gsap.to("#g5", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-g5")[0].play();
  } else if(presetGuitar == 1){
    notesC();
    speakersOn();
    gsap.to("#g5", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-g5")[0].play();
  } else if(presetDrums == 1){
    notesC();
    speakersOn();
    gsap.to("#g5", .05, {scale: .93, transformOrigin: "top"});
    $("#drums-hat-c")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#g5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// G5B KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "54"){
    speakersOn();
    gsap.to("#g5b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-g5b")[0].play();
  } else if(presetGuitar == 1 && keycode == "54"){
    speakersOn();
    gsap.to("#g5b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-g5b")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "54"){
      speakersOff();
      gsap.to("#g5b", .025, {scale: 1, transformOrigin: "top"});
    }
});

// G5B CLICK
$("#g5b").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#g5b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-g5b")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#g5b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-g5b")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#g5b", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// A5 KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "89" || keycode == "121"){
    speakersOn();
    gsap.to("#a5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#piano-a5")[0].play();
  } else if(presetGuitar == 1 && keycode == "89" || keycode == "121"){
    speakersOn();
    gsap.to("#a5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#guitar-a5")[0].play();
  } else if(presetDrums == 1 && keycode == "89" || keycode == "121"){
    speakersOn();
    gsap.to("#a5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#drums-hat-o")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "89" || keycode == "121"){
      speakersOff();
      gsap.to("#a5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
    }
});

// A5 CLICK
$("#a5").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#a5", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-a5")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#a5", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-a5")[0].play();
  } else if(presetDrums == 1){
    speakersOn();
    gsap.to("#q5", .05, {scale: .93, transformOrigin: "top"});
    $("#drums-hat-o")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#a5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// A5B KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "55"){
    speakersOn();
    gsap.to("#a5b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-a5b")[0].play();
  } else if(presetGuitar == 1 && keycode == "55"){
    speakersOn();
    gsap.to("#a5b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-a5b")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "55"){
      speakersOff();
      gsap.to("#a5b", .025, {scale: 1, transformOrigin: "top"});
    }
});

// A5B CLICK
$("#a5b").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#a5b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-a5b")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#a5b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-a5b")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#a5b", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// B5 KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "85" || keycode == "117"){
    notesA();
    speakersOn();
    gsap.to("#b5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#piano-b5")[0].play();
  } else if(presetGuitar == 1 && keycode == "85" || keycode == "117"){
    notesA();
    speakersOn();
    gsap.to("#b5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#guitar-b5")[0].play();
  } else if(presetDrums == 1 && keycode == "85" || keycode == "117"){
    notesA();
    speakersOn();
    gsap.to("#b5", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#drums-crash")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "85" || keycode == "117"){
      speakersOff();
      gsap.to("#b5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
    }
});

// B5 CLICK
$("#b5").click(function(){
  if(presetPiano == 1){
    notesA();
    speakersOn();
    gsap.to("#b5", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-b5")[0].play();
  } else if(presetGuitar == 1){
    notesA();
    speakersOn();
    gsap.to("#b5", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-b5")[0].play();
  } else if(presetDrums == 1){
    notesA();
    speakersOn();
    gsap.to("#b5", .05, {scale: .93, transformOrigin: "top"});
    $("#drums-crash")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#b5", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// C6 KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "73" || keycode == "105"){
    speakersOn();
    gsap.to("#c6", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#piano-c6")[0].play();
  } else if(presetGuitar == 1 && keycode == "73" || keycode == "105"){
    speakersOn();
    gsap.to("#c6", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#guitar-c6")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "73" || keycode == "105"){
      speakersOff();
      gsap.to("#c6", .05, {scale: 1, transformOrigin: "top", opacity: 1});
    }
});

// C6 CLICK
$("#c6").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#c6", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-c6")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#c6", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-c6")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#c6", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// C6B KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "57"){
    speakersOn();
    gsap.to("#c6b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-c6b")[0].play();
  } else if(presetGuitar == 1 && keycode == "57"){
    speakersOn();
    gsap.to("#c6b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-c6b")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "57"){
      speakersOff();
      gsap.to("#c6b", .025, {scale: 1, transformOrigin: "top"});
    }
});

// C6B CLICK
$("#c6b").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#c6b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-c6b")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#c6b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-c6b")[0].play();
  }
  setTimeout(function(){
    speakersOff();
    gsap.to("#c6b", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// D6 KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "79" || keycode == "111"){
    notesB();
    speakersOn();
    gsap.to("#d6", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#piano-d6")[0].play();
  } else if(presetGuitar == 1 && keycode == "79" || keycode == "111"){
    notesB();
    speakersOn();
    gsap.to("#d6", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#guitar-d6")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "79" || keycode == "111"){
      speakersOff();
      gsap.to("#d6", .05, {scale: 1, transformOrigin: "top", opacity: 1});
    }
});

// D6 CLICK
$("#d6").click(function(){
  if(presetPiano == 1){
    notesB();
    speakersOn();
    gsap.to("#d6", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-d6")[0].play();
  } else if(presetGuitar == 1){
    notesB();
    speakersOn();
    gsap.to("#d6", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-d6")[0].play();
  }
  
  setTimeout(function(){
    speakersOff();
    gsap.to("#d6", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// D6B KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "48"){
    speakersOn();
    gsap.to("#d6b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-d6b")[0].play();
  } else if(presetGuitar == 1 && keycode == "48"){
    speakersOn();
    gsap.to("#d6b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-d6b")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "48"){
      speakersOff();
      gsap.to("#d6b", .025, {scale: 1, transformOrigin: "top"});
    }
});

// D6B CLICK
$("#d6b").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#d6b", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-d6b")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#d6b", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-d6b")[0].play();
  }
  
  setTimeout(function(){
    speakersOff();
    gsap.to("#d6b", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});

// E6 KEYBOARD
$(document).keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(presetPiano == 1 && keycode == "80" || keycode == "112"){
    speakersOn();
    gsap.to("#e6", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#piano-e6")[0].play();
  } else if(presetGuitar == 1 && keycode == "80" || keycode == "112"){
    speakersOn();
    gsap.to("#e6", .05, {scale: .93, transformOrigin: "top", opacity: .85});
    $("#guitar-e6")[0].play();
  }
});
$(document).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == "80" || keycode == "112"){
      speakersOff();
      gsap.to("#e6", .05, {scale: 1, transformOrigin: "top", opacity: 1});
    }
});

// E6 CLICK
$("#e6").click(function(){
  if(presetPiano == 1){
    speakersOn();
    gsap.to("#e6", .05, {scale: .93, transformOrigin: "top"});
    $("#piano-e6")[0].play();
  } else if(presetGuitar == 1){
    speakersOn();
    gsap.to("#e6", .05, {scale: .93, transformOrigin: "top"});
    $("#guitar-e6")[0].play();
  }
  
  setTimeout(function(){
    speakersOff();
    gsap.to("#e6", .05, {scale: 1, transformOrigin: "top", opacity: 1});
  }, 500);
});