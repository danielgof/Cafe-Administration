package sever.api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sever.domain.ModelEmployee;
import sever.domain.ModelFood;
import sever.service.EmployeeService;

import java.util.List;

@Slf4j
@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/employee")
public class EmployeeResourse {
    private final EmployeeService employeeService;
    @GetMapping("/all")
    public ResponseEntity<List<ModelEmployee>> getEmployees() {
        return ResponseEntity.ok().body(employeeService.getAllEmployees());
    }

    @PostMapping("/save_employee")
    public ResponseEntity<ModelEmployee> saveEmployee(@RequestBody
                                                      ModelEmployee employee) {
        return ResponseEntity.ok().body(employeeService.saveEmployee(employee));
    }
}
