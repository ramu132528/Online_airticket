package com.simplyfly.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userEmail;     // to identify user from JWT
    private String email;

    private Long flightId;
    private int seatsBooked;
    private double totalPrice;

    private String status;  // e.g., "CONFIRMED", "CANCELLED"
    private String bookingDate;
}
