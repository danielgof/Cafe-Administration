package sever.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModelAuthUser {
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
    private String name;
    private String lastname;
    private String dob;
    private String username;
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<ModelAuthRole> roles = new ArrayList<>();

    public ModelAuthUser(String name, String lastname, String dob,
                         String username, String password, Collection<ModelAuthRole> roles) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }
}
