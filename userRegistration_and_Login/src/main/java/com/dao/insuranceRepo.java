package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.insurance;

public interface insuranceRepo extends JpaRepository<insurance,String> {

}
