function scrollHeader() {
    const nav = document.getElementById('header');

    if (this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}


//adiciona o envento que quando abre a janela, tem um envento de escuta ao scrolar a página. Chama a função scrollHeader
window.addEventListener('scroll', scrollHeader)