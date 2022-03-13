package com.foodnect.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

import static com.foodnect.constants.ApplicationConstants.ACCESS_TOKEN_VALID_TILL;
import static com.foodnect.constants.ApplicationConstants.MY_SECRET_KEY;

public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    //check userid and password and if found return jwt token in header

    //important need constructor
    private AuthenticationManager authenticationManager;
    //private String MY_SECRET_KEY = "testSecretKey";

    public CustomAuthenticationFilter(AuthenticationManager authenticationManager){
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        // Content-Type: application/x-www-form-urlencoded: => username=name&password=pass
        //localhost:8080/users?username=jim&password=123
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);

        //sets isAuthenticated = true/false
        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        //spring user
        User user = (User) authResult.getPrincipal();
        String accessToken = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + ACCESS_TOKEN_VALID_TILL))
                .withIssuedAt(new Date(System.currentTimeMillis()))
                .sign(Algorithm.HMAC256(MY_SECRET_KEY));

        response.setHeader("access_token", accessToken);
        //POST: localhost:8080/login?username=john&password=123
        //in header you should see access_token: <token generated>
        //take this generated token to jwt.io and verify the payload and signature with above signature
    }
}
