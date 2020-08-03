package com.inno.fo.broker;

import java.util.Map;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;

import com.inno.libs.database.DBConnector;
import com.inno.libs.database.PSE;

import json.JSON;

public class Users extends DBConnector {
    
    private static final int MAX_USERS = 1 << 20;

    private PSE getUsers;
    private Map<String, Integer> usersMap;
    
    private User[] users;
    private int numUsers;
    
    public Users(JSON config) {
	super(config);
	
	usersMap = new HashMap<String, Integer>();
	numUsers = 0;

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
	Integer indexVal = usersMap.get(userID);
	int index, sIndex;
	
	if (indexVal == null) {
	    User user = new User(userID);
	    index = numUsers++;
	    users[index] = user;
	    usersMap.put(userID, index); 
	} else {
	    index = indexVal.intValue();
	}
	
	indexVal = usersMap.get(sUserID);
	if (indexVal == null) {
            User sUser = new User(sUserID);     
            sIndex = numUsers++;
            users[sIndex] = sUser;
            usersMap.put(sUserID, sIndex);
        } else {
	    sIndex = indexVal.intValue();
	}

	users[index].addSuperUser(users[sIndex]);
	
	System.out.println("Add User: " + userID + ", sUserID: " + sUserID);
    }

    public boolean isManaged(String userID, String sUserID) {
	Integer index = usersMap.get(userID);
	if (index == null) {
	    return false;
	} else {
	    return users[index.intValue()].isManaged(sUserID);
	}
    }
}
