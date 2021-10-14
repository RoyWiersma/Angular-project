package app.rest;

import app.Excaptions.NoRecordFoundException;
import app.Excaptions.ScooterNotFoundException;
import app.models.Scooter;
import app.models.ScooterStatus;
import app.repositories.ScootersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/scooters")
public class ScooterController {

    @Autowired
    ScootersRepository scootersRepository;

    @GetMapping("/scootersTest")
    public List<Scooter> getTestScooters(){
        return List.of(
                new Scooter(1,"Eve834", ScooterStatus.IDLE,"52.4324, 52.200", 12.5,85),
                new Scooter(2,"DeD007", ScooterStatus.IN_USE,"52.300, 52.3000", 02.04,50));
    }

    @GetMapping("/{id}")
    public List<Scooter> gettAllScooters(){
        return scootersRepository.findAll();
    }

    @GetMapping("/rest/users/{id}")
    public Scooter findOne(@PathVariable int id) {

        Scooter user = scootersRepository.findById(id);
        if(user == null) {
            throw new ScooterNotFoundException("id="+user.getId());
        }
        return user;
    }

    @PostMapping("/{id}")
    public ResponseEntity<Scooter> createUser(@RequestBody Scooter user) {

        Scooter savedUser = scootersRepository.save(user);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedUser.getId()).toUri();

        return ResponseEntity.created(location).body(savedUser);
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<Scooter>
    deleteUser(@PathVariable int id) {

        Scooter user = scootersRepository.deleteById(id);

        if(user == null) {
            throw new ScooterNotFoundException("id="+user.getId() + " does not math path parameter=" + id);
        }

        return ResponseEntity.ok(user);
    }

    @PutMapping("")
    public ResponseEntity<Object> updateUser(@RequestBody Scooter user) {

        Scooter previous = scootersRepository.findById(user.getId());

        if(previous == null) {
            throw new ScooterNotFoundException("id="+user.getId());
        }

        scootersRepository.save(user);

        return ResponseEntity.ok().build();
    }


}
