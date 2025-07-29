package com.simplyfly.backend.controller;

import com.simplyfly.backend.model.UserDTO;
import com.simplyfly.backend.model.LoginDTO;
import com.simplyfly.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDTO userDTO) {
        String message = authService.register(userDTO);
        Map<String, String> response = new HashMap<>();
        response.put("message", message);
        System.out.println("Registration Message: " + message);
        return ResponseEntity.ok(response); // returning JSON response
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO) {
        return ResponseEntity.ok(authService.login(loginDTO));
    }
}
