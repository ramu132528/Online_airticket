package com.simplyfly.backend.service;

import com.simplyfly.backend.model.Booking;
import com.simplyfly.backend.model.Flight;
import com.simplyfly.backend.repository.BookingRepository;
import com.simplyfly.backend.repository.FlightRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final FlightRepository flightRepository;

    // Book a flight
    public Booking bookFlight(String userEmail, Long flightId, int seats) {
        Flight flight = flightRepository.findById(flightId).orElse(null);
        if (flight == null) return null;

        double total = seats * flight.getPricePerSeat();

        Booking booking = new Booking();
        booking.setUserEmail(userEmail);
        booking.setFlightId(flightId);
        booking.setSeatsBooked(seats);
        booking.setTotalPrice(total);
        booking.setStatus("CONFIRMED");
        booking.setBookingDate(LocalDate.now().toString());

        return bookingRepository.save(booking);
    }

    // Get bookings for the logged-in user
    public List<Booking> getUserBookings(String email) {
        return bookingRepository.findByUserEmail(email);
    }

    // Admin can get all bookings by a specific user's email
    public List<Booking> getAllBookingsByEmail(String email) {
        return bookingRepository.findByUserEmail(email);
    }

    // Cancel a booking
    public String cancelBooking(Long id, String email) {
        Booking booking = bookingRepository.findById(id).orElse(null);
        if (booking != null && booking.getUserEmail().equals(email)) {
            booking.setStatus("CANCELLED");
            bookingRepository.save(booking);
            return "Booking cancelled successfully";
        }
        return "Booking not found or unauthorized";
    }
}
