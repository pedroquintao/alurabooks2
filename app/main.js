let livros = [{imagem: 'imagens/O-Retorno-do-cangaceiro-JavaScript.png',
              alt: 'capa do do livro abacatero',
              titulo: 'Abacatero',
              autor: 'Valcir Carrasco',
              preco: 66.66,
              tag: 'front-end'}];

const endPoinDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const secaoDeLivros = document.getElementById('livros');
const filtros = document.querySelectorAll('.btn');
console.log('%cmain.js line:11 filtros', 'color: #007acc;', filtros);
// getBuscarLivrosDaApi();
adicionaListernerNosFiltros(filtros);
async function getBuscarLivrosDaApi() {
    const res = await fetch(endPoinDaApi);
    livros =  await res.json(); 

    let livrosComDesconto = aplicarDesconto(livros);

    exibeLivrosNaTela(livrosComDesconto);

    console.table(livros);
}

function exibeLivrosNaTela(secao) {

    secao.forEach(livro => {
        
        const livroAtual = `<div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}:
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.tag}</span>
        </div>
      </div>`//A função numeroEntrada.toFixed(n) retorna o numeroEntrada limitado com n casas depois da vírgula
        secaoDeLivros.innerHTML += livroAtual;
    })
}

function aplicarDesconto(livros) {
  const desconto = 0.2

  livrosDes = livros.map(l => {
    return {...l, preco: l.preco - l.preco * desconto}});//Spread operator ... faz uma cópia do objeto existente para outro objeto e altera a propriedade que está depois da vírgula. A ação a ser feita é colocada depois dos :

  return livrosDes;
}

function adicionaListernerNosFiltros(filtros) {
  filtros.forEach(element => element.addEventListener('click', function() {
    console.log('%cmain.js line:55 this', 'color: #007acc;', this);
    console.log('%cmain.js line:55 this.value', 'color: #007acc;', this.value);
    const listaDeLivrosFiltrados = filtraLivros(livros, this.value);
    exibeLivrosNaTela(listaDeLivrosFiltrados) //tentar colocar o toLowerCase aqui
  }))
}

function filtraLivros(lista, tipo) {
  const tipoMinusculo = tipo.toLowerCase();//talves não seja necessário
  return lista.filter(livro => {return livro.tag === tipo})
}