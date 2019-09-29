package contactfile;

public class Contact implements Comparable<Contact>{
	
	private String name;
	private long number;
	private String group;

	
	
	@Override
	public String toString() {
		return "name=" + name;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getNumber() {
		return number;
	}
	public void setNumber(long number) {
		this.number = number;
	}
	public String getGroup() {
		return group;
	}
	public void setGroup(String group) {
		this.group = group;
	}
	
	@Override
	public int compareTo(Contact a) {
		if(this.name==a.name) {
			return 1;
		}
		return 0;
	}
	
}
