package com.example.demo.Controller;

import com.example.demo.Entity.RegularHours;
import com.example.demo.Entity.SpecialHours;
import com.example.demo.Service.Hours;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/hours")
public class HoursController {

    private final Hours hoursService;

    public HoursController(Hours hoursService) {
        this.hoursService = hoursService;
    }

    @GetMapping
    public RegularHours getRegularHours() {
        return hoursService.getRegularHours();
    }

    @GetMapping("/special")
    public List<SpecialHours> getAllSpecialHours() {
        return hoursService.getAllSpecialHours();
    }

    @PostMapping("/special")
    public SpecialHours addSpecialHours(@RequestBody SpecialHours specialHours) {
        return hoursService.addSpecialHours(specialHours);
    }

    @DeleteMapping("/special/{id}")
    public String deleteSpecialHours(@PathVariable Long id) {
        hoursService.deleteSpecialHours(id);
        return "Special hours deleted successfully";
    }
}
