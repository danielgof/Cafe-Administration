package sever.api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sever.api.utils.PositionToEmpl;
import sever.domain.ModelEmployee;
import sever.domain.ModelFood;
import sever.domain.ModelPosition;
import sever.repo.EmployeeRepo;
import sever.repo.PositionRepo;
import sever.service.EmployeeService;

import java.util.List;

@Slf4j
@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/employee")
public class EmployeeResourse {
    private final EmployeeService employeeService;
    private final EmployeeRepo employeeRepo;
    private final PositionRepo positionRepo;
    @GetMapping("/all")
    public ResponseEntity<List<ModelEmployee>> getEmployees() {
        return ResponseEntity.ok().body(employeeService.getAllEmployees());
    }

    @PostMapping("/save_employee")
    public ResponseEntity<ModelEmployee> saveEmployee(@RequestBody
                                                      ModelEmployee employee) {
        return ResponseEntity.ok().body(employeeService.saveEmployee(employee));
    }
    @PostMapping("/position_to_employee")
    public ResponseEntity<ModelPosition> savePositionToEmployee(@RequestBody PositionToEmpl data) {
        log.info(" employeeId: {}", data.getEmployeeId());
        employeeService.addPositionToEmployee(data.getEmployeeId(), data.getPositionId());
        return ResponseEntity.ok().body(positionRepo.find(data.getPositionId()));
    }

}
