package application.repo;

import application.domain.ModelFood;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

public interface FoodRepo extends JpaRepository<ModelFood, Long> {
    @Query("select f from ModelFood f where f.title=?1")
    ModelFood findByTitle(String title);
    @Query("select f from  ModelFood f where f.type='drink'")
    List<ModelFood> findAllDrinks();
    @Query("select f from  ModelFood f where f.type='dessert'")
    List<ModelFood> findAllDesserts();
    @Query("select f from  ModelFood f where f.type='salad'")
    List<ModelFood> findAllSalads();
    @Query("select f from  ModelFood f where f.type='seafood'")
    List<ModelFood> findAllSeafood();
    @Query("select f from  ModelFood f where f.type='starter'")
    List<ModelFood> findAllStarters();
    @Query("select f from  ModelFood f where f.type='steak'")
    List<ModelFood> findAllSteaks();
    @Query("select distinct f.type from ModelFood f")
    List<?> findAllFoodTypes();
}
