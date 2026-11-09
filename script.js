const STORAGE_KEYS = {
    player: "englishQuestPlayer",
    xp: "englishQuestXP",
    completed: "englishQuestCompleted",
    best: "englishQuestBest" // kunci untuk menyimpan skor terbaik tiap level
};


// ==========================================
// DATA LEVEL
// ==========================================

const levels = [

    // ==========================================
    // LEVEL 1
    // ==========================================

    {
        name: "VOCABULARY",
        icon: "📚",

        questions: [

            {
                question: "Which word means 'rumah'?",
                emoji: "🏠",
                answers: ["House", "School", "Market", "Garden"],
                correct: 0
            },

            {
                question: "Which one is a color?",
                emoji: "🎨",
                answers: ["Blue", "Chair", "Tiger", "Bread"],
                correct: 0
            },

            {
                question: "Which word means 'buku'?",
                emoji: "📖",
                answers: ["Book", "Bag", "Door", "Table"],
                correct: 0
            },

            {
                question: "Which word means 'sekolah'?",
                emoji: "🏫",
                answers: ["School", "Kitchen", "River", "Cloud"],
                correct: 0
            },

            {
                question: "Which one is a greeting?",
                emoji: "👋",
                answers: ["Hello", "Pencil", "Window", "Apple"],
                correct: 0
            },

            {
                question: "What do we use to drink water?",
                emoji: "🥤",
                answers: ["Glass", "Shoes", "Book", "Pencil"],
                correct: 0
            }

        ]
    },


    // ==========================================
    // LEVEL 2
    // ==========================================

    {
        name: "ANIMALS",
        icon: "🐯",

        questions: [

            {
                question: "Which animal says 'meow'?",
                emoji: "🐱",
                answers: ["Dog", "Cat", "Cow", "Lion"],
                correct: 1
            },

            {
                question: "Who is the king of the jungle?",
                emoji: "🦁",
                answers: ["Lion", "Rabbit", "Fish", "Horse"],
                correct: 0
            },

            {
                question: "Which animal can fly?",
                emoji: "🪽",
                answers: ["Bird", "Tiger", "Elephant", "Cow"],
                correct: 0
            },

            {
                question: "Which animal lives in water?",
                emoji: "🐟",
                answers: ["Fish", "Cat", "Chicken", "Monkey"],
                correct: 0
            },

            {
                question: "Which animal is the largest land animal?",
                emoji: "🐘",
                answers: ["Elephant", "Mouse", "Frog", "Duck"],
                correct: 0
            },

            {
                question: "Which animal lives in the ocean?",
                emoji: "🌊",
                answers: ["Lion", "Fish", "Horse", "Chicken"],
                correct: 1
            }

        ]
    },


    // ==========================================
    // LEVEL 3
    // ==========================================

    {
        name: "FRUITS",
        icon: "🍎",

        questions: [

            {
                question: "Which one is an apple?",
                emoji: "🍎",
                answers: ["Apple", "Car", "Cat", "Book"],
                correct: 0
            },

            {
                question: "Which fruit is yellow and long?",
                emoji: "🍌",
                answers: ["Orange", "Banana", "Grape", "Watermelon"],
                correct: 1
            },

            {
                question: "Which fruit is orange?",
                emoji: "🍊",
                answers: ["Orange", "Pear", "Kiwi", "Mango"],
                correct: 0
            },

            {
                question: "Which fruit is red and small?",
                emoji: "🍓",
                answers: ["Strawberry", "Coconut", "Pineapple", "Avocado"],
                correct: 0
            },

            {
                question: "Which fruit is green outside and red inside?",
                emoji: "🍉",
                answers: ["Watermelon", "Lemon", "Cherry", "Peach"],
                correct: 0
            },

            {
                question: "Which fruit is usually orange?",
                emoji: "🍊",
                answers: ["Orange", "Grape", "Banana", "Apple"],
                correct: 0
            }

        ]
    },


    // ==========================================
    // LEVEL 4
    // ==========================================

    {
        name: "VEHICLES",
        icon: "🚗",

        questions: [

            {
                question: "Which vehicle has two wheels?",
                emoji: "🏍️",
                answers: ["Motorcycle", "Bus", "Train", "Boat"],
                correct: 0
            },

            {
                question: "Which vehicle travels on rails?",
                emoji: "🚆",
                answers: ["Train", "Car", "Plane", "Bicycle"],
                correct: 0
            },

            {
                question: "Which vehicle flies?",
                emoji: "✈️",
                answers: ["Airplane", "Bus", "Ship", "Taxi"],
                correct: 0
            },

            {
                question: "Which vehicle sails on water?",
                emoji: "🚢",
                answers: ["Ship", "Truck", "Helicopter", "Scooter"],
                correct: 0
            },

            {
                question: "Which vehicle has four wheels and is used by families?",
                emoji: "🚙",
                answers: [
                    "Car",
                    "Rocket",
                    "Submarine",
                    "Hot air balloon"
                ],
                correct: 0
            },

            {
                question: "Which vehicle travels on water?",
                emoji: "🚢",
                answers: ["Boat", "Car", "Train", "Bicycle"],
                correct: 0
            }

        ]
    },


    // ==========================================
    // ⭐ LEVEL 5
    // ==========================================

    {
        name: "ENGLISH CHALLENGE",
        icon: "🏆",

        questions: [

            {
                question: "Choose the correct sentence.",
                emoji: "📝",
                answers: [
                    "She don't like apples.",
                    "She doesn't like apples.",
                    "She doesn't likes apples.",
                    "She not like apples."
                ],
                correct: 1
            },

            {
                question: "By the time I arrived, she ___ already left.",
                emoji: "⏰",
                answers: [
                    "has",
                    "have",
                    "had",
                    "having"
                ],
                correct: 2
            },

            {
                question: "If I ___ you, I would study harder.",
                emoji: "📚",
                answers: [
                    "am",
                    "was",
                    "were",
                    "be"
                ],
                correct: 2
            },

            {
                question: "What is the past tense of 'go'?",
                emoji: "🚶",
                answers: [
                    "Goed",
                    "Gone",
                    "Went",
                    "Going"
                ],
                correct: 2
            },

            {
                question: "She has ___ her homework.",
                emoji: "📖",
                answers: [
                    "finish",
                    "finished",
                    "finishing",
                    "finishes"
                ],
                correct: 1
            },

            {
                question: "Which sentence is correct?",
                emoji: "🏆",
                answers: [
                    "He can plays football.",
                    "He can playing football.",
                    "He can play football.",
                    "He can played football."
                ],
                correct: 2
            }

        ]
    },


    // ==========================================
    // LEVEL 6
    // ==========================================

    {
        name: "FAMILY & JOBS",
        icon: "👨‍👩‍👧",

        questions: [

            {
                question: "Which word means 'ibu'?",
                emoji: "👩",
                answers: ["Mother", "Father", "Brother", "Uncle"],
                correct: 0
            },

            {
                question: "Your father's brother is your ___.",
                emoji: "👨",
                answers: ["Uncle", "Cousin", "Grandfather", "Nephew"],
                correct: 0
            },

            {
                question: "Which word means 'kakek'?",
                emoji: "👴",
                answers: ["Uncle", "Cousin", "Grandfather", "Brother"],
                correct: 2
            },

            {
                question: "Your mother's mother is your ___.",
                emoji: "👵",
                answers: ["Aunt", "Sister", "Grandmother", "Daughter"],
                correct: 2
            },

            {
                question: "Which word means 'saudara laki-laki'?",
                emoji: "👦",
                answers: ["Sister", "Brother", "Cousin", "Parent"],
                correct: 1
            },

            {
                question: "Who teaches students at school?",
                emoji: "👩‍🏫",
                answers: ["Farmer", "Driver", "Teacher", "Chef"],
                correct: 2
            }

        ]
    },


    // ==========================================
    // LEVEL 7
    // ==========================================

    {
        name: "DAILY LIFE",
        icon: "🌅",

        questions: [

            {
                question: "Which word means 'sarapan'?",
                emoji: "🍳",
                answers: ["Breakfast", "Dinner", "Snack", "Homework"],
                correct: 0
            },

            {
                question: "I brush my ___ before bed.",
                emoji: "🪥",
                answers: ["Hands", "Teeth", "Shoes", "Book"],
                correct: 1
            },

            {
                question: "Which word means 'tidur'?",
                emoji: "😴",
                answers: ["Run", "Cook", "Sleep", "Read"],
                correct: 2
            },

            {
                question: "We usually go to ___ when we are sleepy.",
                emoji: "🛏️",
                answers: ["Market", "School", "Park", "Bed"],
                correct: 3
            },

            {
                question: "Which word means 'makan malam'?",
                emoji: "🍽️",
                answers: ["Breakfast", "Lunch", "Dinner", "Snack"],
                correct: 2
            },

            {
                question: "What do we use to know the time?",
                emoji: "⌚",
                answers: ["Clock", "Spoon", "Pillow", "Bicycle"],
                correct: 0
            }

        ]
    },


    // ==========================================
    // LEVEL 8
    // ==========================================

    {
        name: "GRAMMAR MASTER",
        icon: "👑",

        questions: [

            {
                question: "She ___ to school every day.",
                emoji: "🏫",
                answers: ["go", "goes", "going", "gone"],
                correct: 1
            },

            {
                question: "They ___ playing football now.",
                emoji: "⚽",
                answers: ["is", "am", "are", "be"],
                correct: 2
            },

            {
                question: "We ___ pizza last night.",
                emoji: "🍕",
                answers: ["eat", "ate", "eaten", "eating"],
                correct: 1
            },

            {
                question: "She has ___ umbrella.",
                emoji: "🌂",
                answers: ["a", "an", "many", "much"],
                correct: 1
            },

            {
                question: "He is taller ___ his brother.",
                emoji: "📏",
                answers: ["than", "then", "that", "as"],
                correct: 0
            },

            {
                question: "I have lived here ___ 2020.",
                emoji: "🏠",
                answers: ["for", "ago", "since", "during"],
                correct: 2
            }

        ]
    }

];


