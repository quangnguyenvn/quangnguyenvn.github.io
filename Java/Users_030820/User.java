package com.inno.fo.broker;

class User {

    private static final int MAX_SUPER_USERS = 16;

    private String userID;
    private User[] sUsers;
    private int numSuperUsers;

    public User(String userID) {
	this.userID = userID;
	this.sUsers = new User[MAX_SUPER_USERS];
	this.numSuperUsers = 0;
    }

    public String getUserID() {
	return userID;
    }
    
    public void addSuperUser(User sUser) {
	sUsers[numSuperUsers++] = sUser;
    }

    public boolean isManaged(String sUserID) {
	
	if (userID.equals(sUserID)) return true;

	for (int i = 0; i < numSuperUsers; i++) {
	    if (sUsers[i].isManaged(sUserID)) return true;
	}
	
	return false;
    }
}