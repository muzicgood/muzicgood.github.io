function sleep(ms = 0){
    return new Promise(resolve => setTimeout(resolve,ms));
}



async function ms(name){

    const collection = document.getElementsByClassName('btn_grp');
    // Calling array for removing the data on screen
    Array.prototype.forEach.call(collection, (element)=> element.style.display='none')  
    
    //Display the selected skill on the screen
    const elem = document.getElementById(name);
    
    
    elem.style.display='table';

    
   // elem.style.animation = 'rotate'+Math.round(Math.random(2))+' 6s';

    



}


