let affiche = document.getElementsByTagName('a')[0];
let masque = document.getElementsByTagName('a')[1];
let text = document.getElementById('texte');
affiche.addEventListener('click', function(){
    texte.style = 'display: block';
})
masque.addEventListener('click', function(){
    texte.style = 'display: none';
})
