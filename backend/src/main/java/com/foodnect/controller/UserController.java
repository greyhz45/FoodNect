package com.foodnect.controller;

import com.foodnect.security.JwtUtil;
import com.foodnect.entities.User;
import com.foodnect.services.UserService;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.Serializable;
import java.net.URI;
import java.util.Collections;
import java.util.List;

@CrossOrigin    //(origins = "*") //allow react //@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;

    //@GetMapping("/users")
    //public ResponseEntity<List<User>> findAllUsers(){
    //    return ResponseEntity.ok(userService.findAllUsers());
    //}

    //public url/endpoint
    //Register a user before authenticating
    @PostMapping("/new-user")
    public ResponseEntity<User> saveUser(@RequestBody User user){

        userService.saveUser(user);
        return ResponseEntity.created(URI.create("/new-user/" + user.getUsername())).build();
    }

    //public url/endpoing
    //Authenticate using username and password and get JWT token if authenticated
    //@PostMapping(value = "/authenticate", produces = "application/json")
    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> authenticateAndReturnJwt(@RequestBody AuthenticationRequestDao authenticationRequestDao, HttpServletResponse servletResponse) throws Exception {
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequestDao.getUsername(), authenticationRequestDao.getPassword())
            );
        } catch (BadCredentialsException exception){
            throw  new Exception("Incorrect username or password", exception);
        }
        //if authenticated:
        String accessToken = jwtUtil.generateJwtToken(authenticationRequestDao.getUsername());

        //return ResponseEntity.ok(accessToken)     // plain text
        servletResponse.setHeader("accessToken", accessToken);
        return ResponseEntity.ok(Collections.singletonMap("accessToken", accessToken));

        //return ResponseEntity.ok("{\"test:\"" + "\""+ accessToken + "\""+"}");
    }

    //protected url/endpoint
    //requires Authorization header and Bearer token
    @GetMapping("/test-authorization")
    public String testAuthorization(){
        return "Authorization successful. JWT and authentication is working fine :)";
    }


    //helper util class
    @Getter
    @NoArgsConstructor
    static class AuthenticationRequestDao implements Serializable {
        String username;
        String password;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}


/*
Postman:
Post (register user): /api/new-user
        Body> Raw> JSON: {"username":<username>, "password": <password>}

Post (authenticate user after registering): /api/authenticate
        Body> Raw> JSON: {"username":<username>, "password": <password>}

Get/Post (check authorization/ check jwt generated in above action):
        Header: Key: Authorization, Value: Bearer <generated jwt token>
*/

