package com.innotech.main;

package com.innotech.main;

import java.util.ArrayList;

class User {
	private String userID;
	private ArrayList<String> superUsers;

	public User(String userID) {
		this.userID = userID;
		this.superUsers = new ArrayList<String>();
	}

	public String getUserID() {
		return userID;
	}

	public void addSuperUser(String sUserID) {
		superUsers.add(sUserID);
	}

	public ArrayList<String> getSuperUsers() {
		return superUsers;
	}

	public boolean isManaged(String superUser) {
		return superUsers.contains(superUser);
	}
}
