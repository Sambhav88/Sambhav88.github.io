package com.workbuddy.service;

import com.workbuddy.model.Worker;
import com.workbuddy.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class WorkerService {

    @Autowired
    private WorkerRepository workerRepository;

    public List<Worker> getAllWorkers() {
        return workerRepository.findAll();
    }

    public Optional<Worker> getWorkerById(Long id) {
        return workerRepository.findById(id);
    }

    public Worker saveWorker(Worker worker) {
        worker.setCreatedAt(LocalDateTime.now());
        worker.setUpdatedAt(LocalDateTime.now());
        return workerRepository.save(worker);
    }

    public Optional<Worker> updateWorker(Long id, Worker workerDetails) {
        return workerRepository.findById(id)
                .map(worker -> {
                    worker.setUserId(workerDetails.getUserId());
                    worker.setSkill(workerDetails.getSkill());
                    worker.setLocation(workerDetails.getLocation());
                    worker.setIdProofType(workerDetails.getIdProofType());
                    worker.setIdProofNumber(workerDetails.getIdProofNumber());
                    worker.setRating(workerDetails.getRating());
                    worker.setIsAvailable(workerDetails.getIsAvailable());
                    worker.setUpdatedAt(LocalDateTime.now());
                    return workerRepository.save(worker);
                });
    }

    public boolean deleteWorker(Long id) {
        return workerRepository.findById(id)
                .map(worker -> {
                    workerRepository.delete(worker);
                    return true;
                })
                .orElse(false);
    }

    public Optional<Worker> updateWorkerAvailability(Long id, Boolean isAvailable) {
        return workerRepository.findById(id)
                .map(worker -> {
                    worker.setIsAvailable(isAvailable);
                    worker.setUpdatedAt(LocalDateTime.now());
                    return workerRepository.save(worker);
                });
    }

    public List<Worker> getAvailableWorkers() {
        return workerRepository.findByIsAvailableTrue();
    }

    // Added methods to handle image uploads
    public String saveWorkerIdProofImage(Long id, MultipartFile image) throws Exception {
        // This is a placeholder implementation
        // In a real application, you would save the image to storage and return the URL
        return "http://localhost:8080/images/id-proof/" + id + ".jpg";
    }

    public String saveWorkerProfileImage(Long id, MultipartFile image) throws Exception {
        // This is a placeholder implementation
        // In a real application, you would save the image to storage and return the URL
        return "http://localhost:8080/images/profile/" + id + ".jpg";
    }
}