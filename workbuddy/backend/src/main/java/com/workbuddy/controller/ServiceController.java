package com.workbuddy.controller;

import com.workbuddy.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceController {

    @Autowired
    private ServiceService serviceService;

    @GetMapping
    public List<com.workbuddy.model.Service> getAllServices() {
        return serviceService.getAllServices();
    }

    @GetMapping("/{id}")
    public ResponseEntity<com.workbuddy.model.Service> getServiceById(@PathVariable Long id) {
        return serviceService.getServiceById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public com.workbuddy.model.Service createService(@RequestBody com.workbuddy.model.Service service) {
        return serviceService.saveService(service);
    }

    @PutMapping("/{id}")
    public ResponseEntity<com.workbuddy.model.Service> updateService(@PathVariable Long id, @RequestBody com.workbuddy.model.Service serviceDetails) {
        return serviceService.updateService(id, serviceDetails)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        return serviceService.deleteService(id) ?
                ResponseEntity.ok().build() :
                ResponseEntity.notFound().build();
    }

    @PostMapping("/{id}/upload-image")
    public ResponseEntity<String> uploadServiceImage(@PathVariable Long id, @RequestParam("image") MultipartFile image) {
        try {
            String imageUrl = serviceService.saveServiceImage(id, image);
            return ResponseEntity.ok(imageUrl);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to upload image: " + e.getMessage());
        }
    }
}