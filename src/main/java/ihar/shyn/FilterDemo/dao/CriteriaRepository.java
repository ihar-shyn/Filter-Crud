package ihar.shyn.FilterDemo.dao;

import ihar.shyn.FilterDemo.model.Criteria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CriteriaRepository extends JpaRepository<Criteria, Long> {

}
