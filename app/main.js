let livros = [];
const endPoinDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const secaoDeLivros = document.getElementById('livros');

getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const res = await fetch(endPoinDaApi);
    livros =  await res.json(); //Entender melhor porque é necessário utilizar o await nessa linha
    adicionaLivros(livros);

    console.table(livros);
}

function adicionaLivros(secao) {

    secao.forEach(livro => {
        
        const livroAtual = `<div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}:
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.tag}</span>
        </div>
      </div>`
        secaoDeLivros.innerHTML += livroAtual
    })
}