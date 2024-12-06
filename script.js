    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.getElementById("image-modal");
        const modalImg = document.getElementById("modal-image");
        const closeBtn = document.querySelector(".modal .close");

        // Обработчик для всех кнопок
        document.querySelectorAll(".button").forEach(button => {
            button.addEventListener("click", (e) => {
                const card = e.target.closest(".kinder-card");
                const imgSrc = card.querySelector(".kinder-image").src;

                modal.style.display = "flex";
                modalImg.src = imgSrc;
            });
        });

        // Закрытие модального окна
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Закрытие по клику вне изображения
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
