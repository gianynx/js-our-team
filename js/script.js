`
<div class="col">
<div class="card">
    <div class="card_body">
    </div>
</div>
</div>
`
// creo l'array 'team' che contiene all'interno diversi oggetti
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

const row = document.querySelector('.row');
let rowContent = '';