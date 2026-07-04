package com.farmassist.smartfarming.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;
import com.farmassist.smartfarming.services.GeminiService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class DiagnosisController {

    @Autowired
    private GeminiService geminiService;

    @Autowired
    private DiagnosisRepository diagnosisRepository;

    @PostMapping("/v1/diagnose/plant")
    public ResponseEntity<String> diagnosePlant(@RequestParam("file") MultipartFile file,
            @RequestParam(value = "language", defaultValue = "English") String language) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest()
                    .header("Content-Type", "application/json")
                    .body("{\"error\": \"Please select a file to upload.\"}");
        }

        String contentType = file.getContentType();
        if (contentType == null || !contentType.startsWith("image/")) {
            return ResponseEntity.badRequest()
                    .header("Content-Type", "application/json")
                    .body("{\"error\": \"Only image files are allowed.\"}");
        }

        try {
            // Pass the language to the service
            String diagnosisJson = geminiService.getDiagnosis(file, language);
            return ResponseEntity.ok().header("Content-Type", "application/json").body(diagnosisJson);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500)
                    .header("Content-Type", "application/json")
                    .body("{\"error\": \"Diagnosis failed: " + e.getMessage() + "\"}");
        }
    }

    @DeleteMapping("/diagnose/{id}")
    public ResponseEntity<Void> deleteRecord(@PathVariable("id") Long id) {
        System.out.println("Deleting record with ID: " + id);
        diagnosisRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}