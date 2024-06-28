package ihar.shyn.FilterDemo.service;

import ihar.shyn.FilterDemo.dao.FilterRepository;
import ihar.shyn.FilterDemo.model.Filter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilterService {
    private final FilterRepository filterRepository;

    @Autowired
    public FilterService(FilterRepository filterRepository) {
        this.filterRepository = filterRepository;
    }

    public List<Filter> getAllFilters() {
        return filterRepository.findAll();
    }

    public Filter save(Filter theFilter) {
        return filterRepository.save(theFilter);
    }
}
