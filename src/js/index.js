// Percorre todos os seletores informado entre aspas no HTML (Document)//

const personagens = document.querySelectorAll('.personagem')

// Adiciona a classe "selecionado" na foto quando passar o mouse sobre ela//

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {

    if(window.innerWidth < 450) {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    // Verifica se já existe um personagem selecionado, se sim, devemos remover a seleção dele
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')

    personagem.classList.add('selecionado');

    //Quando passar o mouse em cima do personagem na lista, trocar a imagem, nome e descrição do personagem grande

    const imagemPersonagemGrande = document.querySelector('.personagem-grande')

    //Alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;

    imagemPersonagemGrande.src = `src/imagens/${idPersonagem}.png`

    // Altera o nome
    const nomePersonagem = document.getElementById('nome-personagem')

    nomePersonagem.innerText = personagem.getAttribute('data-name')

    // Altera a descrição
    const descricaoPersonagem = document.getElementById('descricao-personagem')

    descricaoPersonagem.innerText = personagem.getAttribute('data-description')
  })
})