function adicionarItem(){
    let lista = document.getElementById("lista");
    let novoItem = document.createElement("li");
    novoItem.TextContent = "Item 3";
    lista.appendChild(novoItem);
}