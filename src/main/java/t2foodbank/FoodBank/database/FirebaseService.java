package t2foodbank.FoodBank.database;

import java.util.ArrayList;
import java.util.List;
import java.util.Iterator;
import java.util.concurrent.ExecutionException;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import t2foodbank.FoodBank.objects.Food;
import t2foodbank.FoodBank.objects.Time;
import org.springframework.stereotype.Service;
//import t2foodbank.FoodBank.database.FirebaseInitializer;


@Service
public class FirebaseService {

    private static final String COLLECTION_NAME = "inventory";

//get single inventory

    public Food getInventorybyname(String name) throws ExecutionException, InterruptedException{

        Firestore dbFirestore = FirestoreClient.getFirestore();

        DocumentReference documentReference=dbFirestore.collection(COLLECTION_NAME).document(name);

        ApiFuture<DocumentSnapshot> future=documentReference.get();

        DocumentSnapshot document=future.get();

        if(document.exists()){
            Food food = document.toObject(Food.class);
            return food;
        }else{
            return null;
        }
        
    }


//get all invenotry
    public List<Food> getAllInventory() throws InterruptedException, ExecutionException {

        Firestore dbFirestore = FirestoreClient.getFirestore();
        
        Iterable<DocumentReference> documentReference=dbFirestore.collection(COLLECTION_NAME).listDocuments();
        Iterator<DocumentReference> iterator = documentReference.iterator();

        List<Food> foodList = new ArrayList<Food>();
        Food food=null;

        while(iterator.hasNext()){
            DocumentReference documentReference1 = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference1.get();
            DocumentSnapshot document = future.get();
            food = document.toObject(Food.class);
            foodList.add(food);
        }

        return foodList;

    }
    

//add
    public String addInventory(Food food) throws ExecutionException, InterruptedException{

       Firestore dbFirestore = FirestoreClient.getFirestore();

       dbFirestore.collection(COLLECTION_NAME).document(food.getName()).set(food);

       ApiFuture<WriteResult> collectionApiFuture=dbFirestore.collection(COLLECTION_NAME).document(food.getName()).set(food);

       return collectionApiFuture.get().getUpdateTime().toString();
    }


//update
    public String updateInventory(Food food) throws ExecutionException, InterruptedException{

        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture=dbFirestore.collection(COLLECTION_NAME).document(food.getName()).set(food);

        return collectionApiFuture.get().getUpdateTime().toString();
    }

//delete
    public String deleteInventory(String name) throws ExecutionException, InterruptedException{

        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture=dbFirestore.collection(COLLECTION_NAME).document(name).delete();

        return "Document with Inventory " + name + " has been deleted successfully";
    }


//get time
    public Time getTime(String name) throws ExecutionException, InterruptedException{

        Firestore dbFirestore = FirestoreClient.getFirestore();

        DocumentReference documentReference=dbFirestore.collection("time").document(name);

        ApiFuture<DocumentSnapshot> future=documentReference.get();

        DocumentSnapshot document=future.get();

        if(document.exists()){
            Time time = document.toObject(Time.class);
            return time;
        }
        else{
            return null;
        }
    }

//update time
    public String updateTime(Time time) throws ExecutionException, InterruptedException{

        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture=dbFirestore.collection("time").document("last update").set(time);

    return collectionApiFuture.get().getUpdateTime().toString();
    }

}
