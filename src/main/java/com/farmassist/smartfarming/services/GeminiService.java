package com.farmassist.smartfarming.services;

import java.util.Base64;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

@Service
public class GeminiService {

    @Value("${google.api.key}")
    private String apiKey;

    private static final String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=";

    public String getDiagnosis(MultipartFile file, String language) throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + apiKey;

        String base64Data = Base64.getEncoder().encodeToString(file.getBytes());
        if (base64Data != null) {
            if (base64Data.contains(",")) {
                base64Data = base64Data.split(",")[1];
            }
            base64Data = base64Data.trim().replaceAll("\\r?\\n|\\s", "");
        }

        // The prompt is now dynamic and includes the selected language
        String prompt = "You are an expert plant pathologist. Analyze the attached crop image. " +
                        "You MUST return your diagnosis strictly formatted as a clean, valid JSON object matching this structure:\n" +
                        "{\n" +
                        "  \"status\": \"Infected\",\n" +
                        "  \"disease\": \"Leaf Spot Disease\",\n" +
                        "  \"cause\": \"...\",\n" +
                        "  \"remedy\": \"...\",\n" +
                        "  \"remedy_en\": \"...\"\n" +
                        "}\n" +
                        "If the leaf shows any visible spots, lesions, discoloration, or pest damage, set the status to 'Infected' and provide the correct disease name. Only set status to 'Healthy' if the leaf is completely spotless and vibrant green.\n" +
                        "CRITICAL INSTRUCTION: The values for 'disease', 'cause', and 'remedy' MUST be written entirely in the following language and its native script: " + language + ".\n" +
                        "However, the values for 'status' and 'remedy_en' MUST be written entirely in English. Do not translate the 'status' or 'remedy_en' values into the local regional language.";
        
        JSONObject textPart = new JSONObject().put("text", prompt);
        JSONObject inlineData = new JSONObject()
                .put("mimeType", "image/jpeg")
                .put("data", base64Data);
        JSONObject imagePart = new JSONObject().put("inlineData", inlineData);
        JSONArray parts = new JSONArray().put(textPart).put(imagePart);
        JSONObject content = new JSONObject().put("parts", parts);
        JSONObject requestBody = new JSONObject().put("contents", new JSONArray().put(content));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>(requestBody.toString(), headers);

        int maxRetries = 1;
        ResponseEntity<String> response = null;
        Exception lastException = null;

