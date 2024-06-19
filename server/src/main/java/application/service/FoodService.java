package application.service;


import application.domain.ModelFood;

import java.util.List;

public interface FoodService {
    List<ModelFood> getAllFood();
    List<ModelFood> getAllDrinks();
    List<ModelFood> getAllDesserts();
    List<ModelFood> getAllSalads();
    List<ModelFood> getAllSeafood();
    List<ModelFood> getAllStarters();
    List<ModelFood> getAllSteaks();
    List<?> getAllFoodTypes();
    ModelFood saveFood(ModelFood food);
    ModelFood getFoodByTitle(String title);
}
