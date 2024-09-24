var y = document.getElementsByTagName('audio');
  for(var j=0; j<y.length; j++) {
    y[j].onended = function() {
      document.getElementById('marq').innerHTML = 'select a song!';};}