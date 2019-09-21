package Gmail_project;

public class Account implements Comparable<Account> {
	
	private String UserId;
	private String UserName;
	private String Password;
	private String Email;
	
	
	public String getUserId() {
		return UserId;
	}
	public void setUserId(String userId) {
		UserId = userId;
	}
	@Override
	public String toString() {
		return "Account [UserId=" + UserId + ", UserName=" + UserName + ", Email=" + Email + "]";
	}
	public String getUserName() {
		return UserName;
	}
	public void setUserName(String userName) {
		UserName = userName;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	
	@Override
	public int compareTo(Account a) {
		if(this.Email==a.Email && this.Password==a.Password) {
			return 1;
		}
		return 0;
	}

}
