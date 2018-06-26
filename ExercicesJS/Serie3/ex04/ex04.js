let btn = document.getElementById('btn');

function efface() {

     let nom = document.getElementById('nom');
     nom.value = "";
     let prenom = document.getElementById('prenom');
     prenom.value = "";
     let ville = document.getElementById('ville');
     ville.value = "";



}

btn.addEventListener('click', function() {
    efface();
})
