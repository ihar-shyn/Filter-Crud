package ihar.shyn.FilterDemo.service;

import ihar.shyn.FilterDemo.dao.CriteriaRepository;
import ihar.shyn.FilterDemo.dao.FilterRepository;
import ihar.shyn.FilterDemo.model.AmountCriteria;
import ihar.shyn.FilterDemo.model.DateCriteria;
import ihar.shyn.FilterDemo.model.Filter;
import ihar.shyn.FilterDemo.model.TitleCriteria;
import ihar.shyn.FilterDemo.model.enums.AmountCondition;
import ihar.shyn.FilterDemo.model.enums.DateCondition;
import ihar.shyn.FilterDemo.model.enums.Priority;
import ihar.shyn.FilterDemo.model.enums.TitleCondition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class DemodataService {

    private final FilterRepository filterRepository;
    private final CriteriaRepository criteriaRepository;

    @Autowired
    public DemodataService(FilterRepository filterRepository, CriteriaRepository criteriaRepository) {
        this.filterRepository = filterRepository;
        this.criteriaRepository = criteriaRepository;
    }

    public void populateDemodata() {
        Filter filter1 = new Filter();
        filter1.setName("First Filter");
        filter1.setCriteriaList(List.of(
                new TitleCriteria(TitleCondition.START_WITH, "Meow"),
                new AmountCriteria(AmountCondition.MORE, 4),
                new DateCriteria(DateCondition.BEFORE, LocalDate.now())
        ));
        filter1.setPriority(Priority.High);
        filterRepository.save(filter1);

        Filter filter2 = new Filter();
        filter2.setName("Second Filter");
        filter2.setCriteriaList(List.of(
                new TitleCriteria(TitleCondition.END_WITH, "Bark!"),
                new AmountCriteria(AmountCondition.EQUAL, 7)
        ));
        filter2.setPriority(Priority.Low);
        filterRepository.save(filter2);

    }
}
