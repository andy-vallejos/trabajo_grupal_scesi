const form = document.querySelector(".review-form");
const reviewsList = document.querySelector(".reviews-list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const profesor = document.getElementById("profesor").value;
  const materia = document.getElementById("materia").value;
  const comentario = document.getElementById("comentario").value;

  const data = {
    profesor,
    materia,
    comentario,
  };

  try {
    const response = await fetch(
      "https://reviews-api-4yt6.onrender.com/api/reviews/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    window.location.reload();
  } catch (error) {
    console.error("Error:", error);
    alert("Hubo un error al enviar la reseña");
  }
});

async function fetchReviews() {
  try {
    const response = await fetch(
      "https://reviews-api-4yt6.onrender.com/api/reviews/",
    );

    if (!response.ok) {
      throw new Error("Error al obtener reseñas");
    }

    const reviews = await response.json();

    reviewsList.innerHTML = "";

    reviews.forEach((review) => {
      const article = document.createElement("article");
      article.classList.add("review-item");

      article.innerHTML = `
        <header class="review-item-header">
          <hgroup>
            <h4>${review.profesor}</h4>
            <mark class="course-tag">${review.materia}</mark>
          </hgroup>
        </header>
        <p class="review-text">
          ${review.comentario}
        </p>
      `;

      reviewsList.appendChild(article);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchReviews);
