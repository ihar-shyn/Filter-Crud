package ihar.shyn.FilterDemo.model;

import ihar.shyn.FilterDemo.model.enums.CriteriaType;
import ihar.shyn.FilterDemo.model.enums.TitleCondition;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class TitleCriteria extends Criteria {
    @Column(name = "titleCondition")
    private TitleCondition condition;
    @Column(name = "titleValue")
    private String val;

    public TitleCriteria() {
    }

    public TitleCriteria(TitleCondition condition, String val) {
        this.condition = condition;
        this.val = val;
    }

    @Override
    public CriteriaType getType() {
        return CriteriaType.TITLE;
    }

    public TitleCondition getCondition() {
        return condition;
    }

    public void setCondition(TitleCondition condition) {
        this.condition = condition;
    }

    public String getVal() {
        return val;
    }

    public void setVal(String val) {
        this.val = val;
    }
}
