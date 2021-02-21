const hotel_names =

[
    { name:'Gentle Echo Hotel & Spa' },
    { name:'Marina Valley Hotel' },
    { name:'Spring Orb Hotel & Spa' },
    { name:'Peaceful Nimbus Hotel & Spa' },
    { name:'Brass Legacy Resort' },
    { name:'Brass Gorge Hotel' },
    { name:'Citadel Hotel' },
    { name:'Fantasy Resort' },
    { name:'Fancy Hotel & Spa' },
    { name:'Crescent Motel' },
    { name:'Majestic Ridge Hotel & Spa' },
    { name:'Sunset Dawn Resort' },
    { name:'Autumn Comfort Resort' },
    { name:'Grand Court Resort' },
    { name:'Private Cabin Resort' },
    { name:'Emerald Temple Hotel' },
    { name:'Vacation Hotel' },
    { name:'Tower Hotel & Spa' },
    { name:'Elegant Hotel' },
    { name:'Outlook Hotel' },
    { name:'Spring Rainbow Hotel' },
    { name:'Ruby Jungle Resort' },
    { name:'Viridian Ocean Resort' },
    { name:'Mellow Pastures Hotel' },
    { name:'Silver Dome Resort' },
    { name:'Malachite Star Resort' },
    { name:'Prophecy Resort' },
    { name:'Radiance Hotel & Spa' },
    { name:'Refresh Resort' },
    { name:'Liberty Hotel' },
    { name:'Lunar Legacy Resort & Spa' },
    { name:'Lunar Bluff Resort & Spa' },
    { name:'Malachite Cottage Hotel' },
    { name:'Sunrise Vale Motel' },
    { name:'Emerald Peninsula Hotel' },
    { name:'Noble Haven Resort' },
    { name:'Universe Hotel & Spa' },
    { name:'Coffee Motel' },
    { name:'Lethargy Hotel' },
    { name:'Antique Resort & Spa' }
]

const list = document.getElementById('list');

function setList(group) {
    clearList();
    for (const hotel of group) {
        const item = document.createElement('li');
        const text = document.createTextNode(hotel.name);
        item.appendChild(text);
        list.appendChild(item);


    }

    if (group.length === 0) {
        setNoResults();
    }

}

function clearList() {
    while( list.firstChild) {
        list.removeChild(list.firstChild);
    }

}

function setNoResults() {
       const item = document.createElement('li');
       const text = document.createTextNode('No results found');
       item.appendChild(text);
       list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
        return 2;
    }
        else if (value.startsWith(searchTerm)) {
            return 1;
            
        } else if (value.includes(searchTerm)){
            return 0;
        }
    }



const searchInput = document.getElementById('searchs');

searchInput.addEventListener('input', (event)=>
    {
        let value = event.target.value;
        if(value && value.trim().length > 0) {
            value = value.trim().toLowerCase();
            setList(hotel_names.filter(hotel => {
                return hotel.name.includes(value);
            }).sort((hotelA, hotelB) => {
                return getRelevancy(hotelA.name, value) - getRelevancy(hotelB.name, value);

            }));

        } else {
            clearList();
        }
    });