// creo l'array 'team' che contiene all'interno diversi objects
const team = [
    {
        firstName: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: 'img/01.jpg'
    },
    {
        firstName: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: 'img/02.jpg'
    },
    {
        firstName: 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        image: 'img/03.jpg'
    },
    {
        firstName: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Manager',
        image: 'img/04.jpg'
    },
    {
        firstName: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: 'img/05.jpg'
    },
    {
        firstName: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: 'img/06.jpg'
    },
];
// stampo il contenuto dell'array 'team' con un loop for
const row = document.querySelector('.row');
row.innerHTML = '';
for (let a = 0; a < team.length; a++) {
    const member = team[a];
    const template = `
    <div class="col-4 pt-5">
        <div class="card">
            <div class="cardBody">
                <div id="cardTop">
                    <img class="w-100" src="${member.image}" alt="imgMember">
                </div>
                <div id="cardBottom" class="text-center p-4">
                    <span>${member.firstName}</span> <span>${member.surname}</span>
                    <div>${member.role}</div>
                </div>
            </div>
        </div>
    </div>
    `;
    row.innerHTML += template;
}