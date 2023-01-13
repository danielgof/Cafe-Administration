package sever.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sever.domain.ModelEmployee;
import sever.repo.EmployeeRepo;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepo employeeRepo;

    @Override
    public List<ModelEmployee> getAllEmployees() {
        return employeeRepo.findAll();
    }

    @Override
    public ModelEmployee saveEmployee(ModelEmployee employee) {
        return employeeRepo.save(employee);
    }
}
