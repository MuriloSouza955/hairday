import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period");

//Gera e vento de click para cada lista (manha, tarde e noite)
periods.forEach((period) => {
  //Captura o evento de click na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtem a li pai do elemento clicado.
      const item = event.target.closest("li");
      // Pega o id do agendamento para remover
      const { id } = item.dataset;

      // Confirma se o usuário deseja cancelar o agendamento
      if (id) {
        const isConfirm = confirm(
          "Você tem certeza que deseja cancelar este agendamento?",
        );
        if (isConfirm) {
          // Chama a função para cancelar o agendamento na API
          await scheduleCancel({ id });
          // Recarrega a lista de agendamentos do dia
          schedulesDay();
        }
      }
    }
  });
});
