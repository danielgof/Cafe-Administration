package sever.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sever.domain.ModelFood;

public interface FoodRepo extends JpaRepository<ModelFood, Long> {
    @Query("select f from ModelFood f where f.title=?1")
    ModelFood findByTitle(String title);
}
