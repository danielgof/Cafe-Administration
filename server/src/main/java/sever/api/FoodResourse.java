package sever.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sever.domain.ModelFood;
import sever.service.FoodService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/food")
public class FoodResourse {
    private final FoodService foodService;

    @GetMapping("/get_all")
    public ResponseEntity<List<ModelFood>> getFood() {
        return ResponseEntity.ok().body(foodService.getAllFood());
    }

    @GetMapping("/drinks")
    public ResponseEntity<List<ModelFood>> getDrinks() {
        return ResponseEntity.ok().body(foodService.getAllDrinks());
    }

    @GetMapping("/desserts")
    public ResponseEntity<List<ModelFood>> getDesserts() {
        return ResponseEntity.ok().body(foodService.getAllDesserts());
    }

    @GetMapping("/salads")
    public ResponseEntity<List<ModelFood>> getSalads() {
        return ResponseEntity.ok().body(foodService.getAllSalads());
    }

    @GetMapping("/seafood")
    public ResponseEntity<List<ModelFood>> getSeafood() {
        return ResponseEntity.ok().body(foodService.getAllSeafood());
    }

    @GetMapping("/starters")
    public ResponseEntity<List<ModelFood>> getStarters() {
        return ResponseEntity.ok().body(foodService.getAllStarters());
    }

    @GetMapping("/steaks")
    public ResponseEntity<List<ModelFood>> getSteaks() {
        return ResponseEntity.ok().body(foodService.getAllSteaks());
    }
}
