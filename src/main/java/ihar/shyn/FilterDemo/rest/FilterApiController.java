package ihar.shyn.FilterDemo.rest;

import ihar.shyn.FilterDemo.model.Filter;
import ihar.shyn.FilterDemo.service.FilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class FilterApiController {

    private final FilterService filterService;

    @Autowired
    public FilterApiController(FilterService filterService) {
        this.filterService = filterService;
    }

    @GetMapping("/filters")
    public List<Filter> getAllFilters() {
        return filterService.getAllFilters();
    }

    @PostMapping("/filters")
    public Filter addFilter(@RequestBody Filter theFilter) {
        theFilter.setId(0L);
        return filterService.save(theFilter);
    }
}
