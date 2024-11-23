package com.example.demo.Repository;

import com.example.demo.Entity.RegularHours;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegularHourRepo extends JpaRepository<RegularHours, Long> {

}
