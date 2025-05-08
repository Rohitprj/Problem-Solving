// Abstract class
abstract class Animal {
    // abstract void makeSound();
    void sleep() {
        System.out.println("Sleeping...");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();  // Create a Dog object
        myDog.makeSound();      // Calls the abstract method
        myDog.sleep();          // Calls the regular method
    }
}
