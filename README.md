# Agro Assist | Multilingual AI Farming Assistant

An advanced full-stack web application designed to empower farmers with real-time AI crop diagnostics and sustainable agricultural insights. The platform features an integrated multilingual user dashboard, responsive weather tracking tools, and an automated cloud-based diagnostic proxy engine using the Google Gemini API.

**🔗 Live Demo:** [https://agro-assist-5nt3.onrender.com](https://agro-assist-5nt3.onrender.com)

---

## 🚀 Key Features

*   **AI-Powered Crop Pathology:** High-speed computer vision pipeline that analyzes leaf uploads to accurately identify crop diseases and deliver immediate treatment strategies.
*   **Multilingual Support Architecture:** Deep localization integration (supporting English, Hindi, Marathi, Bengali, and Odia language mapping) ensuring seamless accessibility for regional agricultural communities.
*   **Decoupled Architecture & Proxy Security:** Enterprise-grade security protocol routing frontend AI calls through a secure Java Spring Boot backend proxy to protect private API credentials.
*   **Elegant Asynchronous Toast UI:** Fully custom modern notification system replaces native browser boxes with animated, colored toast flags for clear error boundary and confirmation handling.
*   **Custom Theme Confirmation Modals:** Custom promise-based theme modals replace browser-default `confirm()` dialogues, offering a consistent visual design style.
*   **24/7 Production Availability:** Containerized with Docker and continuously deployed on high-availability cloud infrastructure.

---

## 🛠️ Tech Stack & Infrastructure

*   **Backend:** Java, Spring Boot (v3.2.5), REST APIs, Maven (Dependency Management)
*   **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES6+), Regional Language Translations
*   **AI Integration:** Google Gemini API (`gemini-2.5-flash` model for Generative Language & Vision Services)
*   **Containerization & DevOps:** Docker, Multi-stage Compilation Layouts
*   **Hosting Engine:** Render (Dockerized Linux Container Services)

---

## 🐳 Architecture Overview & Secure Proxy Workflow

Unlike standard client-side applications that leak private variables to the public browser inspection tab, Agro Assist enforces a professional decoupled architecture:

```text
[Frontend Dashboard UI (Browser)] 
               │
               ▼ (1) Upload Leaf Image + Select Language
[Java Spring Boot Controller Proxy] ◄─── (2) Injected Private Cloud Environment Variable (GEMINI_API_KEY)
               │
               ▼ (3) Encrypted Backend-to-Backend HTTPS Call
[Google Gemini AI Engine Services]
```

### Data Flow Details:
1. **Frontend Request:** The client browser sends a POST request with the leaf image stream and desired language using a relative path to the Spring Boot backend: `/api/v1/diagnose/plant`.
2. **Backend Interception & Key Injection:** The Java Spring Boot controller processes the request. The Gemini API key is securely injected using `@Value("${google.api.key}")` from the host system environment variables (`GEMINI_API_KEY`), keeping the key completely hidden from the public client.
3. **Gemini API Call:** The Spring Boot backend makes a server-to-server POST call using `RestTemplate` to the Gemini API (`https://generativelanguage.googleapis.com/...`). It formats the payload with `responseMimeType: "application/json"` to enforce a strict JSON output matching:
   ```json
   {
     "status": "Infected/Healthy",
     "disease": "Disease Name",
     "cause": "Cause Details",
     "remedy": "Remedy details in selected language",
     "remedy_en": "Remedy details in English"
   }
   ```
4. **Response Delivery:** The backend receives and maps the response directly back to the frontend dashboard, which displays it beautifully on the UI cards and updates the local storage history logger.

---

## 💻 Local Environment Setup

### Prerequisites
- Java Development Kit (JDK) 17
- Maven 3+ or the included maven wrapper (`mvnw`)
- Docker (optional, for local container runs)

### Steps
1. **Clone the repository and navigate to the project directory:**
   ```bash
   cd smart-farming
   ```
2. **Set the Gemini API Key Environment Variable:**
   - **Windows (PowerShell):**
     ```powershell
     $env:GEMINI_API_KEY="your-api-key-here"
     ```
   - **Linux/macOS:**
     ```bash
     export GEMINI_API_KEY="your-api-key-here"
     ```
3. **Run the Application locally:**
   - **Windows:**
     ```bash
     .\mvnw.cmd spring-boot:run
     ```
   - **Linux/macOS:**
     ```bash
     ./mvnw spring-boot:run
     ```
4. **Access the platform at:** [http://localhost:8081](http://localhost:8081)

---

## 🎨 Custom UI Notification and Dialog Systems

To enhance the visual fidelity and user experience, browser alerts have been completely replaced with a custom-engineered UI notification framework:

### Asynchronous Toast System
- Built on top of a fixed toast-container using CSS transitions and slide-in keyframe animations.
- Custom colors and icons automatically map to success and error states.
- System error masking logic hides raw code stacktraces or raw HTTP exceptions (like 401 Unauthorized or Quota Exceeded), presenting them as polite, user-friendly notices.

### Theme-Aligned Modal Confirmation
- Deleting search history items triggers a promise-based dialog matching the dark green forest color palette of the dashboard.
- Utilizes event listeners and JS Promises to await user confirmation without freezing the browser's thread:
  ```javascript
  const confirmed = await showConfirm("Are you sure you want to delete this search history record?");
  ```
