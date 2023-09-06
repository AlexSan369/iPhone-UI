const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        //Acessando todos os btns para remover a classe .selected
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        //Encapsulando botão clicado
        const button = e.target;
        //Recebendo o id do btn clicado
        const id = button.getAttribute("id");
        //Selecionando e adicionando classe ao btn
        button.querySelector(".color").classList.add("selected");
        //Adicionando a tranparencia
        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });
});