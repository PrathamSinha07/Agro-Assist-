// --- Language Translation Setup ---
const translations = {
    en: {
        title_desc: "AI-powered crop disease diagnosis and remedies",
        input_title: "Diagnosis Settings",
        lang_select_label: "Select Remedy Language:",
        upload_label: "Upload Leaf Image:",
        analyze_button: "Diagnose Crop",
        loading_text: "Analyzing your crop leaf, please wait...",
        results_header: "Diagnosis Result",
        disease_label: "Disease Name",
        cause_label: "Cause / Source",
        remedies_divider: "Recommended Remedies",
        remedy_lang_label: "Remedy (English)",
        placeholder_title: "Ready for Diagnosis",
        placeholder_desc: "Upload an image of a diseased crop leaf and select your preferred language to get AI-powered insights."
    },
    hi: {
        title_desc: "एआई-संचालित फसल रोग निदान और उपचार",
        input_title: "निदान सेटिंग्स",
        lang_select_label: "उपचार की भाषा चुनें:",
        upload_label: "पत्ती की छवि अपलोड करें:",
        analyze_button: "फसल का निदान करें",
        loading_text: "आपकी फसल की पत्ती का विश्लेषण किया जा रहा है, कृपया प्रतीक्षा करें...",
        results_header: "निदान परिणाम",
        disease_label: "रोग का नाम",
        cause_label: "कारण / स्रोत",
        remedies_divider: "अनुशंसित उपचार",
        remedy_lang_label: "उपचार (हिंदी)",
        placeholder_title: "निदान के लिए तैयार",
        placeholder_desc: "एआई-संचालित अंतर्दृष्टि प्राप्त करने के लिए रोगग्रस्त फसल की पत्ती की एक छवि अपलोड करें और अपनी पसंदीदा भाषा चुनें।"
    },
    mr: {
        title_desc: "कृत्रिम बुद्धिमत्ता-आधारित पीक रोग निदान आणि उपाय",
        input_title: "निदान सेटिंग्ज",
        lang_select_label: "उपाय भाषा निवडा:",
        upload_label: "पानाचा फोटो अपलोड करा:",
        analyze_button: "पिकाचे निदान करा",
        loading_text: "तुमच्या पिकाच्या पानाचे विश्लेषण सुरू आहे, कृपया थांबा...",
        results_header: "निदान परिणाम",
        disease_label: "रोगाचे नाव",
        cause_label: "कारण / स्त्रोत",
        remedies_divider: "शिफारस केलेले उपाय",
        remedy_lang_label: "उपाय (मराठी)",
        placeholder_title: "निदानासाठी सज्ज",
        placeholder_desc: "कृत्रिम बुद्धिमत्ता-आधारित माहिती मिळवण्यासाठी रोगग्रस्त पिकाच्या पानाचा फोटो अपलोड करा आणि तुमची पसंतीची भाषा निवडा."
    },
    bn: {
        title_desc: "এআই-চালিত ফসলের রোগ নির্ণয় এবং প্রতিকার",
        input_title: "রোগ নির্ণয়ের সেটিংস",
        lang_select_label: "প্রতিকারের ভাষা নির্বাচন করুন:",
        upload_label: "পাতার ছবি আপলোড করুন:",
        analyze_button: "ফসলের রোগ নির্ণয় করুন",
        loading_text: "আপনার ফসলের পাতা বিশ্লেষণ করা হচ্ছে, দয়া করে অপেক্ষা করুন...",
        results_header: "রোগ নির্ণয়ের ফলাফল",
        disease_label: "রোগের নাম",
        cause_label: "কারণ / উৎস",
        remedies_divider: "প্রস্তাবিত প্রতিকার",
        remedy_lang_label: "প্রতিকার (বাংলা)",
        placeholder_title: "রোগ নির্ণয়ের জন্য প্রস্তুত",
        placeholder_desc: "এআই-চালিত অন্তর্দৃষ্টি পেতে একটি রোগাক্রান্ত ফসলের পাতার ছবি আপলোড করুন এবং আপনার পছন্দের ভাষা নির্বাচন করুন।"
    },
    or: {
        title_desc: "ଏଆଇ-ଚାଳିତ ଫସଲ ରୋଗ ନିରୂପଣ ଏବଂ ପ୍ରତିକାର",
        input_title: "ନିରୂପଣ ସେଟିଙ୍ଗସ୍",
        lang_select_label: "ପ୍ରତିକାର ଭାଷା ବାଛନ୍ତୁ:",
        upload_label: "ପତ୍ରର ଛବି ଅପଲୋଡ୍ କରନ୍ତୁ:",
        analyze_button: "ଫସଲ ରୋଗ ନିରୂପଣ କରନ୍ତୁ",
        loading_text: "ଆପଣଙ୍କ ଫସଲ ପତ୍ରର ବିଶ୍ଳେଷଣ କରାଯାଉଛି, ଦୟาକରି ଅପେକ୍ଷା କରନ୍ତୁ...",
        results_header: "ନିରୂପଣ ଫଳାଫଳ",
        disease_label: "ରୋଗର ନାମ",
        cause_label: "କାରଣ / ଉତ୍ସ",
        remedies_divider: "ସୁପାରିଶ କରାଯାଇଥିବା ପ୍ରତିକାର",
        remedy_lang_label: "ପ୍ରତିକାର (ଓଡ଼ିଆ)",
        placeholder_title: "ନିରୂପଣ ପାଇଁ ପ୍ରସ୍ତୁତ",
        placeholder_desc: "ଏଆଇ-ଚାଳିତ ବିଶ୍ଳେଷଣ ପାଇଁ ରୋଗାକ୍ରାନ୍ତ ଫସଲ ପତ୍ରର ଏକ ଛବି ଅପଲୋଡ୍ କରନ୍ତୁ ଏବଂ ଆପଣଙ୍କ ପସନ୍ଦର ଭାଷା ବାଛନ୍ତୁ।"
    }
};

