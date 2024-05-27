package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.userInfo;

public interface userRepo extends JpaRepository<userInfo,String>{
	
}
