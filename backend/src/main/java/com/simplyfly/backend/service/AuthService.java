package com.simplyfly.backend.service;

import com.simplyfly.backend.model.User;
import com.simplyfly.backend.model.UserDTO;
import com.simplyfly.backend.model.LoginDTO;
import com.simplyfly.backend.model.LoginResponse;
import com.simplyfly.backend.repository.UserRepository;
import com.simplyfly.backend.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public String register(UserDTO userDTO) {
        // Check if user already exists by email
        if (userRepository.findByEmail(userDTO.getEmail()).isPresent()) {
            return "User already registered with this email";
        }

        User user = new User();
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setRole(userDTO.getRole().toUpperCase()); // Accept custom roles like FLIGHT_OWNER, ADMIN, etc.

        userRepository.save(user);
        return "User registered successfully as " + userDTO.getRole().toUpperCase();
    }

    public LoginResponse login(LoginDTO loginDTO) {
        User user = userRepository.findByEmail(loginDTO.getEmail()).orElse(null);

        if (user == null || !passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            return new LoginResponse(null, "Invalid email or password");
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return new LoginResponse(token, "Login successful");
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
}
