package sever.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sever.domain.ModelEmployee;

public interface EmployeeRepo extends JpaRepository<ModelEmployee, Long> {
    @Query("select e from ModelEmployee e where e.id=?1")
    ModelEmployee find(Long id);
    @Modifying
    @Query("update ModelEmployee m set m.Name=:new_name where m.Name=:name")
    void updName(@Param("name") String name, @Param("new_name") String new_name);
    @Modifying
    @Query("update ModelEmployee m set m.Lastname=:new_lastname where m.Lastname=:lastname")
    void updLastname(@Param("lastname") String lastname, @Param("new_lastname") String new_lastname);
    @Modifying
    @Query("update ModelEmployee m set m.dob=:new_dob where m.dob=:dob")
    void updDob(@Param("dob") String dob, @Param("new_dob") String new_dob);
}
