let currentPage = 1;
const totalPages = 5;

function showPage(page) {
    for (let i = 1; i <= totalPages; i++) {
        document.getElementById('page' + i).classList.remove('active');
    }
    document.getElementById('page' + page).classList.add('active');
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}
