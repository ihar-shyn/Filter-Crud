package ihar.shyn.FilterDemo.dao;

import ihar.shyn.FilterDemo.model.Filter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilterRepository extends JpaRepository<Filter, Long> {
}
