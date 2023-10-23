package br.com.terabyte.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    public UserModel postUser(@RequestBody UserModel um){
        Iterable<UserModel> users = getUser();
        for (UserModel u : users) {
            if(u.getEmail().equals(um.getEmail())){
                if(u.getPassword().equals(um.getPassword())){
                    return u;
                }
            }
        } 
        return null;
    }
}