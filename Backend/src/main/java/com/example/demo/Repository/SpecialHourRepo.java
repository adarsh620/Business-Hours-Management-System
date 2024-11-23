package com.example.demo.Repository;

import com.example.demo.Entity.SpecialHours;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecialHourRepo extends JpaRepository<SpecialHours, Long> {
}
