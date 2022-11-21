const API = "http://localhost:3000/classes";
const charDisplay = document.getElementById("characters");
const charDetails = document.getElementById("character-details");
const ratingDisplay = document.getElementById("rating-display");
const commentDisplay = document.getElementById("comment-display");
const form = document.getElementById('likes-form');
const detailImage = document.getElementById('detail-image');

function renderCharacters(character) {
    const mini = document.createElement('img');
    const name = document.getElementById('name');
        
    mini.src = character.btnImage;
    mini.alt = character.fourth;

    mini.addEventListener('click', (e) => {
        console.log(e);
        e.preventDefault();
        const secClass = document.getElementById('second-advancement');
        const thirdClass = document.getElementById('third-advancement');
        const pWeapon = document.getElementById('primary');
        const sWeapon = document.getElementById('secondary');
        const classImage = document.createElement('img');

        name.innerText = e.target.alt;
        classImage.alt = e.target.alt;
        classImage.src = e.target.image;
        secClass.innerText = e.target.second;
        thirdClass.innerText = e.target.third;
        pWeapon.innerText = e.target.nPrimary;
        sWeapon.innerText = e.target.nSecondary;

        detailImage.append(classImage);
        charDetails.append(detailImage, name, secClass, thirdClass, pWeapon, sWeapon);
    })

    mini.addEventListener('mouseover', (e) => {
        e.preventDefault();
        const name1 = document.getElementById('character-details');
        
        
        name1.innerText = e.target.alt;
        name1.style.display = ('unset');

        //console.log(e);
        //console.log(e.target.alt);
    })

    mini.addEventListener('mouseout', (e) => {
        e.preventDefault();
        const el = document.getElementById('character-details');
        //console.log(e);
        el.style.display = 'none';
    })
    charDisplay.append(mini);
}

fetch(API)
.then(r => r.json())
.then(data => data.forEach(renderCharacters))