import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários
  hours.innerHTML = "";

  //Obtém a lista de todos os horarios indisponíveis
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm"),
  );

  // Pega somente a hora, retirando o dminuto.
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    // Adicionar a hora na date e verificar se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    const available = !unavailableHours.includes(hour) && isHourPast;
    //Define se o horario está disponível ou não
    return {
      hour,
      available,
    };
  });

  // Renderiza os horários disponíveis
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    if (hour === "09:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    hours.append(li);
  });
  // Adiciona o evento de clique nos horários
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
