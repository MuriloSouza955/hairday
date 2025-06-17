import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, when}) {
  try {
    //Insere o agendamento no banco de dados
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    //Mensagem de agendamento realizado com sucesso
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possivel agendar, tente novamente mais tarde.");
    throw error;
  }
}
