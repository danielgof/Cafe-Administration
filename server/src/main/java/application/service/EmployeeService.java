package application.service;


import application.domain.ModelEmployee;

import java.util.List;

public interface EmployeeService {
    List<ModelEmployee> getAllEmployees();
    ModelEmployee saveEmployee(ModelEmployee employee);
    void addPositionToEmployee(Long employee_id, Long positionId);
    void deletePostion(Long employee_id);
    void updEmployeeName(String name, String new_name);
    void updEmployeeLastName(String lastname, String new_lastname);
    void updEmployeeDob(String dob, String new_dob);
}
