let ul = document.getElementById('carrinho');
let abaCarrinho = document.getElementById('abaCarrinho');
let btnFechar = document.getElementById('btnFechar');
let iconeCarrinho = document.getElementById('iconeCarrinho');
let limparCarrinho = document.getElementById('limparCarrinho');


let planos = {
    preco1: 'Plano básico - R$22,90',
    preco2: 'Plano PLUS - R$24,90',
    preco3: 'Plano MEDICINA - R$29,90',
    preco4: 'Plano REDAÇÃO - R$19,90'
}

btn1.addEventListener('click', function(){
    abaCarrinho.style.transform = "translate(-100%)"
    ul.innerHTML = '<li class="preçoCarrinho">'+planos.preco1+'</li>'
})
btn2.addEventListener('click', function(){
    abaCarrinho.style.transform = "translate(-100%)"
    ul.innerHTML = '<li class="preçoCarrinho">'+planos.preco2+'</li>'
})
btn3.addEventListener('click', function(){
    abaCarrinho.style.transform = "translate(-100%)"
    ul.innerHTML = '<li class="preçoCarrinho">'+planos.preco3+'</li>'
})
btn4.addEventListener('click', function(){
    abaCarrinho.style.transform = "translate(-100%)"
    ul.innerHTML = '<li class="preçoCarrinho">'+planos.preco4+'</li>'
})



btnFechar.addEventListener('click', function(){
    abaCarrinho.style.transform = "translate(0)"
})
iconeCarrinho.addEventListener('click', function(){
    abaCarrinho.style.transform = "translate(-100%)"
})
limparCarrinho.addEventListener('click', function(){
    ul.innerHTML = '<li class=preçoCarrinho>O seu carrinho está vazio</li>'
})