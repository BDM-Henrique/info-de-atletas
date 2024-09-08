function pesquisar() {
    console.log(dados);

    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""; // Inicializa a string vazia
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Adiciona os dados dentro da string 'resultados' e não diretamente no 'innerHTML'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
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
        
    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Após o loop, insira a string 'resultados' no 'innerHTML' da section
    section.innerHTML = resultados;
}

