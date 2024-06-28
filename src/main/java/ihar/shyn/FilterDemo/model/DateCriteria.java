package ihar.shyn.FilterDemo.model;

import ihar.shyn.FilterDemo.model.enums.CriteriaType;
import ihar.shyn.FilterDemo.model.enums.DateCondition;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import java.time.LocalDate;

@Entity
public class DateCriteria extends Criteria {
    @Column(name = "dateCondition")
    private DateCondition condition;
    @Column(name = "dateValue")
    private LocalDate val;

    public DateCriteria() {
    }

    public DateCriteria(DateCondition condition, LocalDate val) {
        this.condition = condition;
        this.val = val;
    }

    @Override
    public CriteriaType getType() {
        return CriteriaType.DATE;
    }

    public DateCondition getCondition() {
        return condition;
    }

    public void setCondition(DateCondition condition) {
        this.condition = condition;
    }

    public LocalDate getVal() {
        return val;
    }

    public void setVal(LocalDate val) {
        this.val = val;
    }
}
