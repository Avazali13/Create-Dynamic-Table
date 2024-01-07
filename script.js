const users=[
  {
    firstName: "Samir",
    lastName: "Hesenov",
    age: 40,
    mail: "Samir.doe@example.com",
    address: "Usa",
    phone: "555-785-99-68",
    birthDate: "01.01.1982",
  },
  {
    firstName: "Avazali",
    lastName: "Aliyev",
    age: 22,
    mail: "Avazali.doe@example.com",
    address: "Aze",
    phone: "555-785-99-68",
    birthDate: "01.01.2000",
  },
  {
    firstName: "Serxan",
    lastName: "Agayev",
    age: 17,
    mail: "Serxan.doe@example.com",
    address: "Ordubad",
    phone: "555-785-99-68",
    birthDate: "01.01.2007",
  },
  {
    firstName: "Murad",
    lastName: "Qafarov",
    age: 15,
    mail: "Murad.doe@example.com",
    address: "Dasta",
    phone: "555-785-99-68",
    birthDate: "01.01.2005",
  },
  {
    firstName: "Altay",
    lastName: "Hesenov",
    age: 24,
    mail: "Altay.doe@example.com",
    address: "Culfa",
    phone: "555-785-99-68",
    birthDate: "01.01.2000",
  },
  {
    firstName: "Samir",
    lastName: "Babayev",
    age: 22,
    mail: "Babayev.doe@example.com",
    address: "Nakhchivan",
    phone: "555-785-99-68",
    birthDate: "01.01.2002",
  },
  {
    firstName: "Ismayil",
    lastName: "Musayev",
    age: 29,
    mail: "Isi.doe@example.com",
    address: "Ordubad",
    phone: "555-785-99-68",
    birthDate: "01.01.2004",
  },
  {
    firstName: "Nurlan",
    lastName: "Settarov",
    age: 36,
    mail: "Jack.doe@example.com",
    address: "Sharur",
    phone: "555-785-99-68",
    birthDate: "01.01.1986",
  },
  {
    firstName: "Mikayil",
    lastName: "Suleymanov",
    age: 10,
    mail: "Mikookim.doe@example.com",
    address: "Ordubad",
    phone: "555-785-99-68",
    birthDate: "01.01.2014",
  },
  
];


let root =document.querySelector('root')
let table=document.createElement('table')
// let tbody=document.createElement('tbody')
// let tr=document.createElement('tr')
// let thead=document.createElement('th')
// let td=document.createElement('td')
// tbody.appendChild(tr)
// tr.appendChild(thead)
// table.appendChild(tbody);
root.appendChild(table);



for(let i=0;i<1;i++){
    let tr = table.insertRow();
    tr.style.fontWeight='bold';
   
    for(const [th,tb] of Object.entries(users[0])){
        let thead = tr.insertCell();
        thead.style.paddingLeft='15px'
        thead.appendChild(document.createTextNode(`${th}` )); 
        
}

}
for(let i=0;i<users.length;i++){
let tr = table.insertRow();
for(const [th,tb] of Object.entries(users[i])){
    let tbs = tr.insertCell();
    tbs.style.paddingLeft='15px'
    tbs.appendChild(document.createTextNode(`${tb}` )); 
}
}

root.className='root'
table.className="table table-success table-striped";
table.classList.add('table-responsive')

let tbody =document.querySelector('tbody')

tbody.className="tbody";




