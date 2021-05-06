package t2foodbank.FoodBank.database;

import java.util.concurrent.ExecutionException;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;

import org.springframework.stereotype.Service;
import t2foodbank.FoodBank.objects.Food;

@Service
public class FirebaseService {
    public String saveUserDataDetails(Food food) throws InterruptedException, ExecutionException{
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectApiFuture = dbFirestore.collection("inventory").document(food.getName()).set(food);
        return collectApiFuture.get().getUpdateTime().toString();
    }

}

