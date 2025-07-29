package com.simplyfly.backend.service;

import com.simplyfly.backend.model.Booking;
import com.simplyfly.backend.model.Flight;
import com.simplyfly.backend.repository.BookingRepository;
import com.simplyfly.backend.repository.FlightRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FlightOwnerService {

    private final FlightRepository flightRepository;
    private final BookingRepository bookingRepository;

    public Flight addFlight(String ownerEmail, Flight flight) {
        flight.setCreatedBy(ownerEmail);
        return flightRepository.save(flight);
    }

    public List<Flight> getMyFlights(String ownerEmail) {
        return flightRepository.findAll()
                .stream()
                .filter(flight -> flight.getCreatedBy().equals(ownerEmail))
                .collect(Collectors.toList());
    }

    public List<Booking> getBookingsForMyFlights(String ownerEmail) {
        List<Long> myFlightIds = flightRepository.findAll().stream()
                .filter(flight -> flight.getCreatedBy().equals(ownerEmail))
                .map(Flight::getId)
                .collect(Collectors.toList());

        return bookingRepository.findAll().stream()
                .filter(b -> myFlightIds.contains(b.getFlightId()))
                .collect(Collectors.toList());
    }
}
