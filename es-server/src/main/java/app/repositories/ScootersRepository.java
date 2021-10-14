package app.repositories;

import app.models.Scooter;

import java.util.List;

public interface ScootersRepository {

    List<Scooter> findAll();
    Scooter findById(long id);

    Scooter save (Scooter scooter);

    Scooter deleteById(long id);
}
