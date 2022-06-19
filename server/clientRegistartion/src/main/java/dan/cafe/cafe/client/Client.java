package dan.cafe.cafe.client;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Table
public class Client
{
    @Id
    @SequenceGenerator(
            name = "client_sequence",
            sequenceName = "client_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "client_sequence"
    )
    private Long id;
    private String name;
    private String lastname;
    private String email;
    private LocalDate dob;
    private String phonenumber;
    @Transient
    private Integer age;

    public Client() {    }

    public Client(Long id, String name, String lastname, String email, LocalDate dob, String phonenumber) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.dob = dob;
        this.phonenumber = phonenumber;
    }

    public Client(String name, String lastname, String email, LocalDate dob, String phonenumber) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.dob = dob;
        this.phonenumber = phonenumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Integer getAge() {
        return Period.between(dob, LocalDate.now()).getYears();
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString()
    {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastname='" + lastname + '\'' +
                ", dob=" + dob +
                ", email='" + email + '\'' +
                ", phonenumber='" + phonenumber + '\'' +
                ", age=" + age +
                '}';
    }
}
