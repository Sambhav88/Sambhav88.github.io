package com.workbuddy.service;

import com.workbuddy.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    private final String UPLOAD_DIR = "uploads/services/";

    public List<com.workbuddy.model.Service> getAllServices() {
        return serviceRepository.findAll();
    }

    public Optional<com.workbuddy.model.Service> getServiceById(Long id) {
        return serviceRepository.findById(id);
    }

    public com.workbuddy.model.Service saveService(com.workbuddy.model.Service service) {
        service.setCreatedAt(LocalDateTime.now());
        service.setUpdatedAt(LocalDateTime.now());
        return serviceRepository.save(service);
    }

    public Optional<com.workbuddy.model.Service> updateService(Long id, com.workbuddy.model.Service serviceDetails) {
        return serviceRepository.findById(id)
                .map(service -> {
                    service.setName(serviceDetails.getName());
                    service.setCategory(serviceDetails.getCategory());
                    service.setDescription(serviceDetails.getDescription());
                    service.setBasePrice(serviceDetails.getBasePrice());
                    service.setIsActive(serviceDetails.getIsActive());
                    service.setUpdatedAt(LocalDateTime.now());
                    return serviceRepository.save(service);
                });
    }

    public boolean deleteService(Long id) {
        return serviceRepository.findById(id)
                .map(service -> {
                    serviceRepository.delete(service);
                    return true;
                })
                .orElse(false);
    }

    public String saveServiceImage(Long serviceId, MultipartFile image) throws IOException {
        // Create upload directory if it doesn't exist
        Path uploadPath = Paths.get(UPLOAD_DIR);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Generate unique filename
        String originalFilename = image.getOriginalFilename();
        String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
        String filename = UUID.randomUUID().toString() + extension;
        
        // Save file to disk
        Path filePath = uploadPath.resolve(filename);
        Files.write(filePath, image.getBytes());

        // Update service with image URL
        String imageUrl = "/uploads/services/" + filename;
        serviceRepository.findById(serviceId).ifPresent(service -> {
            service.setImageUrl(imageUrl);
            service.setUpdatedAt(LocalDateTime.now());
            serviceRepository.save(service);
        });

        return imageUrl;
    }
}