package sever.service;

import sever.domain.ModelEmployee;
import sever.domain.ModelPhonenumber;
import sever.domain.ModelPosition;

import java.util.List;

public interface EmployeeService {
    List<ModelEmployee> getAllEmployees();
    ModelEmployee saveEmployee(ModelEmployee employee);
    void addPositionToEmployee(Long employee_id, Long positionId);
}
