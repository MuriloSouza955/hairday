import dayjs from "dayjs";

//Selecionar as sessões manha, tarde e noite
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    //Limpa as listas
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    //Renderiza os agendamentos por período
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");
      const cancelIcon = document.createElement("img");

      // adicionando o ID do agendamento
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      //Adicionando o item ao DOM
      item.append(time, name, cancelIcon);

      //Obtem a hora
      const hour = dayjs(schedule.when).hour();

      //Renderiza o agendamento no período correto
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("Erro ao exibir os agendamentos.");
    console.log(error);
  }
}
