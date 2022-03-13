package com.foodnect.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

import static com.foodnect.constants.ApplicationConstants.MY_SECRET_KEY;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@Slf4j
public class CustomAuthorizationFilter extends OncePerRequestFilter {
    //every request will be intercepted by this filter and determine if user has authorization
    //this comes after authentication in subsequent resource access request

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        if(request.getServletPath().equals("/login")){
            filterChain.doFilter(request,response); //do nothing
        }else{
            String authorizationHeader = request.getHeader(AUTHORIZATION);  //("Authorization");
            if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
                try {
                    //"Bearer " is appended with token by client which is then validated by server
                    //Why "Bearer "?
                    //To differentiate the token from other token types: Basic Auth, OAuth, AWS Signature, etc
                    String tokenReceived = authorizationHeader.substring("Bearer ".length());   //.substring(7)

                    JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(MY_SECRET_KEY)).build();
                    DecodedJWT decodedJWT = jwtVerifier.verify(tokenReceived);
                    String userName = decodedJWT.getSubject();

                    UsernamePasswordAuthenticationToken authenticationToken =
                            new UsernamePasswordAuthenticationToken(userName, null, new ArrayList<>());

                    //SecurityContext holds currently logged-in user's info (Principal's info)
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);

                    filterChain.doFilter(request, response);
                } catch (Exception e) {
                    log.error("Slf4j-> Error occurred. Err: " + e.getMessage());
                    response.setHeader("Foodnect_Error", e.getMessage());
                    response.sendError(403);    //FORBIDDEN.value()
                    //throw new AccessDeniedException("Access denied!");
                }
            } else {
                //if no "Bearer " continue
                filterChain.doFilter(request, response);
            }
        }
    }
}