// ==========================================
// VARIABEL GAME
// ==========================================

let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

let totalXP = Number(
    localStorage.getItem(STORAGE_KEYS.xp) || 0
);

let completedLevels = JSON.parse(
    localStorage.getItem(
        STORAGE_KEYS.completed
    ) || "[]"
);

// skor terbaik tiap level, contoh { "0": 500, "1": 300 }
let bestScores = JSON.parse(
    localStorage.getItem(
        STORAGE_KEYS.best
    ) || "{}"
);

// posisi jawaban benar setelah pilihan diacak
let correctIndex = 0;


// ==========================================
// BARU: PROFIL - PENGATURAN
// ==========================================

const PROFILE_KEY = "englishQuestProfile"; // Kunci penyimpanan profil di browser
const XP_PER_LEVEL = 500; // Setiap 500 XP naik 1 level pemain

const AVATARS = ["🎓", "🦊", "🐼", "🦁", "🐯", "🐸", "🐵", "🦄", "🐧", "🤖", "👽", "🐲"]; // Pilihan avatar

const BANNERS = [ // Pilihan warna banner
    { name: "Laut", css: "linear-gradient(90deg, #08bcd6, #197cf2, #7036e7)" },
    { name: "Senja", css: "linear-gradient(90deg, #ff9a3c, #ff5d7a, #a44cff)" },
    { name: "Hutan", css: "linear-gradient(90deg, #43b85b, #1fa3a3, #168cff)" },
    { name: "Permen", css: "linear-gradient(90deg, #ff7eb3, #ffb86b, #ffe66b)" }
];

