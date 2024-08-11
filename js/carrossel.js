const initSlider = () => {
    const imageList = document.querySelector(".slide-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slide-wrapper .slide-button");

    // Assumindo que a largura do item é igual a clientWidth da imageList
    const slideWidth = imageList.clientWidth;

    let isScrolling = false;

    const scrollToSlide = (direction) => {
        if (isScrolling) return;
        isScrolling = true;

        // Calcula o novo scrollLeft baseado na direção
        const newScrollLeft = imageList.scrollLeft + direction * slideWidth;
        imageList.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });

        // Reinicia a rolagem após o fim do carrossel
        setTimeout(() => {
            if (imageList.scrollLeft >= imageList.scrollWidth - slideWidth) {
                imageList.scrollTo({ left: 0, behavior: 'smooth' });
            } else if (imageList.scrollLeft <= 0) {
                imageList.scrollTo({ left: imageList.scrollWidth - slideWidth, behavior: 'smooth' });
            }
            isScrolling = false;
        }, 500); // Tempo para garantir que o scroll tenha sido concluído
    };

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            scrollToSlide(direction);
        });
    });

    // Inicializa o carrossel com o scroll no início
    imageList.scrollTo({ left: 0 });
};

window.addEventListener("load", initSlider);
