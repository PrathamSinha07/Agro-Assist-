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

    private static final String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=";

    public String getDiagnosis(MultipartFile file, String language) throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        String url = GEMINI_API_URL + apiKey;

        String base64Image = Base64.getEncoder().encodeToString(file.getBytes());

        // The prompt is now dynamic and includes the selected language
        String prompt = "You are an expert plant pathologist. Analyze this image of a plant leaf. " +
                        "Identify the disease. Respond ONLY with a JSON object in this exact format: " +
                        "{\"diseaseName\": \"...\", \"cause\": \"...\", \"remedy_local\": \"... (remedy in " + language + ")\", \"remedy_en\": \"... (remedy in English)\"}. " +
                        "If the plant is healthy, say 'Healthy Plant' in the diseaseName field and provide general care tips for the remedies.";
        
        // ... the rest of the method remains the same
        JSONObject textPart = new JSONObject().put("text", prompt);
        JSONObject imagePart = new JSONObject().put("inline_data", new JSONObject().put("mime_type", file.getContentType()).put("data", base64Image));
        JSONArray parts = new JSONArray().put(textPart).put(imagePart);
        JSONObject content = new JSONObject().put("parts", parts);
        JSONObject requestBody = new JSONObject().put("contents", new JSONArray().put(content));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>(requestBody.toString(), headers);
        ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);

        JSONObject responseJson = new JSONObject(response.getBody());
        String aiContent = responseJson.getJSONArray("candidates")
                                     .getJSONObject(0)
                                     .getJSONObject("content")
                                     .getJSONArray("parts")
                                     .getJSONObject(0)
                                     .getString("text");
        // Clean the response to remove markdown formatting
String cleanedJson = aiContent.replace("```json", "").replace("```", "").trim();

return cleanedJson;
    }
}