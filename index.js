const API = "http://localhost:3000/classes";
const charDisplay = document.getElementById("characters");
const charDetails = document.getElementById("character-details");
const ratingDisplay = document.getElementById("rating-display");
const commentDisplay = document.getElementById("comment-display");
const form = document.getElementById('likes-form');
const detailImage = document.getElementById('detail-image');

function renderCharacters(character) {
    const mini = document.createElement('img');
    
    mini.src = character.image;
    mini.alt = character.class;

    mini.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.getElementById('name');
        const hq = document.getElementById('base');
        const job = document.createElement('p');
        const stats = document.createElement('p');
        const pWeapon = document.createElement('p');
        const sWeapon = document.createElement('p');
        const instruct = document.createElement('p');

        name.innerText = character.class;
        hq.innerText = character.base;
        stats.innerText = character.stat;
        job.innerText = character.class;
        pWeapon.innerText = character.primary;
        sWeapon.innerText = character.secondary;
        instruct.innerText = character.instructor;
    })
    charDisplay.append(mini);
}

        // const newName = document.getElementById('name');
        // const mWeapon = document.createElement('p');
        // const sWeapon = document.createElement('p');
        // const newImg = document.createElement('img');

        // newName.innerText = document.createElement('p');
        

        // detailImage.src = character.advancement[i].btnImage;
        // detailImage.alt = character.advancement[i].fourth;
        // newName.innerText = character.advancement[i].fourth;
        // mWeapon.innerText = character.advancement[i].nPrimary;
        // sWeapon.innerText = character.advancement[i].nSecondary;
        // newImg

        // e.target.append(newName, newImg, mWeapon, sWeapon, hq, instruct)

        // charDetails.append(detailImage, name, hq)
        
        // detailImage.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     newImg.src = character.advancement[i].image;
        //     newImg.alt = character.advancement[i].fourth;

            


//     mini.addEventListener('mouseover', () => {
//         previewStats();
//     })
    
    
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const linput = document.getElementById('likes');
//         ratingDisplay.innerText = parseInt(ratingDisplay.innerText) + parseInt(linput);
//     })
// }


fetch(API)
.then(r => r.json())
.then(data => data.forEach(renderCharacters))