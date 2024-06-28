package ihar.shyn.FilterDemo.model;

import ihar.shyn.FilterDemo.model.enums.Priority;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

@Entity
public class Filter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Criteria> criteriaList;
    @Column
    @NotBlank(message = "Name may not be empty")
    private String name;
    @Column
    private Priority priority;

    public Filter() {
    }

    public Filter(Long id, List<Criteria> criteriaList, String name, Priority priority) {
        this.id = id;
        this.criteriaList = criteriaList;
        this.name = name;
        this.priority = priority;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Criteria> getCriteriaList() {
        return criteriaList;
    }

    public void setCriteriaList(List<Criteria> criteriaList) {
        this.criteriaList = criteriaList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }
}
