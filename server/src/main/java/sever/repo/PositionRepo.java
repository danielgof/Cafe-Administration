package sever.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sever.domain.ModelPosition;

public interface PositionRepo extends JpaRepository<ModelPosition, Long> {
    @Query("select p from ModelPosition p where p.id=?1")
    ModelPosition find(Long id);
}
