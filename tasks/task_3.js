let arr = [
    {
        firstName: 'Adigwe',
        lastName: 'Chizoba',
        complecion: 'caramel',
        occupation: 'software Dev'
    },
    {
        firstName: 'Oh',
        lastName: 'baby',
        complecion: 'melanin',
        occupation: 'Sparks Bussiness'
    },
    {
        firstName: 'Clssic',
        lastName: 'Lois',
        complecion: 'light skin',
        occupation: 'face model'
    },

    {
        firstName: 'mae',
        lastName: 'Amara',
        complecion: 'dark',
        occupation: 'model'
    }
]
let content = document.querySelector('.task-3')
arr.forEach(key => {
   let secDiv = document.createElement('div')
    secDiv.innerHTML = (`<p>firstName: ${key.firstName}</p> <p>Last-Name: ${key.lastName}</p> <p>complexion: ${key.complecion}</p><p>occupation: ${key.occupation}</p>`)

    content.appendChild(secDiv)
    console.log(key);
 })
 arr.forEach(item =>{
    
 })