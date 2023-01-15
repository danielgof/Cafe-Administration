package sever.api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sever.domain.ModelPosition;
import sever.service.PositionService;

import java.util.List;

@Slf4j
@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/position")
public class PositionsResourse {
    private final PositionService positionService;

    @GetMapping("/all")
    public ResponseEntity<List<ModelPosition>> allPositions() {
        return ResponseEntity.ok().body(positionService.getAllPositions());
    }

    @PostMapping("/save_position")
    public ResponseEntity<ModelPosition> savePosition(@RequestBody ModelPosition position) {
        return ResponseEntity.ok().body(positionService.savePosition(position));
    }

    @DeleteMapping("/delete_position")
    public ResponseEntity<ModelPosition> deletePosition(@RequestBody ModelPosition position) {
        return ResponseEntity.ok().body(positionService.deletePosition(position.getId()));
    }
}
