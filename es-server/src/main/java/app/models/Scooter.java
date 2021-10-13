package app.models;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;
//import io.swagger.annotations.ApiModel;

//@ApiModel(description = "Information about users")
public class Scooter {

    public static int num = 30000;

    private int id;
    private String tag;
    private static ScooterStatus scooterStatus;
    private String gpsLocation;
    private double mileage;
    private int batteryCharge;


    public Scooter(int id, String tag, ScooterStatus scooterStatus, String gpsLocation, double mileage, int batteryCharge) {
        this.id = id;
        this.tag = tag;
        this.scooterStatus = scooterStatus;
        this.gpsLocation = gpsLocation;
        this.mileage = mileage;
        this.batteryCharge = batteryCharge;
    }

    public static Scooter createSampleScooter(int pId) {

        pId = Scooter.num += 3;

        return new Scooter(pId, getRandomString(), scooterStatus = getRandomStatus(), getRandomAmsterdamGps(), getRandomInt(0, 10000, 0),
                (int) getRandomInt(5, 100, 0));
    }


    private static String getRandomString() {
        String randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        Random r = new Random();
        String result = " ";
        for (int i = 0; i < 8; i++) {
            result += randomChars.charAt(r.nextInt(randomChars.length()));
        }
        return result;
    }


    private static double getRandomInt(double to,double from, int fixed) {
        return ThreadLocalRandom.current().nextDouble(to, from + fixed);
    }


    public static ScooterStatus getRandomStatus() {
        var status = Math.floor(Math.random() * 3);
        switch ((int) status) {
            case 0: {
                System.out.println("in use");
                return ScooterStatus.IN_USE;
            }
            case 1: {
                System.out.println("idle");
                return ScooterStatus.IDLE;
            }
            case 2: {
                System.out.println("maintenance");
                return ScooterStatus.MAINTENANCE;
            }
            default: {
                System.out.println("default");
            }
        }
        return null;
    }


    public static String getRandomAmsterdamGps() {
        if (scooterStatus != ScooterStatus.IN_USE) {
            System.out.println("On gps creation: " + scooterStatus);

            return getRandomInt(52, 52.999999, 6) + ", " + getRandomInt(4, 4.999999, 6);
//            return this.getRandomInt(52, 52.999999, 6) + ', ' + this.getRandomInt(4, 4.999999, 6);
        } else {
            return null;
        }
    }

    public static int getNum() {
        return num;
    }

    public static void setNum(int num) {
        Scooter.num = num;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public static ScooterStatus getScooterStatus() {
        return scooterStatus;
    }

    public static void setScooterStatus(ScooterStatus scooterStatus) {
        Scooter.scooterStatus = scooterStatus;
    }

    public String getGpsLocation() {
        return gpsLocation;
    }

    public void setGpsLocation(String gpsLocation) {
        this.gpsLocation = gpsLocation;
    }

    public double getMileage() {
        return mileage;
    }

    public void setMileage(double mileage) {
        this.mileage = mileage;
    }

    public int getBatteryCharge() {
        return batteryCharge;
    }

    public void setBatteryCharge(int batteryCharge) {
        this.batteryCharge = batteryCharge;
    }
}
