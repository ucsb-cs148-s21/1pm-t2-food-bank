package t2foodbank.FoodBank.objects;

import org.springframework.stereotype.Component;

@Component
public class Admin {
    private String username;
    private String password;

    public Admin() {
        super();
    }

    public Admin(String username, String password) {
        super();
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String passsword) {
        this.password = passsword;
    }
    
}
