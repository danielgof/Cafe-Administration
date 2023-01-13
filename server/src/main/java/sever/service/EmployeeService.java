package sever.service;

import sever.domain.ModelEmployee;
import sever.domain.ModelPhonenumber;

import java.util.List;

public interface EmployeeService {
    List<ModelEmployee> getAllEmployees();
    ModelEmployee saveEmployee(ModelEmployee employee);
}
