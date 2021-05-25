package t2foodbank.FoodBank.objects;

import org.springframework.stereotype.Component;

@Component
public class Time {

    private String date;

    public Time (){
        super();
    }

    public Time (String date){
        super();
        this.date = date;
        
    }

    public String getDate() {
        return this.date;
    }

    public void setTime(String date) {
        this.date = date;
    }
    
}