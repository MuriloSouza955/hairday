import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    // Adicionar a hora na date e verificar se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    //Define se o horario está disponível ou não
    return {
      hour,
      available: isHourPast,
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
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
