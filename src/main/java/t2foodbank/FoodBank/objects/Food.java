package t2foodbank.FoodBank.objects;

import org.springframework.stereotype.Component;

@Component
public class Food {

   private String name;

   private int amount;

   public Food (){
       super();
   }

   public Food(String name, int amount) {
      super();
      this.name = name;
      this.amount = amount;
   }

   public String getName() {
      return name;
   }  

   public void setName(String name) {
      this.name = name;
   }

   public int getAmount() {
      return amount;
   }

   public void setAmount(int amount) {
      this.amount = amount;
   }

 
   

   
}

