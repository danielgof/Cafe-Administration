package sever.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import sever.domain.ModelMonthVisitors;

public interface MonthVisitorsRepo extends JpaRepository<ModelMonthVisitors, Long> {
}
