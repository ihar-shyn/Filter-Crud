package ihar.shyn.FilterDemo.model;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import ihar.shyn.FilterDemo.model.enums.CriteriaType;
import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@JsonTypeInfo( use = JsonTypeInfo.Id.NAME, property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = AmountCriteria.class, name = "AMOUNT"),
        @JsonSubTypes.Type(value = TitleCriteria.class, name = "TITLE"),
        @JsonSubTypes.Type(value = DateCriteria.class, name = "DATE")
})
public abstract class Criteria {

    @Id
    @SequenceGenerator(
            name = "criteria_sequence",
            sequenceName = "criteria_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "criteria_sequence"
    )
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public abstract CriteriaType getType();
}
