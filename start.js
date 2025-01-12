async function fetchAnimeInfo() {
    try {
        let anime;
        let randomAnimeId;
        let url;
        const threeYearsAgo = new Date();
        threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

        do {
            randomAnimeId = Math.floor(Math.random() * 9000) + 45000; // Random ID between 45000 and 54000
            url = `https://api.jikan.moe/v4/anime/${randomAnimeId}?released_at=${threeYearsAgo.toISOString()}`;
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
                continue;
            }
            const data = await response.json();
            anime = data.data;
            console.log(`Fetched anime ID: ${randomAnimeId}, Score: ${anime ? anime.score : 'N/A'}`);
        } while (anime && anime.score <= 6.8);

        if (anime) {
            const animeDetails = document.getElementById('anime-details');
            animeDetails.innerHTML = `
                <h2>${anime.title}</h2>
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <p><strong>Episodes:</strong> ${anime.episodes}</p>
                <p><strong>Score:</strong> ${anime.score}</p>
                <p><strong>Synopsis:</strong> ${anime.synopsis}</p>
            `;
        } else {
            console.error('No anime found with a score above 7');
        }
    } catch (error) {
        console.error('Error fetching anime info:', error);
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}