const btn = document.querySelectorAll('.btn');

adicionaListernerNosFiltros(btn);

function adicionaListernerNosFiltros(botoes) {
    botoes.forEach((btn => btn.addEventListener('click', novaFiltraLivros)
    ))}

function novaFiltraLivros() {

    const tag = this.value;
    const btnId = this.id;
    let listaDeLivrosFiltrados = livros.filter(livro => {return livro.categoria === tag});

    tag? exibeLivrosNaTela(listaDeLivrosFiltrados) : btnId === 'btnOrdenarPorPreco'? console.log("ORDENAÇÃO") : getBuscarLivrosDaApi();
}