
// Фильтрация по категориям
document.querySelectorAll('.category').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.post').forEach(post => {
            const category = post.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                post.style.display = 'flex';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

// Поиск по статьям
function searchArticles() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.post').forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase();
        const description = post.querySelector('.post-description').textContent.toLowerCase();
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}
