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
import java.util.Optional;

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
}
