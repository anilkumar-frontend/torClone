let menu = document.getElementById('menu')
let navList = document.getElementById('navList')

navList.style.maxHeight = "0px"

menu.onclick = function(){
    if(navList.style.maxHeight == '0px'){
        navList.style.maxHeight = '300px'
        menu.src="imges/cancel.png"
    }else{
        navList.style.maxHeight = '0px'
        menu.src="imges/menu.png"
    }
}