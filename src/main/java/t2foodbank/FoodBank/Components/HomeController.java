package t2foodbank.FoodBank.Components;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;


import java.util.concurrent.ExecutionException;
//import java.util.ArrayList;
import java.util.List;
//import java.util.Iterator;

/*
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
*/

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.RequestBody;

import t2foodbank.FoodBank.database.FirebaseInitializer;
import t2foodbank.FoodBank.database.FirebaseService;
import t2foodbank.FoodBank.objects.Food;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
//import t2foodbank.FoodBank.objects.Admin;


@RestController

@RequestMapping("/api")
public class HomeController {

    @Autowired
    private FirebaseService firebaseService;


    @GetMapping("/getInventory/{name}")
    public Food getInventory(@PathVariable String name) throws ExecutionException, InterruptedException{

        return firebaseService.getInventorybyname(name);

    }

    @GetMapping("/getInventory")
    public List<Food> getAllInventory() throws ExecutionException, InterruptedException{

        return firebaseService.getAllInventory();

    }

    @PostMapping("/addInventory")
    public String addInventory(@RequestBody Food food) throws ExecutionException, InterruptedException{

        return firebaseService.addInventory(food);
        
    }

    @PutMapping("/updateInventory")
    public String updateInventory(@RequestBody Food food) throws ExecutionException, InterruptedException{

        return firebaseService.updateInventory(food);
    
    }

    @DeleteMapping("/deleteInventory/{name}")
    public String deleteInventory(@PathVariable String name) throws ExecutionException, InterruptedException{

        return firebaseService.deleteInventory(name);

    }

}