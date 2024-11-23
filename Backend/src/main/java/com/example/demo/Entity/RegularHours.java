package com.example.demo.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class RegularHours {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String regularWeekdayHours;
    private String friday;
    private String weekendHours;

}
