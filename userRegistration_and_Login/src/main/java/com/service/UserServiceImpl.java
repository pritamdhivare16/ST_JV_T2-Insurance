package com.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.springframework.stereotype.Service;

import com.dbutil.DBUtil;

@Service
public class UserServiceImpl implements UserService {
	
	Connection connection;
	int flag = 0;
	
	public UserServiceImpl() throws SQLException {
		connection = DBUtil.getConnection();
	}
	
	public int loginValidation(String username, String password) {
		try {
		PreparedStatement statement = connection.prepareStatement("select * from user where email = '"+username+"'");
		ResultSet rs = statement.executeQuery();
			
		while(rs.next()) {
			if(rs.getString(2).equals(username) && rs.getString(6).equals(password)) {
				flag = 1;
			}else {
				System.out.println("Invalid Username/Password");
				flag = 0;
			}
		}
		
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return flag;
	}

}