// Strict language code to language name dictionary for the backend
const languageNames = {
    en: "English",
    hi: "Hindi",
    mr: "Marathi",
    bn: "Bengali",
    or: "Odia"
};

// State Variables
let currentSessionUser = null;
let currentSelectedImageBase64 = ""; // Keep image base64 locally to persist in records history
let tasks = JSON.parse(localStorage.getItem('farmer_tasks')) || [
    "Inspect drip irrigation system",
    "Check soil moisture before fertilizer application",
    "Clear debris from drainage channels"
];

// DOM Elements - Auth Flow
const authContainer = document.getElementById('auth-container');
const appPlatform = document.getElementById('app-platform');
const loginCard = document.getElementById('login-card');
const signupCard = document.getElementById('signup-card');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const goToSignup = document.getElementById('go-to-signup');
const goToLogin = document.getElementById('go-to-login');

// DOM Elements - Platform Views & Sidebar
const userDisplayName = document.getElementById('user-display-name');
const btnEditName = document.getElementById('edit-name-btn');
const mobileLogoutBtn = document.getElementById('mobile-logout-btn');
const navHome = document.getElementById('nav-home');
const navDiagnostics = document.getElementById('nav-diagnostics');
const navHistory = document.getElementById('nav-history');
const viewHome = document.getElementById('view-home');
const viewDiagnostics = document.getElementById('view-diagnostics');
const viewWeatherDetail = document.getElementById('view-weather-detail');
const panelDashboard = document.getElementById('panel-dashboard');
const panelHistory = document.getElementById('panel-history');
const btnLogout = document.getElementById('btn-logout');

// DOM Elements - Diagnostics Dashboard
const langSelector = document.getElementById('language-selector');
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const previewContainer = document.getElementById('preview-container');
const imagePreview = document.getElementById('image-preview');
const removeImageBtn = document.getElementById('remove-image-btn');
const analyzeBtn = document.getElementById('analyze-btn');
const loaderOverlay = document.getElementById('loader-overlay');
const loaderText = document.getElementById('loader-text');
const resultsPlaceholder = document.getElementById('results-placeholder');
const resultsCard = document.getElementById('results-card');

// DOM Elements - History
const historyGrid = document.getElementById('history-grid-container');
const historyEmptyState = document.getElementById('history-empty-state');
const historySearchInput = document.getElementById('history-search');
const historyFilterStatus = document.getElementById('history-filter-status');

// DOM Elements - Details Modal
const recordModal = document.getElementById('record-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalImagePreview = document.getElementById('modal-image-preview');
const modalHealthBadge = document.getElementById('modal-health-badge');
const modalDate = document.getElementById('modal-date');
const modalLang = document.getElementById('modal-lang');
const modalDiseaseName = document.getElementById('modal-disease-name');
const modalCauseName = document.getElementById('modal-cause-name');
const modalRemedyLangLabel = document.getElementById('modal-remedy-lang-label');
const modalRemedyLang = document.getElementById('modal-remedy-lang');
const modalRemedyEn = document.getElementById('modal-remedy-en');


// ==========================================
// 1. SESSION & AUTHENTICATION MANAGEMENT
// ==========================================

// Initialize Application Check
window.addEventListener('DOMContentLoaded', () => {
    checkActiveSession();
});

function checkActiveSession() {
    const session = localStorage.getItem('loggedInUser');
    if (session) {
        currentSessionUser = JSON.parse(session);
        transitionToApp();
    } else {
        transitionToAuth();
    }
}

function transitionToApp() {
    authContainer.style.display = 'none';
    appPlatform.style.display = 'flex';
    userDisplayName.textContent = currentSessionUser.name;
    const homeUsername = document.getElementById('home-username');
    if (homeUsername) {
        homeUsername.textContent = currentSessionUser.name;
    }
    
    // Set default view to home
    switchView('home');
    resetDiagnosisPanel();
    loadPastRecords();
}

function transitionToAuth() {
    appPlatform.style.display = 'none';
    authContainer.style.display = 'flex';
    showCard('login');
}

// Authentication Card Toggles
goToSignup.addEventListener('click', () => showCard('signup'));
goToLogin.addEventListener('click', () => showCard('login'));

function showCard(cardName) {
    if (cardName === 'login') {
        signupCard.style.display = 'none';
        loginCard.style.display = 'block';
        loginForm.reset();
    } else {
        loginCard.style.display = 'none';
        signupCard.style.display = 'block';
        signupForm.reset();
    }
}

// Login Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    const registeredUsers = JSON.parse(localStorage.getItem('agro_assist_users') || '[]');
    const matchedUser = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!matchedUser) {
        alert('Account not found. Please sign up first.');
        return;
    }

    if (matchedUser.password !== password) {
        alert('Invalid email or password. Please try again.');
        return;
    }

    // Set active session
    const sessionData = { name: matchedUser.name, email: matchedUser.email };
    localStorage.setItem('loggedInUser', JSON.stringify(sessionData));
    currentSessionUser = sessionData;

    transitionToApp();
});

