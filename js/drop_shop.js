function drop_list(button){
    // Получаем состояние списка 
    if (button.querySelector("span").style.rotate === "-90deg"){
        var drop = true;
    } else { 
        var drop = false;
    }

    // Открываем список
    if (drop){
        button.parentNode.querySelector(".items").style.display = "flex";
        button.querySelector("span").style.rotate = "90deg"
    } else {
        button.parentNode.querySelector(".items").style.display = "none";
        button.querySelector("span").style.rotate = "-90deg"
    }
}
