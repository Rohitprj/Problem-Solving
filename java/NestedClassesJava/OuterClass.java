// public class OuterClass {
//     private static String outerStaticVar = "Hello from static variable";

//     // Static Nested Class
//     static class StaticNested {
//         void display() {
//             System.out.println("Inside Static Nested Class");
//             System.out.println("Accessing OuterClass static var: " + outerStaticVar);
//         }
//     }
// }

public class OuterClass {
    private static String outerStaticVar = "Hello from static variable";

    // Static Nested Class
    static class StaticNested {
        void display() {
            System.out.println("Inside Static Nested Class");
            System.out.println("Accessing OuterClass static var: " + outerStaticVar);
        }
    }

    public static void main(String[] args) {
        // Creating an instance of StaticNested and calling display method
        StaticNested nested = new StaticNested();
        nested.display();
    }
}