const RANKS = [ // Pangkat berdasarkan level pemain
    { minLevel: 1, title: "Newbie Explorer", icon: "🌱" },
    { minLevel: 2, title: "Word Explorer", icon: "🧭" },
    { minLevel: 4, title: "Grammar Scholar", icon: "📘" },
    { minLevel: 6, title: "English Master", icon: "🎯" },
    { minLevel: 9, title: "Quest Legend", icon: "👑" }
];

const BADGES = [ // Daftar lencana dan syarat mendapatkannya
    { id: "first", icon: "🥇", name: "First Step", desc: "Selesaikan 1 level", check: (c) => c.completed >= 1 },
    { id: "five", icon: "🧭", name: "Explorer", desc: "Selesaikan 5 level", check: (c) => c.completed >= 5 },
    { id: "all", icon: "👑", name: "Quest Master", desc: "Selesaikan semua level", check: (c) => c.completed >= c.totalLevels },
    { id: "perfect", icon: "💎", name: "Perfectionist", desc: "Raih 1 Perfect Quest", check: (c) => c.stats.perfect >= 1 },
    { id: "perfect3", icon: "🌟", name: "Triple Perfect", desc: "Raih 3 Perfect Quest", check: (c) => c.stats.perfect >= 3 },
    { id: "xp1000", icon: "⚡", name: "XP Hunter", desc: "Kumpulkan 1000 XP", check: (c) => c.xp >= 1000 },
    { id: "xp3000", icon: "🔥", name: "XP Legend", desc: "Kumpulkan 3000 XP", check: (c) => c.xp >= 3000 },
    { id: "games10", icon: "🎮", name: "Dedicated", desc: "Mainkan 10 level", check: (c) => c.stats.games >= 10 },
    { id: "sharp", icon: "🧠", name: "Sharp Mind", desc: "Akurasi 80%+ (min. 20 soal)", check: (c) => c.stats.questions >= 20 && c.accuracy >= 80 }
];


