console.log('Loaded!');
var element= document.getElementById('mainText');
element.innerHTML = 'This is the new value that we entered';


//Move the image

var dego= document.getElementById('madi');

var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
    
}



dego.onclick= function() {
    var interval = setInterval(moveright, 50);
};