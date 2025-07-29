package com.simplyfly.backend.controller;

import com.simplyfly.backend.model.Booking;
import com.simplyfly.backend.model.Flight;
import com.simplyfly.backend.service.FlightOwnerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/owner")
@RequiredArgsConstructor
public class FlightOwnerController {

    private final FlightOwnerService ownerService;

    @PostMapping("/add-flight")
    public ResponseEntity<Flight> addFlight(@RequestBody Flight flight, @AuthenticationPrincipal UserDetails user) {
        return ResponseEntity.ok(ownerService.addFlight(user.getUsername(), flight));
    }

    @GetMapping("/my-flights")
    public ResponseEntity<List<Flight>> myFlights(@AuthenticationPrincipal UserDetails user) {
        return ResponseEntity.ok(ownerService.getMyFlights(user.getUsername()));
    }

    @GetMapping("/my-bookings")
    public ResponseEntity<List<Booking>> myBookings(@AuthenticationPrincipal UserDetails user) {
        return ResponseEntity.ok(ownerService.getBookingsForMyFlights(user.getUsername()));
    }
}