// Signup Submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;

    const registeredUsers = JSON.parse(localStorage.getItem('agro_assist_users') || '[]');
    const userExists = registeredUsers.some(u => u.email.toLowerCase() === email.toLowerCase());

    if (userExists) {
        alert('An account with this email is already registered. Please login.');
        return;
    }

    // Save account details
    registeredUsers.push({ name, email, password });
    localStorage.setItem('agro_assist_users', JSON.stringify(registeredUsers));

    alert('Account created successfully! Please sign in using your credentials.');
    showCard('login');
    document.getElementById('login-email').value = email;
});

// Logout Button Action
btnLogout.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    currentSessionUser = null;
    transitionToAuth();
});

// Mobile Logout Button Action
if (mobileLogoutBtn) {
    mobileLogoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        currentSessionUser = null;
        transitionToAuth();
    });
}

// Inline Name Editing Logic
let isEditingName = false;

if (btnEditName) {
    btnEditName.addEventListener('click', () => {
        if (!isEditingName) {
            startEditingName();
        } else {
            saveEditingName();
        }
    });
}

function startEditingName() {
    isEditingName = true;
    const currentName = userDisplayName.textContent;
    
    // Create input element
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'input-edit-name';
    input.className = 'input-edit-name';
    input.value = currentName;
    input.maxLength = 25;
    
    // Hide name span
    userDisplayName.style.display = 'none';
    
    // Insert input into parent container before btnEditName
    const container = userDisplayName.parentNode;
    container.insertBefore(input, btnEditName);
    input.focus();
    input.select();
    
    // Change icon of btnEditName to checkmark
    btnEditName.innerHTML = '<i class="fa-solid fa-check"></i>';
    btnEditName.title = 'Save Name';
    
    // Keydown event listeners for Enter and Escape
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            saveEditingName();
        } else if (e.key === 'Escape') {
            cancelEditingName(currentName);
        }
    });
}

let isSavingName = false;
function saveEditingName() {
    if (isSavingName) return;
    isSavingName = true;
    
    const input = document.getElementById('input-edit-name');
    if (input) {
        const newName = input.value.trim();
        if (newName) {
            updateUserNameInStorage(newName);
        }
    }
    
    cleanupEditingMode();
    isSavingName = false;
}

function cancelEditingName(originalName) {
    userDisplayName.textContent = originalName;
    cleanupEditingMode();
}

function cleanupEditingMode() {
    isEditingName = false;
    
    const input = document.getElementById('input-edit-name');
    if (input) {
        input.remove();
    }
    
    // Show name span
    userDisplayName.style.display = '';
    
    // Change icon of btnEditName back to pen
    btnEditName.innerHTML = '<i class="fa-solid fa-pen"></i>';
    btnEditName.title = 'Edit Name';
}

function updateUserNameInStorage(newName) {
    if (!currentSessionUser) return;
    
    const email = currentSessionUser.email;
    currentSessionUser.name = newName;
    
    // Update session
    localStorage.setItem('loggedInUser', JSON.stringify(currentSessionUser));
    
    // Update display
    userDisplayName.textContent = newName;
    const homeUsername = document.getElementById('home-username');
    if (homeUsername) {
        homeUsername.textContent = newName;
    }
    
    // Update register users list
    const registeredUsers = JSON.parse(localStorage.getItem('agro_assist_users') || '[]');
    const updatedUsers = registeredUsers.map(user => {
        if (user.email.toLowerCase() === email.toLowerCase()) {
            user.name = newName;
        }
        return user;
    });
    localStorage.setItem('agro_assist_users', JSON.stringify(updatedUsers));
}


// ==========================================
// 2. SIDEBAR ROUTING / PANEL SWITCHES
// ==========================================

navHome.addEventListener('click', () => switchView('home'));
navDiagnostics.addEventListener('click', () => switchView('diagnostics'));
navHistory.addEventListener('click', () => switchView('history'));

// Weather Card detail trigger
const weatherCard = document.getElementById('weather-card');
if (weatherCard) {
    weatherCard.addEventListener('click', () => {
        switchView('weather-detail');
    });
}

// Back to Home button trigger
const btnBackToHome = document.getElementById('btn-back-to-home');
if (btnBackToHome) {
    btnBackToHome.addEventListener('click', () => {
        switchView('home');
    });
}

function switchView(viewName) {
    // Hide all view panels first
    const panels = ['view-home', 'view-diagnostics', 'view-weather-detail', 'panel-history'];
    panels.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    // Remove active class from all nav items
    const navButtons = [navHome, navDiagnostics, navHistory];
    navButtons.forEach(btn => {
        if (btn) btn.classList.remove('active');
    });

    if (viewName === 'home') {
        if (navHome) navHome.classList.add('active');
        const view = document.getElementById('view-home');
        if (view) view.style.display = 'block';
        fetchWeatherAndPopulate();
        renderTasks();
    } else if (viewName === 'diagnostics') {
        if (navDiagnostics) navDiagnostics.classList.add('active');
        const view = document.getElementById('view-diagnostics');
        if (view) view.style.display = 'block';
    } else if (viewName === 'history') {
        if (navHistory) navHistory.classList.add('active');
        const view = document.getElementById('panel-history');
        if (view) view.style.display = 'block';
        loadPastRecords(); // Refresh logs grid
    } else if (viewName === 'weather-detail') {
        const view = document.getElementById('view-weather-detail');
        if (view) view.style.display = 'block';
    }
}

