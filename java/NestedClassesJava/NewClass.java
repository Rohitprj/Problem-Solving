
class AccessClass{
    void myFunction(){
        System.out.println("Extended class");
    }
}
 class NewClass{
    public static void main(String[] args) {
        AccessClass ac = new  AccessClass();
        ac.myFunction();
        System.out.println("hello world");
    }
}