package application.repo;

import application.domain.ModelOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepo extends JpaRepository<ModelOrder, Long> {
    @Query("select f from ModelOrder f where f.Recipient=?1")
    List<ModelOrder> findByRecipient(String recipient);
}