// ==========================================
// BARU: PROFIL - FUNGSI BANTUAN
// ==========================================

function escapeHTML(text) { // Mengamankan teks agar tidak dibaca sebagai kode HTML
    return String(text).replace(/[&<>"']/g, (ch) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));
}

function accuracyOf(stats) { // Menghitung persen jawaban benar
    return stats.questions ? Math.round((stats.correct / stats.questions) * 100) : 0;
}

function earnedBadgeIds(stats) { // Mengambil daftar id lencana yang sudah memenuhi syarat
    const context = {
        xp: totalXP,
        completed: completedLevels.length,
        totalLevels: levels.length,
        stats: stats,
        accuracy: accuracyOf(stats)
    };
    return BADGES.filter((badge) => badge.check(context)).map((badge) => badge.id);
}

function getLevelInfo(xp) { // Menghitung level pemain, progres, dan pangkat dari XP
    const level = Math.floor(xp / XP_PER_LEVEL) + 1;
    const into = xp % XP_PER_LEVEL;
    const rank = [...RANKS].reverse().find((r) => level >= r.minLevel);
    return { level, into, percent: (into / XP_PER_LEVEL) * 100, rank };
}

function starsFor(levelIndex) { // Menghitung bintang dari skor terbaik level
    const best = bestScores[levelIndex];
    if (best === undefined) {
        return 0;
    }
    const max = levels[levelIndex].questions.length * 100;
    return best === max ? 3 : best >= max * 0.6 ? 2 : 1;
}

function showToast(message) { // Menampilkan notifikasi kecil di bawah layar
    let box = document.getElementById("toastBox");
    if (!box) {
        box = document.createElement("div");
        box.id = "toastBox";
        document.body.appendChild(box);
    }
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    box.appendChild(toast);
    setTimeout(() => toast.classList.add("hide"), 3000);
    setTimeout(() => toast.remove(), 3400);
}


// ==========================================
// BARU: PROFIL - SIMPAN DAN MUAT
// ==========================================

function saveProfile(data) { // Menyimpan profil ke browser
    localStorage.setItem(PROFILE_KEY, JSON.stringify(data));
}

function loadProfile() { // Memuat profil, atau membuat baru jika belum ada
    let saved = null;
    try {
        saved = JSON.parse(localStorage.getItem(PROFILE_KEY));
    } catch (error) {
        saved = null;
    }
    if (saved && saved.stats) {
        return saved;
    }
    const fresh = {
        avatar: "🎓",
        bio: "",
        banner: 0,
        joined: Date.now(),
        stats: { games: 0, correct: 0, questions: 0, perfect: 0 },
        badgesSeen: []
    };
    fresh.badgesSeen = earnedBadgeIds(fresh.stats); // Lencana lama tidak memicu notifikasi
    saveProfile(fresh);
    return fresh;
}

let profile = loadProfile(); // Data profil yang sedang dipakai

function applyIdentity() { // Memasang avatar di topbar
    const avatar = document.getElementById("topAvatar");
    if (avatar) {
        avatar.textContent = profile.avatar;
    }
}


// ==========================================
// BARU: PROFIL - GAMBAR HALAMAN PROFIL
// ==========================================

function renderProfile() {
    const name = localStorage.getItem(STORAGE_KEYS.player) || "Player";
    const info = getLevelInfo(totalXP);
    const s = profile.stats;
    const earned = earnedBadgeIds(s);
    const banner = BANNERS[profile.banner] || BANNERS[0];
    const joinedText = new Date(profile.joined).toLocaleDateString("id-ID", {
        day: "numeric", month: "long", year: "numeric"
    });
    const dayCount = Math.floor((Date.now() - profile.joined) / 86400000) + 1;

    const statList = [
        ["⭐", totalXP, "Total XP"],
        ["🗺️", completedLevels.length + " / " + levels.length, "Level selesai"],
        ["🎯", accuracyOf(s) + "%", "Akurasi jawaban"],
        ["🎮", s.games, "Level dimainkan"],
        ["✅", s.correct, "Jawaban benar"],
        ["🏆", s.perfect, "Perfect Quest"]
    ];

    const statsHTML = statList.map(([icon, value, label]) => `
        <div class="stat-card"><span>${icon}</span><strong>${value}</strong><small>${label}</small></div>
    `).join("");

    const avatarsHTML = AVATARS.map((emoji) => `
        <button type="button" class="avatar-option${emoji === profile.avatar ? " selected" : ""}" data-avatar="${emoji}">${emoji}</button>
    `).join("");

    const bannersHTML = BANNERS.map((b, i) => `
        <button type="button" class="banner-option${i === profile.banner ? " selected" : ""}" data-banner="${i}" title="${b.name}" style="background: ${b.css}"></button>
    `).join("");

    const badgesHTML = BADGES.map((badge) => {
        const ok = earned.includes(badge.id);
        return `
            <div class="badge${ok ? "" : " locked"}">
                <span>${ok ? badge.icon : "🔒"}</span>
                <b>${badge.name}</b>
                <small>${badge.desc}</small>
            </div>
        `;
    }).join("");

    const recordsHTML = levels.map((lvl, i) => {
        const best = bestScores[i];
        const stars = starsFor(i);
        const scoreText = best === undefined
            ? "Belum dimainkan"
            : "⭐".repeat(stars) + "☆".repeat(3 - stars) + " · " + best + " poin";
        return `
            <div class="record-row">
                <div><span class="record-icon">${lvl.icon}</span> <b>LEVEL ${i + 1}</b> · ${lvl.name}</div>
                <div class="record-score">${scoreText}</div>
            </div>
        `;
    }).join("");

    document.getElementById("profilePage").innerHTML = `
        <header class="topbar">
            <button class="back-button" id="backFromProfile" type="button">← MAP</button>
            <div class="brand">👤 PROFIL PETUALANG</div>
            <span class="xp">⭐ ${totalXP} XP</span>
        </header>

        <main class="profile-container">

            <section class="profile-card profile-hero">
                <div class="profile-banner" id="profileBanner" style="background: ${banner.css}"></div>
                <div class="profile-hero-body">
                    <div class="profile-avatar" id="profileAvatar">${profile.avatar}</div>
                    <div class="profile-identity">
                        <h2 class="profile-name">${escapeHTML(name)}</h2>
                        <p class="profile-rank">${info.rank.icon} ${info.rank.title}</p>
                        <p class="profile-bio">${profile.bio ? escapeHTML(profile.bio) : "Belum ada motto. Tulis di bawah ya! ✏️"}</p>
                        <p class="profile-since">📅 Bergabung ${joinedText} · Hari ke-${dayCount}</p>
                    </div>
                    <div class="profile-level-pill">LV ${info.level}</div>
                </div>
            </section>

            <section class="profile-card">
                <h3>📈 Progres Level</h3>
                <p class="xp-caption">${info.into} / ${XP_PER_LEVEL} XP menuju Level ${info.level + 1}</p>
                <div class="xp-track"><div class="xp-fill" style="width: ${info.percent}%"></div></div>
            </section>

            <section class="profile-card">
                <h3>📊 Statistik</h3>
                <div class="stat-grid">${statsHTML}</div>
            </section>

            <section class="profile-card">
                <h3>🏅 Lencana (${earned.length} / ${BADGES.length})</h3>
                <div class="badge-grid">${badgesHTML}</div>
            </section>

            <section class="profile-card">
                <h3>🗺️ Rekor Tiap Level</h3>
                ${recordsHTML}
            </section>

            <section class="profile-card">
                <h3>✏️ Ubah Profil</h3>

                <div class="profile-field">
                    <label>Avatar</label>
                    <div class="avatar-grid">${avatarsHTML}</div>
                </div>

                <div class="profile-field">
                    <label>Warna Banner</label>
                    <div class="banner-grid">${bannersHTML}</div>
                </div>

                <div class="profile-field">
                    <label for="editName">Nama</label>
                    <input type="text" id="editName" maxlength="20" autocomplete="off" value="${escapeHTML(name)}">
                </div>

                <div class="profile-field">
                    <label for="editBio">Motto</label>
                    <textarea id="editBio" rows="2" maxlength="80" placeholder="Contoh: Belajar sedikit tiap hari!">${escapeHTML(profile.bio)}</textarea>
                </div>

                <button class="game-button" id="saveProfileButton" type="button">💾 SIMPAN PROFIL</button>
            </section>

        </main>
    `;

    bindProfileEvents();
}


// ==========================================
// BARU: PROFIL - TOMBOL DI HALAMAN PROFIL
// ==========================================

function bindProfileEvents() {
    document.getElementById("backFromProfile").addEventListener("click", backToGame);

    document.querySelectorAll("[data-avatar]").forEach((button) => { // Klik avatar langsung tersimpan
        button.addEventListener("click", () => {
            profile.avatar = button.dataset.avatar;
            saveProfile(profile);
            document.getElementById("profileAvatar").textContent = profile.avatar;
            document.querySelectorAll("[data-avatar]").forEach((b) => {
                b.classList.toggle("selected", b === button);
            });
            applyIdentity();
        });
    });

    document.querySelectorAll("[data-banner]").forEach((button) => { // Klik banner langsung tersimpan
        button.addEventListener("click", () => {
            profile.banner = Number(button.dataset.banner);
            saveProfile(profile);
            document.getElementById("profileBanner").style.background = BANNERS[profile.banner].css;
            document.querySelectorAll("[data-banner]").forEach((b) => {
                b.classList.toggle("selected", b === button);
            });
        });
    });

    document.getElementById("saveProfileButton").addEventListener("click", () => { // Simpan nama dan motto
        const newName = document.getElementById("editName").value.trim();
        if (newName === "") {
            showToast("⚠️ Nama tidak boleh kosong");
            return;
        }

        localStorage.setItem(STORAGE_KEYS.player, newName);
        document.getElementById("playerName").textContent = newName;
        document.getElementById("welcomeName").textContent = newName.toUpperCase();
        document.getElementById("playerInput").value = newName;

        profile.bio = document.getElementById("editBio").value.trim();
        saveProfile(profile);

        const y = window.scrollY;
        renderProfile();
        window.scrollTo(0, y);
        showToast("✅ Profil tersimpan!");
    });
}

function openProfile() { // Membuka halaman profil
    renderProfile();
    showPage("profilePage");
    window.scrollTo(0, 0);
}


// ==========================================
// GANTI HALAMAN
// ==========================================

function showPage(id) {

    document
        .querySelectorAll(".page")
        .forEach((page) => {

            page.classList.remove("active");

        });

    document
        .getElementById(id)
        .classList.add("active");
}


// ==========================================
// TAMPILKAN MAP LEVEL
// ==========================================

function renderMap() {

    const container =
        document.getElementById("levels");

    container.innerHTML = "";


    levels.forEach((level, index) => {

        const unlocked =
            index === 0 ||
            completedLevels.includes(
                index - 1
            );


        const done =
            completedLevels.includes(index);


        const button =
            document.createElement("button");


        button.className =
            "level-card" +
            (done ? " done" : "");


        button.type = "button";


        button.disabled = !unlocked;


        button.innerHTML = `
            <span>
                ${unlocked ? level.icon : "🔒"}
            </span>

            <b>LEVEL ${index + 1}</b>

            <small>
                ${level.name}
            </small>

            <em class="level-status">
                ${
                    done
                        ? "★ Selesai · Main lagi"
                        : unlocked
                            ? "Siap dimainkan"
                            : "Terkunci"
                }
            </em>
        `;


        if (unlocked) {

            button.addEventListener(
                "click",
                () => startQuiz(index)
            );

        }


        container.appendChild(button);

    });
}


// ==========================================
// MULAI GAME
// ==========================================

function startGame() {

    const input =
        document.getElementById(
            "playerInput"
        );


    const name =
        input.value.trim();


    const message =
        document.getElementById(
            "nameMessage"
        );


    if (name === "") {

        message.textContent =
            "⚠️ Masukkan nama kamu terlebih dahulu!";

        input.focus();

        return;
    }


    localStorage.setItem(
        STORAGE_KEYS.player,
        name
    );


    document.getElementById(
        "playerName"
    ).textContent = name;


    document.getElementById(
        "welcomeName"
    ).textContent =
        name.toUpperCase();


    document.getElementById(
        "xp"
    ).textContent = totalXP;


    applyIdentity(); // BARU: PROFIL - pasang avatar di topbar


    renderMap();


    showPage("gamePage");
}


// ==========================================
// MULAI QUIZ
// ==========================================

function startQuiz(level) {

    currentLevel = level;

    currentQuestion = 0;

    score = 0;


    document.getElementById(
        "levelTitle"
    ).textContent =
        levels[level].name;


    document.getElementById(
        "questionTotal"
    ).textContent =
        levels[level]
            .questions.length;


    showPage("quizPage");


    renderQuestion();
}


// ==========================================
// ACAK URUTAN ISI ARRAY
// ==========================================

function shuffle(list) {

    const result = [...list];


    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [result[i], result[j]] =
            [result[j], result[i]];

    }


    return result;
}


// ==========================================
// TAMPILKAN SOAL
// ==========================================

function renderQuestion() {

    const data =
        levels[currentLevel]
            .questions[currentQuestion];


    const total =
        levels[currentLevel]
            .questions.length;


    document.getElementById(
        "questionEmoji"
    ).textContent =
        data.emoji;


    document.getElementById(
        "questionText"
    ).textContent =
        data.question;


    document.getElementById(
        "quizScore"
    ).textContent =
        score;


    document.getElementById(
        "questionNumber"
    ).textContent =
        currentQuestion + 1;


    document.getElementById(
        "progressBar"
    ).style.width =
        ((currentQuestion + 1) / total) * 100 +
        "%";


    const answers =
        document.getElementById(
            "answers"
        );


    answers.innerHTML = "";


    // acak pilihan jawaban, lalu catat posisi jawaban yang benar
    const options = shuffle(
        data.answers.map(
            (text, i) => ({
                text: text,
                isCorrect: i === data.correct
            })
        )
    );

    correctIndex = options.findIndex(
        (option) => option.isCorrect
    );


    options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer";


            button.type = "button";


            button.textContent =
                String.fromCharCode(
                    65 + index
                ) +
                ". " +
                option.text;


            button.addEventListener(
                "click",
                () =>
                    checkAnswer(
                        index,
                        button
                    )
            );


            answers.appendChild(
                button
            );

        }
    );
}


