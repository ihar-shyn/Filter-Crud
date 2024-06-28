package ihar.shyn.FilterDemo.model;

import ihar.shyn.FilterDemo.model.enums.AmountCondition;
import ihar.shyn.FilterDemo.model.enums.CriteriaType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;


@Entity
public class AmountCriteria extends Criteria{
    @Column(name = "amountCondition")
    private AmountCondition condition;
    @Column(name = "amountValue")
    private Integer val;

    public AmountCriteria() {
    }

    public AmountCriteria(AmountCondition condition, Integer val) {
        this.condition = condition;
        this.val = val;
    }

    @Override
    public CriteriaType getType() {
        return CriteriaType.AMOUNT;
    }

    public AmountCondition getCondition() {
        return condition;
    }

    public void setCondition(AmountCondition condition) {
        this.condition = condition;
    }

    public Integer getVal() {
        return val;
    }

    public void setVal(Integer val) {
        this.val = val;
    }
}
