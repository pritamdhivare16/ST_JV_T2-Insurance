package com.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.insuranceRepo;

import com.entity.insurance;
import com.entity.userInfo;


@RestController
@RequestMapping("/insurance")
@CrossOrigin("http://localhost:4200")
public class insuranceController {
	@Autowired
	insuranceRepo repo;
	

	
	@PostMapping("/addInsuranceInfo")
	public ResponseEntity<Map<String, String>> addInsuranceInfo(@RequestBody insurance ins) {  
		Map<String, String> response = new HashMap<>();
		response.put("message","Info added successfully");
		 repo.save(ins);
		 return ResponseEntity.ok(response);
	}

}
