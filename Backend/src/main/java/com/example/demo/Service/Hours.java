package com.example.demo.Service;


import com.example.demo.Entity.RegularHours;
import com.example.demo.Entity.SpecialHours;

import java.util.List;

public interface Hours {
    RegularHours getRegularHours();
    List<SpecialHours> getAllSpecialHours();
    SpecialHours addSpecialHours(SpecialHours specialHours);
    void deleteSpecialHours(Long id);

}
