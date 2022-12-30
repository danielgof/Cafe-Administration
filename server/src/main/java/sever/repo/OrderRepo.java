package sever.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sever.domain.ModelOrder;

import java.util.List;

public interface OrderRepo extends JpaRepository<ModelOrder, Long> {
    @Query("select f from ModelOrder f where f.Recipient=?1")
    List<ModelOrder> findByRecipient(String recipient);
}
