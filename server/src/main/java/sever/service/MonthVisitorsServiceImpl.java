package sever.service;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sever.domain.ModelMonthVisitors;
import sever.repo.MonthVisitorsRepo;

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
