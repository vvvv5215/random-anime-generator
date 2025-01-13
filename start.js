
const animuids = [
    52991, 5114, 60022, 9253, 38524, 28977, 39486, 9969, 11061, 15417, 820, 41467, 43608, 34096, 42938, 4181, 918, 28851,
    35180, 2904, 15335, 54492, 37491, 19, 51535, 35247, 37987, 58567, 40682, 32281, 49387, 36838, 37510, 31758, 40028, 
    58514, 55690, 32935, 263, 199, 51009, 17074, 47917, 37521, 48583, 56784, 52198, 1, 55255, 2921, 45649, 55016, 50160, 
    44074, 21, 47778, 53223, 39894, 24701, 57864, 56752, 50172, 48569, 54857, 53998, 33095, 1575, 44, 58125, 21939, 33352, 
    245, 40434, 5258, 431, 50399, 164, 33050, 45576, 46102, 457, 34599, 11665, 49413, 23273, 54898, 2001, 35760, 52742, 
    40591, 22135, 1535, 28891, 41084, 57334, 52701, 34591, 42310, 19647, 36862, 55791, 52034, 33, 55823, 4565, 38329, 
    7311, 3786, 37991, 28957, 10379, 49701, 40748, 32983, 31757, 12355, 877, 40456, 28735, 36098, 16498, 7785, 437, 170, 
    40776, 32, 30484, 11741, 40417, 53273, 21329, 5300, 56538, 25777, 35843, 7472, 40664, 578, 12365, 38474, 35839, 4282, 
    801, 205, 31933, 44070, 40834, 11981, 32182, 30276, 37779, 12431, 30654, 3297, 50265, 33049, 44511, 47194, 10165, 
    35737, 38450, 37208, 36649, 6114, 44087, 392, 37379, 57647, 31181, 11577, 36999, 26055, 37105, 49722, 51039, 38000, 
    20583, 55888, 24687, 42203, 50330, 40059, 36538, 38889, 21899, 48561, 40730, 2246, 467, 36885, 38040, 136, 45556, 
    33255, 34612, 25781, 39741, 53236, 36275, 30709, 37999, 55102, 35851, 4921, 35557, 5028, 46095, 50183, 49721, 38475, 
    37515, 37965, 40787, 49310, 14397, 32366, 5, 5205, 5941, 31646, 11979, 9756, 38883, 22789, 53540, 9260, 6945, 39808, 
    49458, 39535, 39551, 56523, 52215, 9617, 39167, 39547, 572, 2251, 185, 777, 49926, 30, 53672, 41025, 46654, 338, 
    50407, 10030, 37095, 55644, 10937, 39587, 31988, 22535, 13601, 10162, 48653, 37822, 20651, 56524, 54595, 12029, 
    28701, 5040, 42984, 2402, 5081, 41457, 42886, 54870, 51805, 34534, 39112, 7655, 2559, 34240, 137, 41487, 1210, 57181, 
    52588, 51440, 17389, 5420, 5341, 40211, 4081, 30230, 3784, 6594, 31043, 39533, 60108, 60108, 10863, 24415, 22507, 
    49571, 12531, 1365, 57, 9989, 57616, 11917, 36371, 6675, 30346, 759, 486, 9735, 45, 43325, 59571, 59571, 52299, 
    38731, 19363, 34798, 25835, 48316, 10534, 38691, 50594, 10087, 43, 1735, 10408, 38826, 32188, 23327, 3002, 2685, 
    513, 264, 2150, 53111, 37520, 13125, 2418, 44940, 1698, 32937, 523, 49918, 31812, 329, 139, 55357, 52578, 37989, 
    35111, 10271, 36990, 44412, 1033, 265, 34036, 51179, 37055, 25681, 28805, 33051, 11843, 37450, 40784, 512, 50602, 
    39247, 45577, 31240, 57067, 55866, 54959, 52684, 35677, 15227, 5690, 11977, 585, 440, 6, 35838, 55809, 53393, 12115, 
    2966, 627, 49596, 38680, 1842, 18115, 16664, 372, 58572, 53127, 37078, 38003, 5460, 38249, 23847, 6811, 35466, 
    16894, 3091, 40052, 9863, 51019, 42897, 44055, 54029, 37171, 40435, 1453, 47794, 19123, 32843, 813, 36946, 38234, 
    49114, 55655, 35110, 34537, 18617, 10800, 22297, 32005, 40729, 40853, 3226, 6864, 1142, 558, 49590, 186, 138, 23623, 
    34636, 57524, 36370, 7791, 32867, 33674, 37514, 39166, 18195, 7674, 38088, 1519, 40911, 49052, 49909, 18, 235, 232, 
    54856, 33323, 4107, 44042, 962, 853, 1889, 49574, 42894, 40852, 47, 48736, 57592, 38481, 1430, 25537, 48549, 49521, 
    50612, 50709, 59841, 56738, 53888, 9890, 28675, 3701, 41361, 30503, 28223, 50325, 34572, 37430, 60048, 31715, 37962, 
    39592, 39792, 4477, 3371, 35857, 731, 721, 11597, 28171, 49053, 55701, 54650, 51335, 25313, 36296, 16662, 40421, 
    1827, 1604, 50380, 239, 50416, 50528, 53411, 29831, 15323, 10153, 20899, 6467, 40542, 14713, 8129, 21469, 18689, 
    15059, 12859, 121, 1364, 32122, 9130, 30370, 1566, 32902, 48661, 30831, 2581, 51122, 2236, 35608, 52826, 6746, 
    16918, 40815, 31051, 6336, 1382, 3702, 46569, 49709, 12069, 339, 302, 51096, 59145, 55911, 52347, 17739, 30364, 
    3016, 23283, 4938, 3901, 2951, 24833, 28025, 59306, 58689, 56653, 54789, 31658, 40080, 4722, 3927, 38081, 42429, 
    39198, 50796, 48895, 10643, 50587, 34076, 135, 32282, 58939, 56980, 53887, 51367, 18661, 36369, 29755, 31251, 
    21419, 35062, 33486, 12189, 3665, 42941, 22145, 1367, 851, 2449, 1471, 51836, 52846, 13759, 23317, 6547, 11771, 
    27833, 4155, 66, 4224, 24277, 44218, 40907, 1486, 1257, 19815, 49320, 237, 38668, 2025, 59150, 59150, 31149, 21557, 
    8425, 1943, 1559, 268, 56063, 54791, 52107, 25013, 38993, 27821, 2164, 2034, 1974, 1506, 4918, 1363, 18679, 889, 
    781, 34822, 227, 41402, 53410, 27989, 72, 6045, 33161, 41781, 4901, 9204, 42640, 44931, 39783, 49430, 49587, 589, 
    34626, 57066, 3783, 44235, 5681, 42923, 14513, 16049, 535, 49782, 153, 50631, 37870, 9963, 81, 27663, 6421, 6211, 
    36456, 2759, 1914, 5365, 1482, 1096, 20, 14813, 57554, 82, 16706, 14807, 40174, 2167, 3167, 48585, 49469, 2563, 
    9656, 7054, 35382, 6171, 39468, 42250, 2004, 4789, 1065, 1023, 846, 2448, 387, 35788, 16, 54915, 34440, 23199, 
    41611, 40716, 31173, 861, 223, 59497, 59497, 52865, 51318, 51180, 7720, 9996, 77, 34376, 27831, 40397, 30015, 7465, 32615, 
    36963, 4672, 48411, 967, 401, 50346, 269, 59077, 42166, 25879, 5029, 33970, 38422, 2890, 42916,
    34240, 40591, 16870, 12413, 51199, 6675, 172, 30654, 48905, 245,37735, 164, 35076, 364, 4985, 621, 988, 20057, 14407, 134, 362, 
    464, 31964, 33031, 21491, 221, 9171, 15911, 16498, 40557, 10097,12189, 32281, 17549, 2025, 820, 10161, 9656, 457, 659, 22147,
    35788, 934, 31812, 29263, 382, 21881, 23421, 52608, 34636, 2992,
    406, 989, 21085, 1482, 33486, 3702, 11933, 568, 42994, 24873,
    11013, 7711, 226, 151, 11739, 43869, 7785, 5420, 853, 33161,
    384, 6114, 1373, 316, 502, 28999, 731, 25681, 139, 13717, 40901,
    4573, 2104, 38710, 9253, 18753, 31043, 51021, 21863, 12069,
    9679, 40573, 18041, 11179, 30240, 11757, 232, 4814, 7647, 11234, 21845, 39163, 40154, 50427, 1694, 4224, 1766, 28591, 6340, 26349, 47125,
    43608, 24699, 18789, 21855, 30952, 15225, 41583, 10182,
    17080, 7088, 45782, 21063, 4845, 14513, 22043, 7890, 5537, 27521, 1401, 1436, 3176, 6072, 48031, 14751, 47778, 3195, 22015, 48390,
    11813, 14227, 1754, 1863, 51162, 34118, 42293, 8310, 25939, 36258, 18553, 13655, 32491, 22199, 21631, 37520, 28295, 31220, 19331,
    731, 4252, 30258, 43233, 43672, 11019, 20709, 24135, 13851, 29315, 46100, 19527, 36703, 3324, 49955, 1952, 4605, 2127, 29757, 38614,
    4489, 38104, 3675, 20379, 4804, 15677, 3713, 5316, 8909, 3065, 21449, 37868, 26191, 1088, 16273, 4872, 4903, 26171, 491, 5094, 43976,
    2991, 24813, 2534, 37582, 3351, 15869, 43073, 30933, 31417, 19191, 2952, 22345, 1574, 34502, 45823, 3428, 24873, 19703, 42382, 39157,
    41927, 11027, 4050, 2458, 3483, 3810, 40174, 27445, 4273, 14227, 31238, 28999, 6096, 3524, 14123, 1833, 16409, 23525, 14087, 15219,
    2452, 1746, 203, 25109, 201, 32123, 46132, 26441, 2417, 23571]
    
    
    
    



