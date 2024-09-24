function stopmusic() {
    var y = document.getElementsByTagName('audio');
    for(var j=0; j<y.length; j++) {
        y[j].pause();}
        document.getElementById('marq').innerHTML = 'no music is playing';
    }
        
function playsong() {
    var y = document.getElementsByTagName('audio');
    for(var j=0; j<y.length; j++) {
        y[j].pause();}
    var songvalue = event.target.value;
    document.getElementsByTagName('audio')[songvalue].currentTime = 0;
    document.getElementsByTagName('audio')[songvalue].play();
    document.getElementById('marq').innerHTML = event.target.title;
}
