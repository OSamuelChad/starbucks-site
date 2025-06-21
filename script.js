let circulo = document.querySelector('.circulo')
const imagem = document.querySelector('.copo-grande')

const imagens = ['img1.png', 'img2.png', 'img3.png']
let indiceAtual = 0

function trocarCor(cor) {
    circulo.style.background = cor
}
 function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length
    imagem.src = `img/${imagens[indiceAtual]}`
}
