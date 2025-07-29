package com.simplyfly.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "flights")
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String flightName;
    private String flightNumber;

    private String origin;
    private String destination;

    private String departureTime;
    private String arrivalTime;

    private int totalSeats;
    private double pricePerSeat;

    private double baggageCheckIn;  // kg/adult
    private double baggageCabin;    // kg/adult

    private String createdBy;  // Flight Owner email

}