// --- Weather Interpretation & Fetching logic ---
const WMO_WEATHER_MAP = {
    0: { desc: "Sunny", icon: "fa-solid fa-sun" },
    1: { desc: "Partly Cloudy", icon: "fa-solid fa-cloud-sun" },
    2: { desc: "Partly Cloudy", icon: "fa-solid fa-cloud-sun" },
    3: { desc: "Cloudy", icon: "fa-solid fa-cloud" },
    45: { desc: "Foggy", icon: "fa-solid fa-smog" },
    48: { desc: "Foggy", icon: "fa-solid fa-smog" },
    51: { desc: "Light Drizzle", icon: "fa-solid fa-cloud-rain" },
    53: { desc: "Drizzle", icon: "fa-solid fa-cloud-rain" },
    55: { desc: "Heavy Drizzle", icon: "fa-solid fa-cloud-rain" },
    61: { desc: "Light Rain", icon: "fa-solid fa-cloud-showers-heavy" },
    63: { desc: "Rainy", icon: "fa-solid fa-cloud-showers-heavy" },
    65: { desc: "Heavy Rain", icon: "fa-solid fa-cloud-showers-heavy" },
    71: { desc: "Light Snow", icon: "fa-solid fa-snowflake" },
    73: { desc: "Snowy", icon: "fa-solid fa-snowflake" },
    75: { desc: "Heavy Snow", icon: "fa-solid fa-snowflake" },
    77: { desc: "Snow Grains", icon: "fa-solid fa-snowflake" },
    80: { desc: "Rain Showers", icon: "fa-solid fa-cloud-sun-rain" },
    81: { desc: "Rain Showers", icon: "fa-solid fa-cloud-sun-rain" },
    82: { desc: "Heavy Rain Showers", icon: "fa-solid fa-cloud-showers-heavy" },
    95: { desc: "Thunderstorm", icon: "fa-solid fa-cloud-bolt" },
    96: { desc: "Thunderstorm with Hail", icon: "fa-solid fa-cloud-bolt" },
    99: { desc: "Thunderstorm with Hail", icon: "fa-solid fa-cloud-bolt" }
};

function getWeatherInfo(code) {
    return WMO_WEATHER_MAP[code] || { desc: "Cloudy", icon: "fa-solid fa-cloud" };
}

let currentLatitude = 18.5204;
let currentLongitude = 73.8567;
let locationName = "Pune, India";
let isWeatherLoading = false;

