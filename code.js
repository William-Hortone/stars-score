const emojisArray = [...document.querySelectorAll('.far')];
const starsArray = document.querySelectorAll('.fas');
const colorsArray = ['red','orange', 'lightblue', 'lightgreen','green']

starsArray.forEach((star, index)=>{
    star.addEventListener('click', ()=>{
        updateEmojis(index);
    })
})

const updateEmojis =(index)=>{
    starsArray.forEach((star, idx)=>{

        if( idx < index +1){
            star.classList.add('active');
        }
        else{
            star.classList.remove('active');
        }
        for(let i = 0; i < emojisArray.length; i++ ){
            emojisArray[i].classList.remove('shaw_emojis');
            emojisArray[index].classList.add('shaw_emojis');
        }
        for(let i = 0; i < colorsArray.length; i++ ){
        
            emojisArray[index].style.color = colorsArray[index];
        }
    })
}
