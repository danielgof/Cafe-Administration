package cafe.cafe.login.user;

import javax.persistence.*;

@Entity
@Table
public class Client
{
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long id;
    private String login;
    private String password;

    public Client() {    }

    public Client(Long id, String login, String password) {
        this.id = id;
        this.login = login;
        this.password = password;
    }

    public Client(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String name) {
        this.login = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String name) {
        this.password = name;
    }


    @Override
    public String toString()
    {
        return "Student{" +
                "id=" + id +
                ", name='" + login + '\'' +
                ", lastname='" + password + '\'';
    }
}