console.log(animuids.length);
  

async function fetchAnimeInfo() {
    const loadingElement = document.getElementById('loading');
    const animeDetails = document.getElementById('anime-details');
    loadingElement.style.display = 'block';
    animeDetails.innerHTML = '';

    try {
        let anime;
        let randomAnimeId;
        let url;

        do {
            randomAnimeId = animuids[Math.floor(Math.random() * animuids.length)]; 
            url = `https://api.jikan.moe/v4/anime/${randomAnimeId}`;
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
                continue;
            }
            const data = await response.json();
            anime = data.data;
            console.log(`Fetched anime ID: ${randomAnimeId}, Score: ${anime ? anime.score : 'N/A'}`);
        } while (!anime);

        if (anime) {
            animeDetails.innerHTML = `
                <h2>${anime.title}</h2>
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}" class="anime-image">
                <div class="anime-details">
                    <p><strong>Episodes:</strong> ${anime.episodes}</p>
                    <p><strong>Score:</strong> ${anime.score}</p>
                    <p><strong>Synopsis:</strong> ${anime.synopsis}</p>
                    ${anime.trailer && anime.trailer.url ? `<p><a href="${anime.trailer.url}" target="_blank" class="trailer-link">Watch Trailer</a></p>` : ''}
                </div>
            `;
        } else {
            console.error('No anime found');
        }
    } catch (error) {
        console.error('Error fetching anime info:', error);
    } finally {
        loadingElement.style.display = 'none';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

