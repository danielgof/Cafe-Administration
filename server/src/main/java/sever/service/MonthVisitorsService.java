package sever.service;

import org.springframework.stereotype.Service;
import sever.domain.ModelMonthVisitors;

import java.util.List;

public interface MonthVisitorsService {
    List<ModelMonthVisitors> getMonthVisitors();
    ModelMonthVisitors save(ModelMonthVisitors monthVisitors);
}
