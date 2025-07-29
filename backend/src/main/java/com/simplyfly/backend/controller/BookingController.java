package com.simplyfly.backend.controller;

import com.simplyfly.backend.model.Booking;
import com.simplyfly.backend.service.BookingService;
import com.simplyfly.backend.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;
    private final JwtUtil jwtUtil;

    // Book a flight
    @PostMapping("/book")
    public ResponseEntity<Booking> bookFlight(
            @RequestHeader("Authorization") String token,
            @RequestParam Long flightId,
            @RequestParam int seats) {

        String email = jwtUtil.getEmailFromToken(token.substring(7)); // updated method name
        Booking booking = bookingService.bookFlight(email, flightId, seats);
        return ResponseEntity.ok(booking);
    }

    // Get all user's bookings (including CANCELLED)
    @GetMapping("/my")
    public ResponseEntity<List<Booking>> myBookings(@RequestHeader("Authorization") String token) {
        String email = jwtUtil.getEmailFromToken(token.substring(7)); // updated method name
        List<Booking> bookings = bookingService.getAllBookingsByEmail(email);
        return ResponseEntity.ok(bookings);
    }

    // Cancel a booking
    @DeleteMapping("/cancel/{id}")
    public ResponseEntity<String> cancelBooking(
            @RequestHeader("Authorization") String token,
            @PathVariable Long id) {

        String email = jwtUtil.getEmailFromToken(token.substring(7)); // updated method name
        return ResponseEntity.ok(bookingService.cancelBooking(id, email));
    }
}