async function fetchWeatherAndPopulate() {
    if (isWeatherLoading) return;
    isWeatherLoading = true;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                currentLatitude = position.coords.latitude;
                currentLongitude = position.coords.longitude;
                locationName = `Field Location (${currentLatitude.toFixed(2)}, ${currentLongitude.toFixed(2)})`;
                
                // Nominatim reverse geocoding to retrieve actual city name if available
                try {
                    const geoResp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${currentLatitude}&lon=${currentLongitude}`, {
                        headers: { 'Accept-Language': 'en' }
                    });
                    if (geoResp.ok) {
                        const geoData = await geoResp.json();
                        if (geoData && geoData.address) {
                            const city = geoData.address.city || geoData.address.town || geoData.address.village || geoData.address.suburb || "Local Field";
                            locationName = `${city}, India`;
                        }
                    }
                } catch (err) {
                    console.warn("Nominatim reverse geocode error: ", err);
                }
                
                await loadWeatherFromApi();
                isWeatherLoading = false;
            },
            async (error) => {
                console.warn("Geolocation access denied or timed out. Falling back to Pune, India.");
                setDefaultPuneCoords();
                await loadWeatherFromApi();
                isWeatherLoading = false;
            },
            { timeout: 8000 }
        );
    } else {
        console.warn("Geolocation not supported by browser. Falling back to Pune, India.");
        setDefaultPuneCoords();
        await loadWeatherFromApi();
        isWeatherLoading = false;
    }
}

function setDefaultPuneCoords() {
    currentLatitude = 18.5204;
    currentLongitude = 73.8567;
    locationName = "Pune, India";
}

async function loadWeatherFromApi() {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${currentLatitude}&longitude=${currentLongitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m,pressure_msl&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto`);
        if (!response.ok) throw new Error("Weather API returned non-ok status: " + response.status);
        const data = await response.json();
        
        // Map current info
        const currentTemp = Math.round(data.current.temperature_2m);
        const currentInfo = getWeatherInfo(data.current.weather_code);
        
        // Update Home Dashboard UI
        const homeTempEl = document.getElementById('home-weather-temp');
        const homeDescEl = document.getElementById('home-weather-desc');
        const homeIconEl = document.getElementById('home-weather-icon');
        const homeLocEl = document.getElementById('home-weather-location');
        
        if (homeTempEl) homeTempEl.textContent = `${currentTemp}°C`;
        if (homeDescEl) homeDescEl.textContent = currentInfo.desc;
        if (homeIconEl) {
            homeIconEl.className = `${currentInfo.icon} weather-icon-large animate-float`;
        }
        if (homeLocEl) homeLocEl.textContent = locationName;
        
        // Update Weather Details Panel UI
        const detailLocEl = document.getElementById('detail-weather-location');
        const detailDateEl = document.getElementById('detail-weather-date');
        const detailCondEl = document.getElementById('detail-weather-condition');
        const detailTempEl = document.getElementById('detail-weather-temp');
        const detailFeelsEl = document.getElementById('detail-weather-feels-like');
        const detailIconEl = document.getElementById('detail-weather-icon');
        
        const windEl = document.getElementById('weather-wind-speed');
        const humidityEl = document.getElementById('weather-humidity');
        const uvEl = document.getElementById('weather-uv-index');
        const pressureEl = document.getElementById('weather-pressure');
        
        if (detailLocEl) detailLocEl.textContent = locationName;
        if (detailDateEl) {
            detailDateEl.textContent = new Date().toLocaleDateString('en-US', {
                weekday: 'long', month: 'long', day: 'numeric'
            });
        }
        if (detailCondEl) detailCondEl.textContent = currentInfo.desc;
        if (detailTempEl) detailTempEl.textContent = `${currentTemp}°C`;
        if (detailFeelsEl) detailFeelsEl.textContent = `${Math.round(data.current.apparent_temperature)}°C`;
        if (detailIconEl) {
            detailIconEl.className = `${currentInfo.icon} detail-weather-icon animate-float`;
        }
        
        if (windEl) windEl.textContent = `${data.current.wind_speed_10m} km/h`;
        if (humidityEl) humidityEl.textContent = `${data.current.relative_humidity_2m}%`;
        if (uvEl) uvEl.textContent = data.daily.uv_index_max[0] !== undefined ? data.daily.uv_index_max[0] : '--';
        if (pressureEl) pressureEl.textContent = `${Math.round(data.current.pressure_msl)} hPa`;
        
        // Populate Hourly Outlook Track (12-hour or 24-hour forecast from current time)
        const hourlyTrack = document.getElementById('hourly-scroll-track');
        if (hourlyTrack) {
            hourlyTrack.innerHTML = '';
            const currentHour = new Date().getHours();
            
            // Render next 24 hourly periods
            for (let i = 0; i < 24; i++) {
                if (i >= data.hourly.time.length) break;
                
                const hourlyTime = new Date(data.hourly.time[i]);
                // Filter to show from current hour onwards
                if (hourlyTime < new Date(new Date().setMinutes(0, 0, 0))) continue;
                if (hourlyTrack.children.length >= 24) break;
                
                const timeStr = hourlyTime.toLocaleTimeString('en-US', {
                    hour: 'numeric', hour12: true
                });
                const tempVal = Math.round(data.hourly.temperature_2m[i]);
                const codeVal = data.hourly.weather_code[i];
                const infoVal = getWeatherInfo(codeVal);
                
                const hourCard = document.createElement('div');
                hourCard.className = 'hourly-item';
                hourCard.innerHTML = `
                    <span class="hourly-time">${timeStr}</span>
                    <i class="${infoVal.icon} hourly-icon"></i>
                    <span class="hourly-temp">${tempVal}°C</span>
                `;
                hourlyTrack.appendChild(hourCard);
            }
            if (hourlyTrack.children.length === 0) {
                hourlyTrack.innerHTML = '<div class="hourly-loading">No hourly data available.</div>';
            }
        }
        
        // Populate 7-Day Forecast list
        const dailyList = document.getElementById('daily-list');
        if (dailyList) {
            dailyList.innerHTML = '';
            for (let i = 0; i < 7; i++) {
                if (i >= data.daily.time.length) break;
                
                const dateVal = new Date(data.daily.time[i]);
                const dayName = dateVal.toLocaleDateString('en-US', { weekday: 'long' });
                const isToday = i === 0 ? 'Today' : dayName;
                
                const maxT = Math.round(data.daily.temperature_2m_max[i]);
                const minT = Math.round(data.daily.temperature_2m_min[i]);
                const codeVal = data.daily.weather_code[i];
                const infoVal = getWeatherInfo(codeVal);
                
                const dailyItem = document.createElement('div');
                dailyItem.className = 'daily-item';
                dailyItem.innerHTML = `
                    <span class="daily-name">${isToday}</span>
                    <div class="daily-icon-wrapper"><i class="${infoVal.icon} daily-icon"></i></div>
                    <span class="daily-desc">${infoVal.desc}</span>
                    <span class="daily-temp-range"><span class="temp-max">${maxT}°</span><span class="temp-min">${minT}°</span></span>
                `;
                dailyList.appendChild(dailyItem);
            }
        }
    } catch (error) {
        console.error("Failed to load weather data from Open-Meteo API: ", error);
        const homeDescEl = document.getElementById('home-weather-desc');
        if (homeDescEl) homeDescEl.textContent = "Error loading weather";
    }
}

