package t2foodbank.FoodBank.objects;

import org.springframework.stereotype.Component;

@Component
public class Food {

   private String name;
   private int limit;
   private int amount;
   private String category;

   public Food() {
      super();
   }

   public Food(String name, int amount, int limit, String category) {
      super();
      this.name = name;
      this.amount = amount;
      this.limit = limit;
      this.category = category;
   }

   public String getCategory() {
      return this.category;
   }

   public void setCategory(String category) {
      this.category = category;
   }

   public int getLimit() {
      return this.limit;
   }

   public void setLimit(int limit) {
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

