package t2foodbank.FoodBank.Components;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
public class HomeController {
    @GetMapping("/api/t2")
    public String hello() {
        return "T2 food bank is here";
    }

    @GetMapping("/get/inventory")
    public @ResponseBody ResponseEntity<String> get() {
        return new ResponseEntity<String>("GET Response", HttpStatus.OK);
    }

}