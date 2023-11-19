let log = document.querySelector('#log')
let likeButton = document.querySelectorAll('.like')

let add = document.querySelector('.add')

function estado() {
    let isLogged = parseInt(log.getAttribute('bool-log')) === 1

    log.innerText = isLogged ? "Logout" : "Login"
    log.setAttribute('bool-log', isLogged ? 0 : 1)

}


function like(i){
    var contador = parseInt(likeButton[i].getAttribute('cont-likes'))
    console.log(contador)
    contador ++;
    likeButton[i].setAttribute('cont-likes', contador)
    likeButton[i].innerText=`${contador} likes`
    return alert('Ninja was liked')
}
function remove(){
    add.remove()
}

