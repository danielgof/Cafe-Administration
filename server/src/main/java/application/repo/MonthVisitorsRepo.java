package application.repo;

import application.domain.ModelMonthVisitors;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MonthVisitorsRepo extends JpaRepository<ModelMonthVisitors, Long> {
}
