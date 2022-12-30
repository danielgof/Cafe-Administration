package sever.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sever.domain.ModelOrder;
import sever.repo.OrderRepo;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class OrderServiceImpl implements OrderService {

    private final OrderRepo orderRepo;

    @Override
    public List<ModelOrder> getAllOders() {
        return orderRepo.findAll();
    }

    @Override
    public ModelOrder saveOrder(ModelOrder order) {
        return orderRepo.save(order);
    }

    @Override
    public List<ModelOrder> getUserOrders(String Recipient) {
        return orderRepo.findByRecipient(Recipient);
    }
}
