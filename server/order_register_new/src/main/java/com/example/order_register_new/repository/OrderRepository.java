package com.example.order_register_new.repository;

import com.example.order_register_new.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String>
{

}
