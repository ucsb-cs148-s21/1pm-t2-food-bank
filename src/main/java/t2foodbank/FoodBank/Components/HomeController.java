package t2foodbank.FoodBank.Components;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.RequestBody;

import t2foodbank.FoodBank.database.FirebaseService;
import t2foodbank.FoodBank.objects.Food;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;

//import java.util.concurrent.ExecutionException;

@RestController
public class HomeController {
    @GetMapping("/api/t2")
    public String hello() {
        return "T2 food bank is here";
    }

    //@GetMapping("/get/inventory")
    //public @ResponseBody ResponseEntity<String> get() {
      //  return new ResponseEntity<String>("GET Response", HttpStatus.OK);
    //}

    @Autowired
    FirebaseService firebaseService;
    
    @GetMapping("/getInventory")
    public Food getFoodbank(@RequestHeader() String name){
        return new Food(name, "3");
    }
    
    @PostMapping("/createInventory")
    public String postFoodbank(@RequestBody Food food) throws InterruptedException, ExecutionException{
        return firebaseService.saveUserDataDetails(food);
    }

    @PutMapping("/updateInventory")
    public String updateInventory(@RequestBody Food food){
        return "Update inventory "+food.getName();
    }

    @DeleteMapping("/deleteInventory")
    public String deleteInventory(@RequestHeader String name){
        return "Delete inventory "+name;
    }

    

}