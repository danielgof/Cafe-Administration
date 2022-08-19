package com.example.order_register_new.repository;

import com.example.order_register_new.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface OrderRepository extends MongoRepository<Order, String>
{
    @Query("{'Id': ?0}")
    Optional<Order> findById(String name);
}
