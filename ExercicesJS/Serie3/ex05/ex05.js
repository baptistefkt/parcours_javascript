let table = document.getElementsByTagName('img');

for (let i = 0; i < table.length; i++){
    table[i].addEventListener('mouseover', function(){
        table[i].src = 'images/image'+(i+1)+'_2.jpg';
    })
    table[i].addEventListener('mouseout', function(){
        table[i].src = 'images/image'+(i+1)+'.jpg';
    })

}
