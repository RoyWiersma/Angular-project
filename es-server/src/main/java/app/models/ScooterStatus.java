package app.models;

import java.util.List;
import java.util.Random;

public enum ScooterStatus {
    IDLE("IDLE"),
    IN_USE("IN_USE") ,
    MAINTENANCE("MAINTENANCE");


    private static final List<ScooterStatus> VALUES = List.of(values());
    private static final int SIZE = VALUES.size();
    private static final Random RANDOM = new Random();

    public static ScooterStatus randomScooterStatus()  {
        return VALUES.get(RANDOM.nextInt(SIZE));
    }


    private String status;

    ScooterStatus(String status){
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    @Override
    public String toString() {
        return "ScooterStatus{" +
                "status='" + status + '\'' +
                '}';
    }
}
