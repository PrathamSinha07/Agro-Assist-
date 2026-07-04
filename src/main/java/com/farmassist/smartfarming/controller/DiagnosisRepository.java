package com.farmassist.smartfarming.controller;

import org.springframework.stereotype.Component;

@Component
public class DiagnosisRepository {
    public void deleteById(Long id) {
        System.out.println("DiagnosisRepository: Deleting record from database with ID: " + id);
    }
}
