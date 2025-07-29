package com.simplyfly.backend.service;

import com.simplyfly.backend.model.Booking;
import com.simplyfly.backend.model.Flight;
import com.simplyfly.backend.model.User;
import com.simplyfly.backend.repository.BookingRepository;
import com.simplyfly.backend.repository.FlightRepository;
import com.simplyfly.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserRepository userRepository;
    private final FlightRepository flightRepository;
    private final BookingRepository bookingRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public String deleteUser(Long id) {
        userRepository.deleteById(id);
        return "User deleted";
    }

    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    public String deleteFlight(Long id) {
        flightRepository.deleteById(id);
        return "Flight deleted";
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public String deleteBooking(Long id) {
        bookingRepository.deleteById(id);
        return "Booking deleted";
    }
}
