package br.com.terabyte.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.terabyte.model.UserModel;
import br.com.terabyte.repository.UserRepository;

@RestController
@CrossOrigin("*")
public class UserController {
    
    @Autowired
    public UserRepository ur;

    @GetMapping("/login")
    public Iterable<UserModel> getUser(){
        return ur.findAll();
    }

    @PostMapping("/login")
    public ResponseEntity<UserModel> postUser(@PathVariable UserModel um){
        return new ResponseEntity<UserModel>(ur.save(um), HttpStatus.CREATED);
    }
}
