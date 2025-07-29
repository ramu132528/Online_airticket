package com.simplyfly.backend.service;

import com.simplyfly.backend.model.Flight;
import com.simplyfly.backend.repository.FlightRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FlightService {

    private final FlightRepository flightRepository;

    public List<Flight> searchFlights(String origin, String destination) {
        return flightRepository.findByOriginAndDestination(origin, destination);
    }

    public Flight addFlight(Flight flight) {
        return flightRepository.save(flight);
    }
}
