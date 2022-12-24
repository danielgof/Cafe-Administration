package sever.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sever.domain.ModelFood;
import sever.repo.FoodRepo;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class FoodServiceImpl implements FoodService {
    private final FoodRepo foodRepo;
    @Override
    public List<ModelFood> getAllFood() {
        return foodRepo.findAll();
    }

    @Override
    public ModelFood saveFood(ModelFood food) {
        return foodRepo.save(food);
    }

    @Override
    public List<?> getAllFoodTypes() {
        return foodRepo.findAllFoodTypes();
    }

    @Override
    public List<ModelFood> getAllSteaks() {
        return foodRepo.findAllSteaks();
    }

    @Override
    public List<ModelFood> getAllStarters() {
        return foodRepo.findAllStarters();
    }

    @Override
    public List<ModelFood> getAllSeafood() {
        return foodRepo.findAllSeafood();
    }

    @Override
    public List<ModelFood> getAllSalads() {
        return foodRepo.findAllSalads();
    }

    @Override
    public List<ModelFood> getAllDesserts() {
        return foodRepo.findAllDesserts();
    }

    @Override
    public List<ModelFood> getAllDrinks() {
        return foodRepo.findAllDrinks();
    }

    @Override
    public ModelFood getFoodByTitle(String title) {
        return foodRepo.findByTitle(title);
    }
}
