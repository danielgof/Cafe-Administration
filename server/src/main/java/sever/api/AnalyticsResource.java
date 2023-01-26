package sever.api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sever.domain.ModelEmployee;
import sever.domain.ModelMonthVisitors;
import sever.service.MonthVisitorsService;

import java.util.List;

@Slf4j
@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/analytics")
public class AnalyticsResource {
    private final MonthVisitorsService monthVisitorsService;
    @GetMapping("/num_visitors")
    public ResponseEntity<List<ModelMonthVisitors>> numVisitors() {
        return ResponseEntity.ok().body(monthVisitorsService.getMonthVisitors());
    }
}
