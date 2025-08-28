package com.farmassist.smartfarming.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.farmassist.smartfarming.services.GeminiService; // Make sure your package is 'service', not 'services'

// ... imports

@RestController
@RequestMapping("/api/v1/diagnose")
@CrossOrigin("*")
public class DiagnosisController {

    @Autowired
    private GeminiService geminiService;

    @PostMapping("/plant")
    // Add @RequestParam("language") String language
    public ResponseEntity<String> diagnosePlant(@RequestParam("file") MultipartFile file,
            @RequestParam("language") String language) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Please select a file to upload.");
        }

        try {
            // Pass the language to the service
            String diagnosisJson = geminiService.getDiagnosis(file, language);
            return ResponseEntity.ok().header("Content-Type", "application/json").body(diagnosisJson);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError()
                    .body("{\"error\": \"Error during AI analysis: " + e.getMessage() + "\"}");
        }
    }
}