        for (int i = 1; i <= maxRetries; i++) {
            try {
                response = restTemplate.postForEntity(url, entity, String.class);
                break; // success
            } catch (org.springframework.web.client.HttpStatusCodeException ex) {
                lastException = ex;
                System.out.println("Google API Response Reason: " + ex.getResponseBodyAsString());
                System.err.println("Gemini service HTTP error (Attempt " + i + " of " + maxRetries + "): " + ex.getStatusCode() + " - " + ex.getResponseBodyAsString());
                ex.printStackTrace();
                if (i < maxRetries) {
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                        throw ie;
                    }
                }
            } catch (org.springframework.web.client.RestClientException e) {
                lastException = e;
                System.err.println("Gemini service call failed (Attempt " + i + " of " + maxRetries + "): " + e.getMessage());
                e.printStackTrace();
                if (i < maxRetries) {
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                        throw ie;
                    }
                }
            }
        }

        if (response == null) {
            throw new Exception("Gemini API returned null response. Last exception: " + (lastException != null ? lastException.getMessage() : "none"), lastException);
        }

        try {
            JSONObject responseJson = new JSONObject(response.getBody());
            String aiContent = responseJson.getJSONArray("candidates")
                                         .getJSONObject(0)
                                         .getJSONObject("content")
                                         .getJSONArray("parts")
                                         .getJSONObject(0)
                                         .getString("text");
            // Clean the response to extract the JSON object
            String cleanedJson = cleanJson(aiContent);
            
            // Parse and robustly extract keys
            JSONObject parsedJson = new JSONObject(cleanedJson);
            
            String status = getField(parsedJson, new String[]{"status", "plant_status", "health_status"}, "Infected");
            String disease = getField(parsedJson, new String[]{"diseaseName", "disease", "disease_name", "diagnosis", "name"}, "Analysis Timeout");
            String cause = getField(parsedJson, new String[]{"cause", "root_cause", "reason", "cause_of_disease"}, "Parsing issue");
            
            String remedyLocal = getField(parsedJson, new String[]{"remedy_local", "remedy", "remedies", "remedyLocal", "treatment", "solution"}, "Please re-upload a clearer image.");
            String remedyEn = getField(parsedJson, new String[]{"remedy_en", "remedyEn", "remedy_english"}, remedyLocal);
            
            JSONObject result = new JSONObject();
            result.put("status", status);
            result.put("diseaseName", disease);
            result.put("disease", disease);
            result.put("cause", cause);
            result.put("remedy", remedyLocal);
            result.put("remedy_local", remedyLocal);
            result.put("remedy_en", remedyEn);
            
            return result.toString();
        } catch (Exception e) {
            System.err.println("Gemini response parsing failed: " + e.getMessage());
            e.printStackTrace();
            throw e;
        }
    }

    private String getLocalizedMockResponse(String language) {
        String lang = (language != null) ? language.trim().toLowerCase() : "english";
        
        String disease = "Leaf Blast Fungal Spot";
        String cause = "High ambient humidity and overcrowding of dense crop foliage.";
        String remedy = "Apply a copper-based fungicide, prune the lower leaves to improve airflow, and avoid overhead sprinkler watering in the morning.";
        
        if (lang.contains("hindi") || lang.contains("हिन्दी") || lang.contains("हिंदी")) {
            disease = "लीफ ब्लास्ट फंगल स्पॉट (पत्ती झुलसा)";
            cause = "उच्च परिवेशीय आर्द्रता और घनी फसल की पत्तियों का बहुत पास-पास होना।";
            remedy = "तांबा-आधारित कवकनाशी (कॉपर फंगीसाइड) लगाएं, हवा का संचार बढ़ाने के लिए निचली पत्तियों की छंटाई करें, और सुबह के समय फव्वारा सिंचाई से बचें।";
        } else if (lang.contains("marathi") || lang.contains("मराठी")) {
            disease = "लीफ ब्लास्ट फंगल स्पॉट (पानावरील करपा रोग)";
            cause = "हवेतील जास्त आर्द्रता आणि पिकांची दाट लागवड.";
            remedy = "तांबे-युक्त बुरशीनाशक वापरा, हवेचा प्रवाह वाढवण्यासाठी खालील पाने छाटा आणि सकाळी स्प्रिंकलरने पाणी देणे टाळा.";
        } else if (lang.contains("bengali") || lang.contains("বাংলা")) {
            disease = "লিফ ব্লাস্ট ফাঙ্গাল স্পট (পাতা ঝলসানো রোগ)";
            cause = "অতিরিক্ত আর্দ্রতা এবং ঘন ফসলের পাতার কারণে বাতাস চলাচল বাধাগ্রস্ত হওয়া।";
            remedy = "কপার-যুক্ত ছত্রাকনাশক ব্যবহার করুন, বায়ু চলাচল বৃদ্ধির জন্য নীচের পাতা ছেঁটে দিন এবং সকালে স্প্রিঙ্কলার সেচ দেওয়া বন্ধ করুন।";
        } else if (lang.contains("odia") || lang.contains("ଓଡ଼ିଆ") || lang.contains("oriya")) {
            disease = "ଲିଫ୍ ବ୍ଲାଷ୍ଟ କବକ ଜନିତ ଚିହ୍ନ (ପତ୍ର ଝାଉଁଳିବା ରୋଗ)";
            cause = "ବାୟୁମଣ୍ଡଳରେ ଅଧିକ ଆର୍ଦ୍ରତା ଏବଂ ଘନ ଫସଲ ପତ୍ର ରହିବା।";
            remedy = "ତମ୍ବା-ଆଧାରିତ କବକନାଶକ ପ୍ରୟୋଗ କରନ୍ତୁ, ପବନ ଚଳାଚଳ ସୁଧାରିବା ପାଇଁ ତଳ ପତ୍ରଗୁଡ଼ିକୁ କାଟି ଦିଅନ୍ତୁ ଏବଂ ସକାଳେ ସ୍ପ୍ରିଙ୍କଲର୍ ଜଳସେଚନ ବନ୍ଦ କରନ୍ତୁ।";
        }
        
        JSONObject mock = new JSONObject();
        mock.put("status", "Infected");
        mock.put("disease", disease);
        mock.put("diseaseName", disease);
        mock.put("cause", cause);
        mock.put("remedy", remedy);
        mock.put("remedy_local", remedy);
        mock.put("remedy_en", "Apply a copper-based fungicide, prune the lower leaves to improve airflow, and avoid overhead sprinkler watering in the morning.");
        
        return mock.toString();
    }

    private String getField(JSONObject json, String[] candidates, String defaultValue) {
        for (String key : candidates) {
            if (json.has(key) && !json.isNull(key)) {
                return json.get(key).toString();
            }
            // Check case-insensitive and support fuzzy match (removing non-alphanumeric chars)
            for (String actualKey : json.keySet()) {
                if (actualKey.equalsIgnoreCase(key)) {
                    return json.get(actualKey).toString();
                }
                String cleanActual = actualKey.replaceAll("[^a-zA-Z0-9]", "");
                String cleanTarget = key.replaceAll("[^a-zA-Z0-9]", "");
                if (!cleanActual.isEmpty() && cleanActual.equalsIgnoreCase(cleanTarget)) {
                    return json.get(actualKey).toString();
                }
            }
        }
        return defaultValue;
    }

    private String cleanJson(String response) {
        if (response == null) {
            return "{}";
        }
        response = response.trim();
        int firstBrace = response.indexOf('{');
        int lastBrace = response.lastIndexOf('}');
        if (firstBrace != -1 && lastBrace != -1 && lastBrace >= firstBrace) {
            return response.substring(firstBrace, lastBrace + 1);
        }
        return response;
    }
}