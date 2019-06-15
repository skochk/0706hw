let ourBlock = document.querySelector('.moveBlock');
let area = document.querySelector('.area');
let changePos = document.querySelector('.changePos');
let addWidth = document.querySelector('.addWidth');
let addHeight = document.querySelector('.addHeight');

let tempMargin = 0;
changePos.addEventListener('click', function(){
  tempMargin += 50;
  area.style.margin = tempMargin + 'px';
})

let tempWidth = 0;
addWidth.addEventListener('click', function(){
  tempWidth += 50;
  area.style.width = area.offsetWidth + tempWidth + 'px';
})


let tempHeight = 0;
addHeight.addEventListener('click', function(){
  tempHeight += 50;
  area.style.height = area.offsetHeight + tempHeight + 'px';
})

  let move = function move(e) {
    console.log('x = ' + ourBlock.offsetLeft  + ' y = ' + ourBlock.offsetTop);
    if(e.pageX > ourBlock.offsetWidth && e.pageX  < area.offsetWidth){
      ourBlock.style.left = e.pageX  + area.offsetLeft - ourBlock.offsetWidth + 'px';
    }
    if(e.pageY > ourBlock.offsetHeight && e.pageY  < area.offsetHeight){
    ourBlock.style.top = e.pageY  + area.offsetTop - ourBlock.offsetHeight + 'px';
    }
  }


  ourBlock.addEventListener('mousedown', function(e) {
    
      document.addEventListener('mousemove', move);

      document.addEventListener('mouseup', function(e) {
        document.removeEventListener('mousemove',move);

        
       

      });
  })















// let ourBlock = document.querySelector('.moveBlock');

// ourBlock.onmousedown = function(e){

//   ourBlock.onmousemove = function(e){
//     mover(e);
//   }


  
//   function mover(e){
//     ourBlock.style.left = e.pageX - ourBlock.offsetWidth / 2 + 'px';
//     ourBlock.style.top = e.pageY - ourBlock.offsetHeight / 2 + 'px';
//   }


//   ourBlock.onmouseup = function() {
//     document.onmousemove = null;
//     ourBlock.onmouseup = null;
//   }
//   ourBlock.ondragstart = function(){
//     return false;
//   }
// }