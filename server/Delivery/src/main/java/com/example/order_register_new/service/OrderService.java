package com.example.order_register_new.service;

import com.example.order_register_new.model.Order;
import com.example.order_register_new.repository.OrderRepository;
import org.springframework.stereotype.Service;


import java.util.List;


@Service
public class OrderService
{
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository)
    {
        this.orderRepository = orderRepository;
    }

    public void addOrder(Order order)
    {
        orderRepository.insert(order);
    }

    public void updateOrder(Order order)
    {
        Order savedOrder = orderRepository.findById(order.getId())
                .orElseThrow(() -> new RuntimeException(
                        String.format("Cannot find order by ID %s", order.getId())
                ));

        savedOrder.setAdress(order.getAdress());
        savedOrder.setName(order.getName());
        savedOrder.setLastname(order.getLastname());
        savedOrder.setEmail(order.getEmail());
        savedOrder.setPhonenumber(order.getPhonenumber());
        savedOrder.setDob(order.getDob());
        savedOrder.setOrder(order.getOrder());
        savedOrder.setSum(order.getSum());

        orderRepository.save(order);
    }

    public List<Order> getAllOrders()
    {
        return orderRepository.findAll();
    }

    public Order getOrderById(String Id)
    {
        return orderRepository.findById(Id).orElseThrow(() -> new RuntimeException(
                String.format("Cannot find order by id", Id)
        ));
    }

    public void deleteOrder(String Id)
    {
        orderRepository.deleteById(Id);
    }
}
