package sever.api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sever.domain.ModelOrder;
import sever.service.OrderService;

import java.util.List;


@Slf4j
@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/order")
public class OrderResourse {
    private final OrderService orderService;

    @GetMapping("/orders")
    public ResponseEntity<List<ModelOrder>> getOders() {
        return ResponseEntity.ok().body(orderService.getAllOders());
    }

    @PostMapping("/save_order")
    public ResponseEntity<ModelOrder> saveOrder(@RequestBody ModelOrder order) {
        log.info(order.getContent());
        return ResponseEntity.ok().body(orderService.saveOrder(order));
    }
}
