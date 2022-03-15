package com.foodnect.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.stereotype.Service;

import java.util.Date;

import static com.foodnect.constants.ApplicationConstants.ACCESS_TOKEN_VALID_TILL;
import static com.foodnect.constants.ApplicationConstants.MY_SECRET_KEY;
@Service
public class JwtUtil {

    public String generateJwtToken(String username){
        String accessToken = JWT.create()
                .withSubject(username)
                .withExpiresAt(new Date(System.currentTimeMillis() + ACCESS_TOKEN_VALID_TILL))   //10 mins
                .withIssuedAt(new Date(System.currentTimeMillis()))
                .sign(Algorithm.HMAC256(MY_SECRET_KEY));
        return accessToken;
    }

}
