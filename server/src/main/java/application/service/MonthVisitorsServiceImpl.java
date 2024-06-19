package application.service;

import application.domain.ModelMonthVisitors;
import application.repo.MonthVisitorsRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MonthVisitorsServiceImpl implements MonthVisitorsService{
    private final MonthVisitorsRepo monthVisitorsRepo;
    @Override
    public List<ModelMonthVisitors> getMonthVisitors() {
        return monthVisitorsRepo.findAll();
    }

    @Override
    public ModelMonthVisitors save(ModelMonthVisitors monthVisitors) {
        return monthVisitorsRepo.save(monthVisitors);
    }
}
