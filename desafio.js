//Os testes foram rodados via Node.js, por isso o console.log para printar as funções na tela no arquivo testes.txt.

function calculaEdistribui(listaCompras,listaEmails){

    let valores = Object.values(listaCompras);
    let tamanhoListaEmails = listaEmails.length;

    //Esta condição engloba casos em que nenhuma lista testada é vazia
    if (valores.length !=0 && tamanhoListaEmails !=0){

    //Faz o produto das quantidades de itens por seus preços
    let produtosPrecoQtd = [];
    for(i in valores){
        produtosPrecoQtd.push((valores[i].qtd)*(valores[i].preco))
    } 

    //Soma os valores referentes aos produtos das quantidades de itens por seus preços
    let valorTotalCompra = produtosPrecoQtd.reduce((n1,n2)=> n1+n2)


    let valoresDistribuidos = []

    //Condicional para distribuir o montante da compra por endereço de email caso seja igual pra todos

    
       if (valorTotalCompra%tamanhoListaEmails == 0){
            for (let i = 0;i<tamanhoListaEmails; i++){
                valoresDistribuidos.push(`${valorTotalCompra/tamanhoListaEmails} centavos para: ${listaEmails[i]}`)

            }
            return valoresDistribuidos
        }
        
         
    //Condicional para distribuir o montante da compra por endereço de email caso seja não igual pra todos    
    if (valorTotalCompra%tamanhoListaEmails != 0){
            for (let i = 0;i<tamanhoListaEmails; i++){
                valoresDistribuidos.push(Math.floor(valorTotalCompra/tamanhoListaEmails)) 
                valoresDistribuidos.push(` centavos para ${listaEmails[i]}`)
            }

            for (let j=0;j < valorTotalCompra%tamanhoListaEmails; j++){
                valoresDistribuidos[j] = valoresDistribuidos[j]+1
            }           

               return valoresDistribuidos
            }
    
        }
    //Retorna mensagem de "erro" caso haja uma lista vazia

    else{
        return "A lista de compras ou a lista de emails está vazia. Por favor, preencha-as devidamente."
    }


}


console.log(calculaEdistribui(
    [   
        { 
            "item": "Laranja",
            "qtd": 1,
            "preco": 1
        },
        {
            "item": "Pão",
            "qtd": 7,
            "preco": 9
        }
    ], 
    ['email1@exemplo.com', 'email2@exemplo.com', 'email3@exemplo.com']
    )) 

