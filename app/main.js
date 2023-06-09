let livros = [];
const endPoinDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const secaoDeLivros = document.getElementById('livros');
const somatoriaDosPrecosDosLivros = document.getElementById('valor_total_livros_disponiveis')

getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const res = await fetch(endPoinDaApi);
    livros =  await res.json(); 

    let livrosComDesconto = aplicarDesconto(livros);

    exibeLivrosNaTela(livrosComDesconto);
}

function aplicarDesconto(livros) {
  const desconto = 0.2

  livrosDes = livros.map(l => {
    return {...l, preco: l.preco - l.preco * desconto}});//Spread operator ... faz uma cópia do objeto existente para outro objeto e altera a propriedade que está depois da vírgula. A ação a ser feita é colocada depois dos :

  return livrosDes;
}

function exibeLivrosNaTela(secao) {

    secaoDeLivros.innerHTML = '';
    somatoriaDosPrecosDosLivros.innerHTML = '';
    secao.forEach(livro => {

        let disponibilidade = livro.quantidade <= 0? 'livro__imagens indisponivel' : 'livro__imagens';

        const livroAtual = `
        <div class="livro">
          <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
          <h2 class="livro__titulo">
            ${livro.titulo}:
          </h2>
          <p class="livro__descricao">${livro.autor}</p>
          <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
          <div class="tags">
            <span class="tag">${livro.categoria}</span>
          </div>
        </div>`//A função numeroEntrada.toFixed(n) retorna o numeroEntrada limitado com n casas depois da vírgula

        secaoDeLivros.innerHTML += livroAtual;
    })

  }
  
function exibeSomatoriaDosPrecos(soma) { 
  somatoriaDosPrecosDosLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${soma}</span></p>
    </div>`
}
