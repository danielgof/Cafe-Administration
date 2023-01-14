package sever.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import sever.domain.ModelPosition;
import sever.repo.PositionRepo;

import javax.transaction.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class PositionServiceImpl implements PositionService {

    private final PositionRepo positionRepo;
    @Override
    public ModelPosition savePosition(ModelPosition position) {
        return positionRepo.save(position);
    }
}
