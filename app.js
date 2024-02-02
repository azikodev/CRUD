const title = document.querySelector('.title');
let img = document.querySelector('.img');
img.value = 'https://picsum.photos/350/350'
let cards = document.querySelector('.cards');
function createCard() {
    const card = document.createElement('ul');
    const titleElement = document.createElement('li'); 
    titleElement.className = 'titleCard'
    const editTitle = document.createElement('button')
    const imgElement = document.createElement('li'); 

    const imgSrc = img.value; 
    imgElement.innerHTML = `<img src="${imgSrc}" alt="${title.value}">`; 

    titleElement.textContent = title.value; 

    editTitle.textContent = 'edit'

    card.className = 'card';
    card.appendChild(titleElement); 
    card.appendChild(editTitle); 
    card.appendChild(imgElement); 
    cards.appendChild(card);

    editTitle.addEventListener( 'click', () => {
        const editInput = document.createElement('input')

        card.appendChild(editInput)
        
    })
}