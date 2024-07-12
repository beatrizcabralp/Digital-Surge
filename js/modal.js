export default function initServicoModal() {
    // Pegar todas as imagens com a classe card-img
    var images = document.querySelectorAll(".card-img");

    // Adicionar evento de clique para cada imagem
    images.forEach(function (img) {
        img.onclick = function () {
            var modalId = this.getAttribute("data-modal");
            var modal = document.getElementById(modalId);
            modal.style.display = "block";
        }
    });

    // Pegar todos os elementos <span> que fecham o modal
    var spans = document.getElementsByClassName("close");

    // Adicionar evento de clique para fechar o modal
    Array.prototype.forEach.call(spans, function (span) {
        span.onclick = function () {
            var modal = this.closest(".modal");
            modal.style.display = "none";
        }
    });

    // Fechar o modal se o usuário clicar fora dele
    window.onclick = function (event) {
        var modals = document.querySelectorAll(".modal");
        modals.forEach(function (modal) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
}
