package sever.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModelEmployee {
    @Id
    @SequenceGenerator(
            name = "employee_sequence",
            sequenceName = "id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employee_sequence"
    )
    private Long id;
    private String Lastname;
    private String Name;
    private String dob;
//    @OneToMany(fetch = FetchType.EAGER)
//    private Collection<ModelPhonenumber> phonenumbers = new ArrayList<>();
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<ModelPosition> positions = new ArrayList<>();
    public ModelEmployee(String Lastname, String Name,
                         String dob,
                         Collection<ModelPosition> positions) {
        this.Lastname = Lastname;
        this.Name = Name;
        this.dob = dob;

        this.positions = positions;
    }
}