// ==========================================
// CEK JAWABAN
// ==========================================

function checkAnswer(
    selected,
    clickedButton
) {

    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(
        (button) => {

            button.disabled = true;

        }
    );


    // dibandingkan dengan correctIndex (posisi setelah diacak)
    if (
        selected === correctIndex
    ) {

        clickedButton.classList.add(
            "correct"
        );

        score += 100;

    } else {

        clickedButton.classList.add(
            "wrong"
        );


        buttons[correctIndex]
            .classList.add(
                "correct"
            );

    }


    document.getElementById(
        "quizScore"
    ).textContent =
        score;


    setTimeout(
        () => {

            currentQuestion += 1;


            if (
                currentQuestion <
                levels[currentLevel]
                    .questions.length
            ) {

                renderQuestion();

            } else {

                finishLevel();

            }

        },
        800
    );
}


// ==========================================
// SELESAI LEVEL
// ==========================================

function finishLevel() {

    const maxScore =
        levels[currentLevel]
            .questions.length * 100;


    let stars;


    if (score === maxScore) {

        stars = 3;

    } else if (
        score >= maxScore * 0.6
    ) {

        stars = 2;

    } else {

        stars = 1;

    }


    // BARU: PROFIL - catat statistik level yang baru selesai
    profile.stats.games += 1;

    profile.stats.questions += levels[currentLevel].questions.length;

    profile.stats.correct += score / 100;

    if (score === maxScore) {

        profile.stats.perfect += 1;

    }


    // XP hanya bertambah kalau skor mengalahkan rekor lama
    const bestBefore =
        bestScores[currentLevel] || 0;

    const gainedXP = Math.max(
        0,
        score - bestBefore
    );


    if (score > bestBefore) {

        bestScores[currentLevel] = score;

        localStorage.setItem(
            STORAGE_KEYS.best,
            JSON.stringify(bestScores)
        );

    }


    totalXP += gainedXP;


    localStorage.setItem(
        STORAGE_KEYS.xp,
        String(totalXP)
    );


    if (
        !completedLevels.includes(
            currentLevel
        )
    ) {

        completedLevels.push(
            currentLevel
        );


        localStorage.setItem(
            STORAGE_KEYS.completed,
            JSON.stringify(
                completedLevels
            )
        );

    }


    // BARU: PROFIL - cek lencana baru (setelah XP dan level selesai dihitung)
    const earnedNow = earnedBadgeIds(profile.stats);

    const freshBadges = earnedNow.filter(
        (id) => !profile.badgesSeen.includes(id)
    );

    profile.badgesSeen = [
        ...new Set([...profile.badgesSeen, ...earnedNow])
    ];

    saveProfile(profile);

    freshBadges.forEach((id, i) => {

        const badge = BADGES.find((b) => b.id === id);

        setTimeout(
            () => showToast("🏅 Lencana baru: " + badge.icon + " " + badge.name),
            i * 1200
        );

    });


    document.getElementById(
        "finalScore"
    ).textContent =
        score;


    // catatan XP baru / skor terbaik di halaman hasil
    document.getElementById(
        "resultXP"
    ).textContent =
        gainedXP > 0
            ? "+" + gainedXP + " XP baru!"
            : "Skor terbaikmu: " +
              bestScores[currentLevel] +
              " — kalahkan rekor untuk dapat XP baru";


    document.getElementById(
        "resultStars"
    ).textContent =
        "⭐".repeat(stars);


    document.getElementById(
        "resultTitle"
    ).textContent =
        stars === 3
            ? "PERFECT QUEST!"
            : "LEVEL COMPLETE!";


    document.getElementById(
        "resultMessage"
    ).textContent =
        stars === 3
            ? "🎉 Sempurna! Kamu menguasai level ini."
            : stars === 2
                ? "👏 Bagus! Coba lagi untuk skor sempurna."
                : "💪 Terus berlatih, petualang English Quest!";


    showPage("resultPage");
}


