package application.service;

import application.domain.ModelMonthVisitors;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MonthVisitorsService {
    List<ModelMonthVisitors> getMonthVisitors();
    ModelMonthVisitors save(ModelMonthVisitors monthVisitors);
}
