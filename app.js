function pesquisar() {
    console.log(dados);

    let section = document.getElementById('resultados-pesquisa');
    console.log(section);

    let resultados = ""; // Inicializa a string vazia

    // Adiciona os dados dentro da string 'resultados' e não diretamente no 'innerHTML'
    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Para mais informações</a>
        </div>
        `;
    }

    // Após o loop, insira a string 'resultados' no 'innerHTML' da section
    section.innerHTML = resultados;
}

