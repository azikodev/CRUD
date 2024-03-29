const title = document.querySelector('.title');
let img = document.querySelector('.img');
img.value = 'https://picsum.photos/350/350'
let cards = document.querySelector('.cards');
if (title.value.length == 0) {
    function createCard() {
        const card = document.createElement('ul');
        const titleElement = document.createElement('li');
        titleElement.className = 'titleCard'
        const editTitle = document.createElement('button')
        const imgElement = document.createElement('li');
        const delCard = document.createElement('button');

        const imgSrc = img.value;
        imgElement.innerHTML = `
        <img src="${imgSrc}" alt="${title.value}">
        `;
        let titleEl = titleElement.textContent = title.value;

        editTitle.innerHTML = `
        <span>Edit title</span>
        `
        delCard.innerHTML = `
        <span>Delete</span>
        `

        card.className = 'card';
        card.appendChild(titleElement);
        card.appendChild(editTitle);
        card.appendChild(imgElement);
        card.appendChild(delCard);
        cards.appendChild(card);

        delCard.addEventListener('click', () => {
            card.className = 'delClass'
        })


        editTitle.addEventListener('click', () => {
            editTitle.classList.add('displayNone')
            // editTitle.required = true;
            const newInput = document.createElement('input')
            newInput.required = true;
            newInput.value = titleEl
            const saveBtn = document.createElement('button')
            saveBtn.innerHTML = `
            <span>Save</span>
            `
            titleElement.parentNode.insertBefore(newInput, titleElement)
            titleElement.parentNode.insertBefore(saveBtn, titleElement)
            titleElement.classList.add('displayNone')
            editTitle.setAttribute('disabled', 'true')
            saveBtn.addEventListener('click', () => {
                editTitle.disabled = false;
                editTitle.classList.add('displayBlock')
                titleElement.textContent = newInput.value
                titleElement.classList.remove('displayNone')
                titleElement.classList.add('displayBlock')
                newInput.remove('')
                saveBtn.remove('')
            })
        })
    }
}