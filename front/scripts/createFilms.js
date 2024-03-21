const axios = require('axios')

const genres = ["action", "Fantasy", "Comedy", "Drama", "Sci-fi", "Terror", "Adventure"]

const btnSubmit = document.getElementById('btnSubmit')
const btnCleaner = document.getElementById('btnCleaner')
const options = document.getElementById('options')
const title = document.getElementById('title');
const year = document.getElementById('year');
const director = document.getElementById('director');
const duration = document.getElementById('duration');
const genre = document.getElementById('genre');
const rate = document.getElementById('rate');
const poster = document.getElementById('poster');

function renderGenres() {
    options.innerHTML = ''

    for (const genre of genres) {
        const input = document.createElement("input")
        const label = document.createElement("label")

        input.type = "checkbox"
        input.id = genre
        input.name = "genre[]"
        input.value = genre

        label.htmlFor = genre
        label.textContent = genre;

        options.appendChild(input)
        options.appendChild(label)

        
    }
    return options;
}

renderGenres()

function validateCheckboxes(){
    document.querySelectorAll('input [name="genre[]"]')



for (const item of checkboxes) {
    if(item.checked){
        item.classList.add("selected")
        return true;
    }
}
}


function handlerSubmit(event) {
    event.preventDefault()
    const genres = validateCheckboxes()

    if (![title.value, year.value, director.value, duration.value, rate.value, poster.value].every (Boolean)) return alert("Faltan llenar campos") 
         return alert("Pelicula enviada")
    }
    
    function cleanInputs(){
        title.value = ''
        year.value = ''
        director.value = ''
        duration.value =''
        rate.value =''
        poster.value=''

        const checkboxes = document.querySelectorAll('input [name="genre[]"]')
        for (const item of checkboxes) {
            item.checked = false;
            item.classList.remove('selected')
        }


    }

    btnSubmit.addEventListener('click',handlerSubmit)
    btnCleaner.addEventListener('click', cleanInputs)