// --- To-Do Task Manager Logic ---
function renderTasks() {
    const taskList = document.getElementById('task-list');
    if (!taskList) return;
    taskList.innerHTML = '';
    
    tasks.forEach((taskText, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <label class="task-label">
                <input type="checkbox" class="task-checkbox" data-index="${index}">
                <span class="task-custom-checkbox"><i class="fa-solid fa-check"></i></span>
                <span class="task-text">${taskText}</span>
            </label>
            <button class="delete-task-btn" data-index="${index}" title="Delete Task">
                <i class="fas fa-trash"></i>
            </button>
        `;
        taskList.appendChild(li);
    });
}

// Delegation for checkbox and delete button clicks
const taskListContainer = document.getElementById('task-list');
if (taskListContainer) {
    taskListContainer.addEventListener('click', (e) => {
        // Handle Delete Button Click
        const deleteBtn = e.target.closest('.delete-task-btn');
        if (deleteBtn) {
            const index = parseInt(deleteBtn.getAttribute('data-index'), 10);
            tasks.splice(index, 1);
            localStorage.setItem('farmer_tasks', JSON.stringify(tasks));
            renderTasks();
            return;
        }
    });
}

// Add Task Logic
const btnAddTask = document.getElementById('add-task-btn');
const inputNewTask = document.getElementById('new-task-input');

if (btnAddTask && inputNewTask) {
    const addNewTask = () => {
        const text = inputNewTask.value.trim();
        if (text) {
            tasks.push(text);
            localStorage.setItem('farmer_tasks', JSON.stringify(tasks));
            inputNewTask.value = '';
            renderTasks();
        }
    };
    
    btnAddTask.addEventListener('click', addNewTask);
    inputNewTask.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addNewTask();
        }
    });
}


// ==========================================
// 3. DIAGNOSTICS & GEMINI API PROCESSING
// ==========================================

// Set default language texts on launch
setLanguage('en');

// Language selection change event
langSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
});

// Set language UI texts helper
function setLanguage(lang) {
    const langData = translations[lang];
    if (!langData) return;
    
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (langData[key]) {
            elem.textContent = langData[key];
        }
    });

    const remedyLangLabel = document.getElementById('remedy-lang-label');
    if (remedyLangLabel) {
        remedyLangLabel.textContent = langData.remedy_lang_label || `Remedy (${languageNames[lang]})`;
    }
}

// Reset view panel
function resetDiagnosisPanel() {
    fileInput.value = '';
    imagePreview.src = '#';
    currentSelectedImageBase64 = "";
    previewContainer.style.display = 'none';
    analyzeBtn.disabled = true;
    resultsCard.style.display = 'none';
    resultsPlaceholder.style.display = 'flex';
}

// --- Drag & Drop Operations ---
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('dragover');
    }, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('dragover');
    }, false);
});

dropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
        handleFileSelect(files[0]);
    }
}, false);

dropZone.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFileSelect(e.target.files[0]);
    }
});

// Handle local file loading & base64 preview encoding
function handleFileSelect(file) {
    if (!file.type.startsWith('image/')) {
        alert('Invalid file format. Please upload an image file (JPG, PNG, WEBP).');
        return;
    }

    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    fileInput.files = dataTransfer.files;

    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.src = e.target.result;
        currentSelectedImageBase64 = e.target.result; // Store base64 data to persist
        previewContainer.style.display = 'flex';
        analyzeBtn.disabled = false;
    };
    reader.readAsDataURL(file);
}

// Clear selected image preview
removeImageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.value = '';
    imagePreview.src = '#';
    currentSelectedImageBase64 = "";
    previewContainer.style.display = 'none';
    analyzeBtn.disabled = true;
});

// Diagnosis Submission
analyzeBtn.addEventListener('click', async () => {
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select or drop a leaf image first.");
        return;
    }

    const langCode = langSelector.value;
    const langName = languageNames[langCode] || "English";

    const formData = new FormData();
    formData.append('file', file);
    formData.append('language', langName);

    // Show loading overlay
    const currentLangData = translations[langCode] || translations['en'];
    loaderText.textContent = currentLangData.loading_text;
    loaderOverlay.style.display = 'flex';
    
    // Hide results panel during reload
    resultsCard.style.display = 'none';
    resultsPlaceholder.style.display = 'flex';

    try {
        const response = await fetch('/api/diagnose', {
            method: 'POST',
            body: formData
        });

        const textResponse = await response.text();
        let resultJson;
        
        try {
            resultJson = JSON.parse(textResponse);
        } catch (e) {
            throw new Error('Server returned invalid response structure: ' + textResponse);
        }

        if (!response.ok || resultJson.error) {
            throw new Error(resultJson.error || ('Network response was not ok. Status: ' + response.status));
        }

        // Render response cards
        document.getElementById('disease-name').textContent = resultJson.diseaseName || 'N/A';
        document.getElementById('cause-name').textContent = resultJson.cause || 'N/A';
        
        const dashboardGrid = document.querySelector('#results-card .remedies-grid');
        const dashboardEnglishCard = document.querySelector('#results-card .remedy-card.english');
        
        if (langCode === 'en') {
            document.getElementById('remedy-lang-label').textContent = "Recommended Remedy";
            document.getElementById('remedy-lang').textContent = resultJson.remedy_local || resultJson.remedy_en || 'N/A';
            dashboardEnglishCard.style.display = 'none';
            dashboardGrid.style.gridTemplateColumns = '1fr';
        } else {
            document.getElementById('remedy-lang').textContent = resultJson.remedy_local || 'N/A';
            document.getElementById('remedy-en').textContent = resultJson.remedy_en || 'N/A';
            dashboardEnglishCard.style.display = 'flex';
            dashboardGrid.style.gridTemplateColumns = ''; // Fallback to style.css columns
        }

        // Check health status to color the badge
        const healthBadge = document.getElementById('health-badge');
        const diseaseText = (resultJson.diseaseName || '').toLowerCase();
        const statusText = (resultJson.status || '').toLowerCase();
        const isHealthy = statusText.includes('healthy') ||
                          diseaseText.includes('healthy') || 
                          diseaseText.includes('no disease') || 
                          diseaseText.includes('स्वस्थ') || 
                          diseaseText.includes('निरोगी') || 
                          diseaseText.includes('कोई बीमारी नहीं');
        
        if (isHealthy) {
            healthBadge.textContent = 'Healthy';
            healthBadge.style.backgroundColor = '#E8F5E9';
            healthBadge.style.color = '#2E7D32';
            healthBadge.style.borderColor = '#C8E6C9';
        } else {
            healthBadge.textContent = 'Infected';
            healthBadge.style.backgroundColor = '#FFEBEE';
            healthBadge.style.color = '#C62828';
            healthBadge.style.borderColor = '#FFCDD2';
        }

        // Save record to Local Storage History log
        saveRecordToHistory({
            id: Date.now(),
            diseaseName: resultJson.diseaseName,
            status: resultJson.status || (isHealthy ? 'Healthy' : 'Infected'),
            cause: resultJson.cause,
            remedy_local: resultJson.remedy_local,
            remedy_en: resultJson.remedy_en,
            langCode: langCode,
            isHealthy: isHealthy,
            imageBase64: currentSelectedImageBase64 || "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=400&q=80",
            timestamp: Date.now()
        });

        // Display results panel
        resultsPlaceholder.style.display = 'none';
        resultsCard.style.display = 'block';

    } catch (error) {
        console.error('Error during analysis:', error);
        alert('An error occurred during diagnosis: ' + error.message);
    } finally {
        loaderOverlay.style.display = 'none';
    }
});


// ==========================================
// 4. PERSISTENT RECORDS HISTORY LOGGER
// ==========================================

function saveRecordToHistory(record) {
    if (!currentSessionUser) return;
    const historyKey = `agro_assist_records_${currentSessionUser.email}`;
    const userRecords = JSON.parse(localStorage.getItem(historyKey) || '[]');
    userRecords.push(record);
    localStorage.setItem(historyKey, JSON.stringify(userRecords));
}

function loadPastRecords() {
    if (!currentSessionUser) return;
    const historyKey = `agro_assist_records_${currentSessionUser.email}`;
    let userRecords = JSON.parse(localStorage.getItem(historyKey) || '[]');
    
    // Sort records descending by timestamp (newest first)
    userRecords.sort((a, b) => b.timestamp - a.timestamp);

    // Apply active searches and filters
    const searchVal = historySearchInput.value.trim().toLowerCase();
    const statusVal = historyFilterStatus.value;

    if (searchVal) {
        userRecords = userRecords.filter(r => 
            (r.diseaseName && r.diseaseName.toLowerCase().includes(searchVal)) ||
            (r.cause && r.cause.toLowerCase().includes(searchVal))
        );
    }

    if (statusVal !== 'all') {
        const targetHealthy = (statusVal === 'healthy');
        userRecords = userRecords.filter(r => r.isHealthy === targetHealthy);
    }

    renderHistoryGrid(userRecords);
}

// Attach filter change and search change event listeners
historySearchInput.addEventListener('input', loadPastRecords);
historyFilterStatus.addEventListener('change', loadPastRecords);

// Attach a single, robust event listener to the parent history grid container (Event Delegation)
const historyGridContainer = document.getElementById('history-grid-container');
if (historyGridContainer) {
    historyGridContainer.addEventListener('click', function(e) {
        const deleteBtn = e.target.closest('.delete-record-btn');
        if (deleteBtn) {
            e.preventDefault();
            e.stopPropagation();
            const recordId = deleteBtn.getAttribute('data-id');
            if (confirm('Are you sure you want to delete this search history record?')) {
                executeRecordDeletion(recordId, deleteBtn.closest('.card-element'));
            }
        }
    });
}

function renderHistoryGrid(records) {
    historyGrid.innerHTML = '';
    
    if (records.length === 0) {
        historyGrid.style.display = 'none';
        historyEmptyState.style.display = 'flex';
        return;
    }

    historyEmptyState.style.display = 'none';
    historyGrid.style.display = 'grid';

    records.forEach((record, index) => {
        const dateStr = new Date(record.timestamp).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });

        const statusText = record.isHealthy ? 'Healthy' : 'Infected';
        const badgeStyle = record.isHealthy 
            ? 'background-color: #E8F5E9; color: #2E7D32; border: 1px solid #C8E6C9;'
            : 'background-color: #FFEBEE; color: #C62828; border: 1px solid #FFCDD2;';

        const card = document.createElement('div');
        card.className = 'history-item-card card-element';
        card.innerHTML = `
            <div class="history-item-thumbnail-wrapper">
                <button type="button" class="delete-record-btn" data-id="${record.id}" aria-label="Delete record">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <img src="${record.imageBase64}" alt="Thumb Leaf">
                <span class="badge history-item-badge" style="${badgeStyle}">${statusText}</span>
            </div>
            <div class="history-item-body">
                <span class="history-item-date"><i class="fa-regular fa-calendar"></i> ${dateStr}</span>
                <h3 class="history-item-title">${record.diseaseName || 'Unknown Crop'}</h3>
                <p class="history-item-cause">${record.cause || 'No cause logged'}</p>
                <button type="button" class="btn-primary view-details-btn">
                    <i class="fa-solid fa-receipt"></i> View Sheet
                </button>
            </div>
        `;

        // Wire View Sheet detail modal trigger
        card.querySelector('.view-details-btn').addEventListener('click', () => {
            openDetailModal(record, dateStr);
        });

        historyGrid.appendChild(card);
    });
}

async function executeRecordDeletion(id, cardElement) {
    if (!currentSessionUser) return;
    
    // Trigger backend deletion endpoint to process the DELETE command
    if (id && id !== 'undefined' && id !== 'null') {
        try {
            const response = await fetch('/api/diagnose/' + id, {
                method: 'DELETE'
            });
            if (!response.ok && response.status !== 204) {
                console.error('Failed to notify backend about record deletion. Status:', response.status);
            }
        } catch (err) {
            console.error('Error contacting server for record deletion:', err);
        }
    }

    // Delete locally from localStorage
    const historyKey = `agro_assist_records_${currentSessionUser.email}`;
    let userRecords = JSON.parse(localStorage.getItem(historyKey) || '[]');
    
    // Filter matching either the id OR if id matches timestamp (as string or number)
    userRecords = userRecords.filter(r => {
        if (id && id !== 'undefined' && id !== 'null') {
            return String(r.id) !== String(id) && String(r.timestamp) !== String(id);
        }
        return true;
    });
    localStorage.setItem(historyKey, JSON.stringify(userRecords));

    // Visually fade out and remove card instantly
    if (cardElement) {
        cardElement.style.transition = 'all 0.3s ease';
        cardElement.style.opacity = '0';
        cardElement.style.transform = 'scale(0.9)';
        setTimeout(() => {
            cardElement.remove();
            
            // Check if there are any cards left to handle empty state dynamically
            const remainingCards = historyGrid.querySelectorAll('.card-element');
            if (remainingCards.length === 0) {
                loadPastRecords();
            }
        }, 300);
    } else {
        loadPastRecords();
    }
}


// ==========================================
// 5. DETAILED VIEW DIALOG MODAL
// ==========================================

function openDetailModal(record, formattedDate) {
    modalImagePreview.src = record.imageBase64;
    modalDate.textContent = formattedDate;
    modalLang.textContent = languageNames[record.langCode] || record.langCode;
    modalDiseaseName.textContent = record.diseaseName || 'N/A';
    modalCauseName.textContent = record.cause || 'N/A';
    const modalGrid = document.querySelector('#record-modal .remedies-grid');
    const modalEnglishCard = document.querySelector('#record-modal .remedy-card.english');

    if (record.langCode === 'en') {
        modalRemedyLangLabel.textContent = "Recommended Remedy";
        modalRemedyLang.textContent = record.remedy_en || record.remedy_local || 'N/A';
        modalEnglishCard.style.display = 'none';
        modalGrid.style.gridTemplateColumns = '1fr';
    } else {
        const localizedLabel = translations[record.langCode]?.remedy_lang_label || `Remedy (${languageNames[record.langCode]})`;
        modalRemedyLangLabel.textContent = localizedLabel;
        modalRemedyLang.textContent = record.remedy_local || 'N/A';
        modalRemedyEn.textContent = record.remedy_en || 'N/A';
        modalEnglishCard.style.display = 'flex';
        modalGrid.style.gridTemplateColumns = ''; // Fallback to CSS rules
    }

    // Badges & styling card classes
    const statusText = record.isHealthy ? 'Healthy' : 'Infected';
    modalHealthBadge.textContent = statusText;
    
    if (record.isHealthy) {
        modalHealthBadge.style.backgroundColor = '#E8F5E9';
        modalHealthBadge.style.color = '#2E7D32';
        modalHealthBadge.style.borderColor = '#C8E6C9';
        
        document.getElementById('modal-disease-card').style.backgroundColor = '#E8F5E9';
        document.getElementById('modal-disease-card').style.borderColor = '#C8E6C9';
        document.getElementById('modal-disease-card').querySelector('.detail-icon').style.color = '#2E7D32';
    } else {
        modalHealthBadge.style.backgroundColor = '#FFEBEE';
        modalHealthBadge.style.color = '#C62828';
        modalHealthBadge.style.borderColor = '#FFCDD2';

        document.getElementById('modal-disease-card').style.backgroundColor = '#FFF3CD';
        document.getElementById('modal-disease-card').style.borderColor = '#FFEBAA';
        document.getElementById('modal-disease-card').querySelector('.detail-icon').style.color = '#856404';
    }

    recordModal.style.display = 'flex';
}

closeModalBtn.addEventListener('click', () => {
    recordModal.style.display = 'none';
});

// Close modal when clicking background overlay
recordModal.addEventListener('click', (e) => {
    if (e.target === recordModal) {
        recordModal.style.display = 'none';
    }
});