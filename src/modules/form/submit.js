import dayjs from 'dayjs';

const form =document.querySelector('form');

const selectedDate = document.getElementById('date');

// Define a data atual para o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

//carrega a data atual e Define a data mínima para o campo de data
selectedDate.value = inputToday;

selectedDate.min = inputToday;

form.onsubmit = (event) => { 
    event.preventDefault(); // evita o carregamento da página (default)
    console.log('Formulário enviado!');
}