package Gmail_project;

public class Message_box {
	
	private int MessageID;
	private String UserId;
	private String Message;
	
	public int getMessageID() {
		return MessageID;
	}
	public void setMessageID(int messageID) {
		MessageID = messageID;
	}
	public String getUserId() {
		return UserId;
	}
	public void setUserId(String userId) {
		UserId = userId;
	}
	@Override
	public String toString() {
		return "Message_box [MessageID=" + MessageID + ", UserId=" + UserId + ", Message=" + Message + "]";
	}
	public String getMessage() {
		return Message;
	}
	public void setMessage(String message) {
		Message = message;
	}
	

}
