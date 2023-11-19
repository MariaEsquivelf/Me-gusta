function estado(elemento) {
    let isLogged = parseInt(elemento.getAttribute('bool-log')) === 1

    elemento.innerText = isLogged ? "Logout" : "Login"
    elemento.setAttribute('bool-log', isLogged ? 0 : 1)

}


function like(elemento){
    var contador = parseInt(elemento.getAttribute('cont-likes'))
    contador ++;
    elemento.setAttribute('cont-likes', contador)
    elemento.innerText=`${contador} likes`
    return alert('Ninja was liked')
}
function remove(elemento){
    elemento.remove()
}