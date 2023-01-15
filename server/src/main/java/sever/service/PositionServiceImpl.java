package sever.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import sever.domain.ModelOrder;
import sever.domain.ModelPosition;
import sever.repo.PositionRepo;

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
