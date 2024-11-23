package com.example.demo.Service;

import com.example.demo.Entity.RegularHours;
import com.example.demo.Entity.SpecialHours;
import com.example.demo.Repository.RegularHourRepo;
import com.example.demo.Repository.SpecialHourRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class HoursImplement implements Hours {

    @Autowired
    private RegularHourRepo regularHoursRepo;
    @Autowired
    private SpecialHourRepo specialHourRepo;

    @Override
    public RegularHours getRegularHours() {
        return regularHoursRepo.findAll().get(0);
    }

    @Override
    public List<SpecialHours> getAllSpecialHours() {
        return specialHourRepo.findAll();
    }

    @Override
    public SpecialHours addSpecialHours(SpecialHours specialHours) {
        return specialHourRepo.save(specialHours);
    }

    @Override
    public void deleteSpecialHours(Long id) {
        specialHourRepo.deleteById(id);
    }
}
