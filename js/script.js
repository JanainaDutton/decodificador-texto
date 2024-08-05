const digitarTexto = document.getElementById("digitarTexto");
const botaoCriptografar = document.getElementById("botaoCriptografar");
const botaoDescriptografar = document.getElementById("botaoDescriptografar");
const botaoCopiar = document.getElementById("botaoCopiar");
const mensagemFinal = document.getElementById("mensagemFinal");
const boneco = document.getElementById("boneco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

let substituir = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (novoValor) => {
    mensagemFinal.innerHTML = novoValor;
    boneco.classList.add("oculto");
    digitarTexto.value = "";
    rightInfo.style.display = "none";
    botaoCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensagemFinal.classList.add("ajustar");

}

const reset = () => {
    mensagemFinal.innerHTML = "";
    boneco.classList.remove("oculto");
    rightInfo.style.display = "block";
    botaoCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensagemFinal.classList.remove("ajustar");
    digitarTexto.focus();
}

botaoCriptografar.addEventListener("click", () => {
    const texto = digitarTexto.value.toLowerCase();
    if(texto !== "") {
      function criptografar(newText) {
        for (let i = 0; i < substituir.length; i++) {
          if (newText.includes(substituir[i][0])) {
            newText = newText.replaceAll(substituir[i][0], substituir[i][1]);
          };
        };
        return newText;
      };
    } else {
        alert("Digite um texto para criptografar!");
        reset();
    }
    //const textoCriptografado = criptografar(texto);

    remplace(criptografar(texto));
});
botaoDescriptografar.addEventListener("click", () => {
    const texto = digitarTexto.value.toLowerCase();
    if(texto != "") {
      function descriptografar(newText) {
        for (let i = 0; i < substituir.length; i++) {
          if (newText.includes(substituir[i][1])) {
            newText = newText.replaceAll(substituir[i][1], substituir[i][0]);
          }
        }
        return newText;
      }
    }else {
        alert("Digite um texto para descriptografar!");
        reset();
    }
    remplace(descriptografar(texto));
    
});

botaoCopiar.addEventListener("click", () => {
    let texto = mensagemFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand("copy")
    alert("Texto Copiado");
    reset();
    

})