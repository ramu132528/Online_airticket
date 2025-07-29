package com.simplyfly.backend.repository;

import com.simplyfly.backend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUserEmail(String userEmail);
    List<Booking> findByEmail(String email);
}
