
 const table = document.getElementsByClassName('table')[0];


function createCard(name, id){
    const card = document.createElement('div');
    card.className = 'card'; // Create class name of 'card'
  
    
    const member = document.createElement('div');
        member.innerText = name;
        member.className = 'member';
    const profile = document.createElement('div');
        profile.innerText = id;


    card.append(member); // Append div to card
    card.append(profile); //Append div to card

    return card;

}
table.appendChild(createCard("Jaye", 3368)); //Call create card 
table.appendChild(createCard("Tammie", 1836));