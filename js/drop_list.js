function drop_list(question_btn){
    // Получаем состояние
    if (question_btn.textContent == "+"){
        var drop = true;
    } else {
        var drop = false;
    }

    // Изменяем текст и скрываем или открываем ответ
    if (drop) {
        question_btn.textContent = "-";
        question_btn.parentNode.parentNode.querySelector('.answer').style.display = "block";
    } else {
        question_btn.textContent = "+";
        question_btn.parentNode.parentNode.querySelector('.answer').style.display = "none";
    }
}