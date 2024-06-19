package application.service;

import application.domain.ModelOrder;
import java.util.List;

public interface OrderService {
    ModelOrder saveOrder(ModelOrder order);
    List<ModelOrder> getAllOders();
    List<ModelOrder> getUserOrders(String Recipient);
}
