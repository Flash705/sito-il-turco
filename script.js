function openMenu() {
    document.getElementById("overlayMenu").style.display = "flex";
}

function closeMenu() {
    document.getElementById("overlayMenu").style.display = "none";
}

function goTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    closeMenu();
}

function showCategory(cat) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".menu-category").forEach(c => c.style.display = "none");

    document.querySelector(`.tab[data-cat="${cat}"]`).classList.add("active");
    document.getElementById(`cat-${cat}`).style.display = "block";
}

function toggleFaq(item) {
    const body = item.querySelector(".faq-body");
    const icon = item.querySelector(".faq-icon");

    if (body.style.display === "block") {
        body.style.display = "none";
        icon.textContent = "+";
    } else {
        body.style.display = "block";
        icon.textContent = "-";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showCategory("grill");

    const form = document.getElementById("bookingForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const msg = `
Prenotazione:
Data: ${document.getElementById("date").value}
Orario: ${document.getElementById("time").value}
Nome: ${document.getElementById("name").value} ${document.getElementById("surname").value}
Telefono: ${document.getElementById("phone").value}
Persone: ${document.getElementById("people").value}
Note: ${document.getElementById("notes").value || "Nessuna"}
        `;

        const url = "https://wa.me/393000000000?text=" + encodeURIComponent(msg);
        window.open(url, "_blank");
    });
});
