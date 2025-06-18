import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

// Define a data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual e Define a data mínima para o campo de data
selectedDate.value = inputToday;

selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault(); // evita o carregamento da página (default)
  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Por favor, preencha o nome do cliente.");
    }

    //Recupera o horário selecionado
    const selectedHour = document.querySelector(".hour-selected");
    if (!selectedHour) {
      return alert("Por favor, selecione um horário disponível.");
    }
    // Recupera somente a hora
    const [hour] = selectedHour.textContent.split(":");

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");
    console.log(when);

    //Gera ID único para o agendamento
    const id = new Date().getTime();

    //Faz o agendamento
    await scheduleNew({
      id,
      name,
      when,
    });
    // Recarrega os agendamentos
    await schedulesDay();

    clientName.value = ""; // Limpa o campo de nome do cliente
  } catch (error) {
    console.error("Não foi possivel enviar o agendamento!");
    console.error(error);
  }
};
