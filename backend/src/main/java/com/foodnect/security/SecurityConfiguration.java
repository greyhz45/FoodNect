package com.foodnect.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    /*
    AuthenticationManager -> AuthenticationProvider -> UserDetailsService => JPA Service -> DB
    */
    @Autowired
    private UserDetailsService userDetailsService;  //from spring
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;    //in main class

    //authentication
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //authentication providers: inMemory (hardcoded user details), jdbc (user details in db), userdetailsservice (custom authentication), ldap, ...

        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
        }

    //authorization
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        CustomAuthorizationFilter authorizationFilter = new CustomAuthorizationFilter();

        http
            .csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .addFilterBefore(authorizationFilter, UsernamePasswordAuthenticationFilter.class)
            .authorizeRequests().antMatchers("/api/authenticate", "/api/new-user").permitAll()
            .anyRequest().authenticated();  //basically all endpoints are secured except "/api/authenticate"
    }

    //must have
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
