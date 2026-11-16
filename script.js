const atlasIndex = [
    { title: "Cerf élaphe (Cervus elaphus)", category: "🦌 Mammifères", url: "cerf-elaphe.html", keywords: "cerf biche faon brame sologne mammifere bois harde" },
    { title: "Faune du Loir-et-Cher", category: "Rubrique", url: "faune.html", keywords: "animaux faune mammiferes oiseaux insectes amphibiens reptiles poissons araignees" },
    { title: "Flore du Loir-et-Cher", category: "Rubrique", url: "flore.html", keywords: "plantes fleurs arbres arbustes bruyere fougeres mousses lichens graminees roseaux marais" },
    { title: "Champignons", category: "Rubrique", url: "champignons.html", keywords: "champignons cepes bolets amanites girolles chanterelles russules lactaires polypores morilles" },
    { title: "Espaces Naturels du 41", category: "Rubrique", url: "espaces-naturels.html", keywords: "espaces naturels sologne loire perche cher loir forets reserves etangs" }
];

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const matches = atlasIndex.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.keywords.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            matches.forEach(item => {
                const link = document.createElement('a');
                link.href = item.url;
                link.className = 'search-item';
                link.innerHTML = `<strong>${item.title}</strong><span>${item.category}</span>`;
                searchResults.appendChild(link);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div style="padding: 12px 15px; color: #718096; font-size: 0.9rem;">Aucune espèce trouvée... 🌿</div>';
            searchResults.style.display = 'block';
        }
    });

    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}
