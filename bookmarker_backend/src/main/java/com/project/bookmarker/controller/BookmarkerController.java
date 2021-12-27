package com.project.bookmarker.controller;

import com.project.bookmarker.model.User;
import com.project.bookmarker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;
import javax.persistence.Query;

@RestController
public class BookmarkerController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EntityManager entityManager;

    @CrossOrigin
    @PostMapping("/addUser")
    public User addUser (@RequestBody User user) { return userRepository.save(user); }

    @CrossOrigin
    @PostMapping("/userLogin")
    public User userLogin (@RequestBody User user) throws Exception {
        String sql = "SELECT users FROM User users WHERE users.email = '"+user.getEmail() + "'";
        Query query = entityManager.createQuery(sql);
        Object result = query.getSingleResult();
        if (result == null) {
            throw new Exception("User doesn't exist with email : " + user.getEmail());
        }
        User userFound = (User) result;
        if (userFound.getPassword() != null && userFound.getPassword().equals(user.getPassword()))
            return userFound;
        throw new Exception("Oops!! Incorrect password.");
    }



}
