import java.util.Scanner;

class MyProg{
public static void main(String[] args){
System.out.println("Hello world");
// try {
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    System.out.println("Enter age "+a);
    if (a>100) {
        throw new IllegalArgumentException();
    }
    System.out.println("Programes executed");
// } catch (Exception e) {
// }
}
}