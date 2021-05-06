package t2foodbank.FoodBank.objects;

public class Food {

   private String name;

   private String amount;

   public Food (){
       super();
   }

   public Food(String name, String amount) {
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

   public String getAmount() {
      return amount;
   }

   public void setAmount(String amount) {
      this.amount = amount;
   }

 
   

   
}

