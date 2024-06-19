package application.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ModelMonthVisitors {
    @Id
    @SequenceGenerator(
            name = "authuser_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "authuser_sequence"
    )
    private Long id;
    private String month;
    private Integer male;
    private Integer female;
    public ModelMonthVisitors(String month, Integer male, Integer female) {
        this.month = month;
        this.male = male;
        this.female = female;
    }
}
