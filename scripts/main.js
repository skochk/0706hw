let ourBlock = document.querySelector('.moveBlock');



ourBlock.onmousedown = function(e){

  ourBlock.onmousemove = function(e){
    mover(e);
  }


  
  function mover(e){
    ourBlock.style.left = e.pageX - ourBlock.offsetWidth / 2 + 'px';
    ourBlock.style.top = e.pageY - ourBlock.offsetHeight / 2 + 'px';
  }

  ourBlock.onmouseup = function() {
    document.onmousemove = null;
    ourBlock.onmouseup = null;
  }
  // ourBlock.ondragstart = function(){
  //   return false;
  // }
}
