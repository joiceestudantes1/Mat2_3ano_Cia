const botoes = document.querySelectorAll(".botao");
const texto=document.querySelectorAll(".aba-conteúdo");

for(let i=0;i <botoes.length;i++){
    texto[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            texto.textContents[j].classList.remove("ativo");
            texto [j].classList.remove(ativo);

        }

        texto[i].classList.add("ativo");
        texto[i].classList.add(ativo);
    }
}