// ==========================================
// ULANGI LEVEL YANG BARU DIMAINKAN
// ==========================================

function retryLevel() {

    startQuiz(currentLevel);
}


// ==========================================
// ULANGI SELURUH GAME DARI AWAL
// ==========================================

function resetProgress() {

    const sure = confirm(
        "Ulangi dari awal? XP dan semua level akan direset."
    );


    if (!sure) {

        return;
    }


    totalXP = 0;

    completedLevels = [];

    bestScores = {};


    localStorage.removeItem(
        STORAGE_KEYS.xp
    );

    localStorage.removeItem(
        STORAGE_KEYS.completed
    );

    localStorage.removeItem(
        STORAGE_KEYS.best
    );


    // BARU: PROFIL - statistik dan lencana ikut direset (avatar, motto, banner tetap)
    profile.stats = { games: 0, correct: 0, questions: 0, perfect: 0 };

    profile.badgesSeen = [];

    saveProfile(profile);


    backToGame();
}


// ==========================================
// KEMBALI KE MAP GAME
// ==========================================

function backToGame() {

    document.getElementById(
        "xp"
    ).textContent =
        totalXP;


    renderMap();


    showPage("gamePage");
}


// ==========================================
// SAAT WEBSITE DIBUKA
// ==========================================

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const savedName =
            localStorage.getItem(
                STORAGE_KEYS.player
            );


        if (savedName) {

            document.getElementById(
                "playerInput"
            ).value =
                savedName;

        }


        applyIdentity(); // BARU: PROFIL - pasang avatar tersimpan


        document.getElementById(
            "startButton"
        ).addEventListener(
            "click",
            startGame
        );


        document.getElementById(
            "playerInput"
        ).addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter"
                ) {

                    startGame();

                }

            }
        );


        document.getElementById(
            "backFromQuiz"
        ).addEventListener(
            "click",
            backToGame
        );


        document.getElementById(
            "backFromResult"
        ).addEventListener(
            "click",
            backToGame
        );


        // tombol ULANGI LEVEL di halaman hasil
        document.getElementById(
            "retryButton"
        ).addEventListener(
            "click",
            retryLevel
        );


        // tombol Ulangi dari awal di peta
        document.getElementById(
            "resetButton"
        ).addEventListener(
            "click",
            resetProgress
        );


        // BARU: PROFIL - tombol profil di topbar
        document.getElementById(
            "profileButton"
        ).addEventListener(
            "click",
            openProfile
        );

    }
);