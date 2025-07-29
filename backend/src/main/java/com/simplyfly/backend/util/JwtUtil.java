package com.simplyfly.backend.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    private final String jwtSecret = "thisisaverysecretkeyforjwt1234567890"; // should be 32+ chars
    private final long jwtExpirationMs = 86400000; // 1 day

    private final Key key = Keys.hmacShaKeyFor(jwtSecret.getBytes());

    // Generate JWT token from email (used as subject)
    public String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(key)
                .compact();
    }

    // Extract email from token
    public String getEmailFromToken(String token) {
        return extractAllClaims(token).getSubject();
    }

    // Alias for getEmailFromToken - commonly used in Spring Security
    public String extractUsername(String token) {
        return getEmailFromToken(token);
    }

    // Validate JWT token
    public boolean validateToken(String token) {
        try {
            extractAllClaims(token); // will throw if invalid/expired
            return true;
        } catch (JwtException e) {
            return false;
        }
    }

    // Internal: extract all claims
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
