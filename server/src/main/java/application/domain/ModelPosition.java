package application.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ModelPosition {
    @Id
    @SequenceGenerator(
            name = "positions_sequence",
            sequenceName = "positions_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "positions_sequence"
    )
    private Long id;
    private String Department;
    private String Position;
    public ModelPosition(String Department, String Position) {
        this.Department = Department;
        this.Position = Position;
    }
}
