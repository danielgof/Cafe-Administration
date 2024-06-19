package application.service;

import application.domain.ModelPosition;
import application.repo.PositionRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class PositionServiceImpl implements PositionService {

    private final PositionRepo positionRepo;

    @Override
    public List<ModelPosition> getAllPositions() {
        return positionRepo.findAll();
    }

    @Override
    public ModelPosition savePosition(ModelPosition position) {
        return positionRepo.save(position);
    }

    @Override
    public ModelPosition deletePosition(Long id) {
        ModelPosition position = positionRepo.find(id);
        positionRepo.delete(position);
        return position;
    }
}
