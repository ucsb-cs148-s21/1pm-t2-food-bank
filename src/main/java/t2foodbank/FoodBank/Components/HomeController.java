package t2foodbank.FoodBank.Components;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/api/t2")
    public String hello() {
        return "T2 food bank is here";
    }
}