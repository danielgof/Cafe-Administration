package sever.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sever.domain.ModelEmployee;
import sever.domain.ModelPosition;
import sever.repo.EmployeeRepo;
import sever.repo.PositionRepo;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepo employeeRepo;
    private final PositionRepo positionRepo;

    @Override
    public List<ModelEmployee> getAllEmployees() {
        return employeeRepo.findAll();
    }

    @Override
    public ModelEmployee saveEmployee(ModelEmployee employee) {
        return employeeRepo.save(employee);
    }

    @Override
    public void addPositionToEmployee(Long employeeId, Long positionId) {
        ModelEmployee employee = employeeRepo.find(employeeId);
        ModelPosition position = positionRepo.find(positionId);
        employee.getPositions().add(position);
    }

    @Override
    public void deletePostion(Long employee_id) {
        employeeRepo.deleteById(employee_id);
    }

    @Override
    public void updEmployeeName(String name, String new_name) {
        employeeRepo.updName(name, new_name);
    }

    @Override
    public void updEmployeeLastName(String lastname, String new_lastname) {
        employeeRepo.updLastname(lastname, new_lastname);
    }

    @Override
    public void updEmployeeDob(String dob, String new_dob) {
        employeeRepo.updDob(dob, new_dob);
    }
}
