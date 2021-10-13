package app.rest;

import app.models.Scooter;
import app.models.ScooterStatus;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ScooterController {

    @GetMapping("/scooters")
    public List<Scooter> getTestScooters(){
        return List.of(
                new Scooter(1,"Eve834", ScooterStatus.IDLE,"52.4324, 52.200", 12.5,85),
                new Scooter(2,"DeD007", ScooterStatus.IN_USE,"52.300, 52.3000", 02.04,50));
    }



}
