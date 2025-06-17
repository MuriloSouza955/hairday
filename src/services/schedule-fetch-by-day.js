import { apiConfig } from "./api-config.js";
import dayjs from "dayjs";

export async function scheduleFetchByDay({ date }) {
  try {
    //fazendo a requisição para o banco de dados
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    //Convertendo apra JSON.
    const data = await response.json();

    //Filtrando os agendamentos pela data
    const dailySchedule = data.filter((daylySchedule) =>
      dayjs(date).isSame(daylySchedule.when, "day")
    );

    return dailySchedule;
  } catch (error) {
    console.log(error);
    alert("Não foi possivel carregar os agendamentos");
  }
}
