let btnSort = document.getElementById('btnOrdenarPorPreco');

btnSort.addEventListener('click', ordernarLivrosPorPreco);

function ordernarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    exibeLivrosNaTela(livrosOrdenados);
}
