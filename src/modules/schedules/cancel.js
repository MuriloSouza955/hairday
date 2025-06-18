const periods = document.querySelectorAll(".period");

//Gera e vento de click para cada lista (manha, tarde e noite)
periods.forEach((period) => {
  //Captura o evento de click na lista
  period.addEventListener("click", (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtem a li pai do elemento clicado.
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Você tem certeza que deseja cancelar este agendamento?",
        );
        if (isConfirm) {
          console.log("Remover agendamento");
        }
      }
    }
    //
  });
});
