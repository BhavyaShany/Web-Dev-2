// ================== DOM SELECTION ==================
const titleInput = document.querySelector('input[type="text"]');
const dateInput = document.querySelector('input[type="date"]');
const categorySelect = document.querySelector('select');
const descInput = document.querySelector('textarea');

const addBtn = document.querySelector('.primary');
const clearBtn = document.querySelectorAll('.secondary')[0];
const sampleBtn = document.querySelectorAll('.secondary')[1];

const eventsCard = document.querySelector('.card.large');
const emptyText = document.querySelector('.empty-text');


// ================== EVENT CREATION ==================
addBtn.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const date = dateInput.value;
    const category = categorySelect.value;
    const desc = descInput.value.trim();

    if (!title || !date) {
        alert("Please enter event title and date");
        return;
    }

    createEventCard(title, date, category, desc);

    // clear inputs
    titleInput.value = "";
    dateInput.value = "";
    descInput.value = "";
});


// ================== CREATE EVENT CARD ==================
function createEventCard(title, date, category, desc) {
    emptyText.style.display = "none";

    const eventDiv = document.createElement('div');
    eventDiv.className = "event-card";

    eventDiv.innerHTML = `
        <h3>${title}</h3>
        <p class="date">📅 ${date}</p>
        <span class="tag">${category}</span>
        <p class="desc">${desc || "No description"}</p>
        <button class="delete-btn">✖</button>
    `;

    eventsCard.appendChild(eventDiv);
}


// ================== EVENT DELEGATION ==================
eventsCard.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();

        if (document.querySelectorAll('.event-card').length === 0) {
            emptyText.style.display = "block";
        }
    }
});


// ================== CLEAR ALL EVENTS ==================
clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.event-card').forEach(card => card.remove());
    emptyText.style.display = "block";
});


// ================== SAMPLE EVENTS ==================
sampleBtn.addEventListener('click', () => {
    createEventCard("Emifest", "2026-01-14", "Social", "College cultural fest");
    createEventCard("React Workshop", "2026-02-02", "Workshop", "Hands-on React session");
});


// ================== STYLE MANIPULATION ==================
document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('event-card')) {
        e.target.style.transform = "scale(1.02)";
        e.target.style.transition = "0.3s";
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('event-card')) {
        e.target.style.transform = "scale(1)";
    }
});