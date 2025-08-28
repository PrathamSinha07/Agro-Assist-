// --- Language Translation Setup ---
const translations = {
    hi: {
        title: "स्मार्ट फार्मिंग असिस्टेंट",
        lang_select_label: "भाषा चुनें:",
        upload_label: "अपनी फसल का फोटो अपलोड करें:",
        analyze_button: "विश्लेषण करें",
        loading_text: "विश्लेषण हो रहा है, कृपया प्रतीक्षा करें...",
        results_header: "विश्लेषण परिणाम",
        disease_label: "रोग:",
        cause_label: "कारण:",
        remedy_lang_label: "उपाय (हिंदी में):"
    },
    mr: {
        title: "स्मार्ट शेतकरी सहाय्यक",
        lang_select_label: "भाषा निवडा:",
        upload_label: "तुमच्या पिकाचा फोटो अपलोड करा:",
        analyze_button: "विश्लेषण करा",
        loading_text: "कृपया थांबा, विश्लेषण चालू आहे...",
        results_header: "विश्लेषण परिणाम",
        disease_label: "आजार:",
        cause_label: "कारण:",
        remedy_lang_label: "उपाय (मराठीत):"
    },
    bn: {
        title: "স্মার্ট ফার্মিং অ্যাসিস্ট্যান্ট",
        lang_select_label: "ভাষা নির্বাচন করুন:",
        upload_label: "আপনার ফসলের একটি ছবি আপলোড করুন:",
        analyze_button: "বিশ্লেষণ করুন",
        loading_text: "বিশ্লেষণ করা হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...",
        results_header: "বিশ্লেষণের ফলাফল",
        disease_label: "রোগ:",
        cause_label: "কারণ:",
        remedy_lang_label: "প্রতিকার (বাংলায়):"
    },
    or: {
        title: "ସ୍ମାର୍ଟ ଫାର୍ମିଂ ସହାୟକ",
        lang_select_label: "ଭାଷା ବାଛନ୍ତୁ:",
        upload_label: "ଆପଣଙ୍କ ଫସଲର ଏକ ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ:",
        analyze_button: "ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
        loading_text: "ବିଶ୍ଳେଷଣ କରାଯାଉଛି, ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ...",
        results_header: "ବିଶ୍ଳେଷଣ ଫଳାଫଳ",
        disease_label: "ରୋଗ:",
        cause_label: "କାରଣ:",
        remedy_lang_label: "ପ୍ରତିକାର (ଓଡ଼ିଆରେ):"
    }
};

const langSelector = document.getElementById('language-selector');

function setLanguage(lang) {
    const langData = translations[lang];
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (langData[key]) {
            elem.textContent = langData[key];
        }
    });
}

langSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
});

// Set initial language to Hindi
setLanguage('hi');

// --- Form Submission Logic ---
document.getElementById('upload-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const loader = document.getElementById('loader');
    const resultsDiv = document.getElementById('results');
    const selectedLanguage = langSelector.options[langSelector.selectedIndex].text.split(' ')[1].replace('(', '').replace(')', '');

    if (!file) {
        alert("Please select a file first.");
        return;
    }

    const formData = new FormData();
    formData.append('file', file);
    // We will send the selected language to the backend
    formData.append('language', selectedLanguage);

    loader.style.display = 'block';
    resultsDiv.style.display = 'none';

    try {
        const response = await fetch('/api/v1/diagnose/plant', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok. Status: ' + response.status);
        }

        const resultJson = await response.json(); 

        document.getElementById('disease-name').textContent = resultJson.diseaseName;
        document.getElementById('cause-name').textContent = resultJson.cause;
        // The API will now return a field for the selected language remedy
        document.getElementById('remedy-lang').textContent = resultJson.remedy_local;
        document.getElementById('remedy-en').textContent = resultJson.remedy_en;

        resultsDiv.style.display = 'block';

    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during analysis. Please try again.');
    } finally {
        loader.style.display = 'none';
    }
});