const btn = document.querySelectorAll('.btn');

adicionaListenerNosFiltrosPorCategoria(btn);

function adicionaListenerNosFiltrosPorCategoria(botoes) {
    botoes.forEach((btn => {
    btn.value? btn.addEventListener('click', filtraLivros) : undefined;
}))}

function filtraLivros() {
    const categoria = this.value;
    let listaDeLivrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    console.log('%cfilter.js line:13 listaDeLivrosFiltrados', 'color: #007acc;', listaDeLivrosFiltrados);
    exibeLivrosNaTela(listaDeLivrosFiltrados);
    categoria == 'disponivel' ? exibeSomatoriaDosPrecos(calculaSomatoriaDePrecos(listaDeLivrosFiltrados)) : undefined;
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => { return livro.categoria === categoria; });
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => { return livro.quantidade > 0; });
}

