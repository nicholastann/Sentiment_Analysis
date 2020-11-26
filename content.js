

//var searches = document.querySelectorAll( '.g:not(.kno-kp):not(.eejeod)' );
var searches = document.querySelectorAll('.LC20lb');
var news = document.querySelectorAll('.JheGif');
var newsCard = document.querySelectorAll('.I1HL6b');
var neutral = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/neutral-face_1f610.png" style="width:20px;height:20px;">';
var grinning = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/grinning-face-with-big-eyes_1f603.png" style="width:20px;height:20px;">';
var pouting = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/pouting-face_1f621.png" style="width:20px;height:20px;">';
var crying = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/crying-face_1f622.png" style="width:20px;height:20px;">';
for (var i = 0, l = searches.length; i < l; i++) {

    var x = Math.floor((Math.random() * 4) + 1);
    if(x==1){
      searches[i].innerHTML += neutral;
    }
    else if (x==2){
      searches[i].innerHTML += grinning;
    }
    else if (x==3){
      searches[i].innerHTML += pouting;
    }
    else{
      searches[i].innerHTML += crying;
    }
}

for (var i = 0, l = news.length; i < l; i++) {

    var x = Math.floor((Math.random() * 4) + 1);
    if(x==1){
      news[i].innerHTML += neutral;
    }
    else if (x==2){
      news[i].innerHTML += grinning;
    }
    else if (x==3){
      news[i].innerHTML += pouting;
    }
    else{
      news[i].innerHTML += crying;
    }
}

for (var i = 0, l = newsCard.length; i < l; i++) {

    var x = Math.floor((Math.random() * 4) + 1);
    if(x==1){
      newsCard[i].innerHTML += neutral;
    }
    else if (x==2){
      newsCard[i].innerHTML += grinning;
    }
    else if (x==3){
      newsCard[i].innerHTML += pouting;
    }
    else{
      newsCard[i].innerHTML += crying;
    }
}

