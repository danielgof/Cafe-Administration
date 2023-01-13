package sever.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sever.domain.ModelEmployee;

import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<ModelEmployee, Long> {
}
