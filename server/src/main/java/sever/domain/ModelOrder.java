package sever.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ModelOrder {
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
    private String Date;
    private String Recipient;
    private String Content;

    public ModelOrder(String date, String recipient, String content) {
        this.Date = date;
        this.Recipient = recipient;
        this.Content = content;
    }
}
