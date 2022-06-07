package com.example.order_register_new.controller;

import com.example.order_register_new.model.Order;
import com.example.order_register_new.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController
{
    private final OrderService orderService;

    public OrderController(OrderService orderService)
    {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<Object> addOrder(@RequestBody Order order)
    {
        orderService.addOrder(order);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity<Object> updateOrder(Order order)
    {
        orderService.updateOrder(order);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity getAllOrders()
    {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping("/{Id}")
    public ResponseEntity<Order> getOrderById(@PathVariable String Id)
    {
        return ResponseEntity.ok(orderService.getOrderById(Id));
    }

    @DeleteMapping("/{Id}")
    public ResponseEntity<Object> deleteOrder(@PathVariable String Id)
    {
        orderService.deleteOrder(Id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
