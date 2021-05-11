package t2foodbank.FoodBank.objects;

import org.springframework.stereotype.Component;

@Component
public class Food {

   private String name;
   private int limit;

   public int getLimit() {
      return this.limit;
   }

   public void setLimit(int limit) {
      this.limit = limit;
   }
   private int amount;

   public Food (){
       super();
   }

   public Food(String name, int amount, int limit) {
      super();
      this.name = name;
      this.amount = amount;
      this.limit = limit;
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

