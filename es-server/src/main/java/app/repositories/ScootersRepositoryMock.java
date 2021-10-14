package app.repositories;

import app.models.Scooter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Component
public class ScootersRepositoryMock implements ScootersRepository {

    private List<Scooter> scooterList;
    private static int usersCount = 0;

    public ScootersRepositoryMock() {
        this.scooterList = new ArrayList<>();
        for (int i = 0; i < 7; i++) {
            scooterList.add(Scooter.createSampleScooter(3000));
        }

    }

    @Override
    public List<Scooter> findAll() {
        return scooterList;
    }

    @Override
    public Scooter findById(long id) {
        return scooterList.get(scooterList.indexOf(id));
    }

    @Override
    public Scooter save(Scooter scooter) {

        if(scooter.getId() == 0) {
            synchronized (ScootersRepository.class) {
                scooter.setId(++usersCount);
            }
        }

        int pos = scooterList.indexOf(scooter);

        if(pos == -1) {
            scooterList.add(scooter);
        } else {
            scooterList.set(pos,scooter);
        }

        return scooter;


    }

    @Override
    public Scooter deleteById(long id) {

        Iterator<Scooter> iterator = scooterList.iterator();
        while(iterator.hasNext()) {
            Scooter user = iterator.next();

            if(user.getId() == id) {
                iterator.remove();
                return user;
            }
        }
        return null;


    }
}
