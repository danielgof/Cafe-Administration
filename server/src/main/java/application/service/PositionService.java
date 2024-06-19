package application.service;

import application.domain.ModelPosition;
import java.util.List;

public interface PositionService {
    List<ModelPosition> getAllPositions();
    ModelPosition savePosition(ModelPosition position);
    ModelPosition deletePosition(Long id);
}
