package t2foodbank.FoodBank.Components;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.RequestBody;

import t2foodbank.FoodBank.database.FirebaseInitializer;
import t2foodbank.FoodBank.objects.Food;
import org.springframework.web.bind.annotation.PathVariable;

//import java.util.concurrent.ExecutionException;

@RestController
public class HomeController {
    @Autowired
    FirebaseInitializer db;

    @GetMapping("/api/t2")
    public String hello() {
        return "T2 food bank is here";
    }
    @GetMapping("/api/getInventory")
    public List<Food> getAllInventory() throws InterruptedException, ExecutionException {
        List<Food> foodList = new ArrayList<Food>();
        Iterable<DocumentReference> documentReference = db.getFirebase().collection("inventory").listDocuments();
        Iterator<DocumentReference> it = documentReference.iterator();
        while (it.hasNext()) {
            DocumentReference documentReference1 = it.next();
            ApiFuture<DocumentSnapshot> future = documentReference1.get();
            DocumentSnapshot document = future.get();
            Food f = document.toObject(Food.class);
            foodList.add(f);
        }
        return foodList;
    }
}