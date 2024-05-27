package com.controller;
import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import com.dao.userRepo;

import com.entity.userInfo;
import com.service.UserService;



@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:4200")
public class userController {
	@Autowired
	userRepo repo;
	
	@Autowired
	UserService userservice;
	
	
	@PostMapping("/addUser")
	public ResponseEntity<Map<String, String>> addUser(@RequestBody userInfo User) {  
		Map<String, String> response = new HashMap<>();
		response.put("message","User added successfully");
		 repo.save(User);
		 return ResponseEntity.ok(response);
	}
	
	@GetMapping("/getAll")
	public List<userInfo> fetchAll(){
		return repo.findAll();
	}
	
	
//	@GetMapping("User/{username}/{password}")
//	public int UserLogin(@PathVariable("username") String username1,@PathVariable("password") String password1) {
//		
//		int flag = userservice.loginValidation(username1, password1);
//		if(flag == 0) {
//			return 0;
//		}
//		return flag;
//		
//	}
	
	//LoginValidation
	  @PostMapping("/login")
	    public int login(@RequestBody userInfo user) {
	        String username = user.getEmail();
	        String password = user.getPassword();
	        
		return UserService.loginValidation(username, password);
			
	    }
	
	 
	

}
