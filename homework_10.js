// изменение текста на кнопке

let button = document.getElementById("btnDblClick");

let dbClick = false;

button.addEventListener("dblclick", function() {
    if (dbClick) {
        this.textContent = "нажми меня дважды";
        dbClick = false;
    } else {
            this.textContent = "кнопка нажата дважды";
        dbClick = true;
        };   
});

// изменение фона страницы по кнопке

let select = document.getElementById("selectColor");
let body = document.body;

select.addEventListener("change", function() {
    body.style.backgroundColor = this.value;
});