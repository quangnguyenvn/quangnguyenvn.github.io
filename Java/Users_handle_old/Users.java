package com.innotech.main;

import java.util.Map;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;

import com.inno.libs.database.DBConnector;
import com.inno.libs.database.PSE;

import json.JSON;

public class Users extends DBConnector {

	private PSE getUsers;
	private Map<String, User> userMap;


	public Users(JSON config) {
		super(config);
	
		userMap = new HashMap<String, User>();
		loadUsers(config);
	}

	private void loadUsers(JSON config) {
		getUsers = getPSE("GET_USERS");
		// select "UserID", "SuperUserID" from sales.broker
		try {
			ResultSet rss = getUsers.executeQuery();			
			while (rss.next()) {
				String userID = rss.getString(1);
				String sUserID = rss.getString(2);
				addUser(userID, sUserID);
			}
		} catch (SQLException se) {
		}

	}


	private void addUser(String userID, String sUserID) {
		User user = this.userMap.get(userID);
		if(user == null) {
			user = new User(userID);
			userMap.put(userID, user);
		}
		user.addSuperUser(sUserID);
		
		System.out.println("Add User: "+userID+ ", sUserID: "+ sUserID);
	}

	public boolean isManaged(String userID, String sUserID) {
		User user = this.userMap.get(userID);
		if(user == null) {
			return false;
		}
		else {
			return user.isManaged(sUserID);
		}
	}
	
	public User[] getUsers() {
		return userMap.values().toArray(new User[0]);
	}
}