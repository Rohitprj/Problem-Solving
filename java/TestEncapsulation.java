class Encapsulate {

    private String geekName;

    public String getName() { return geekName; }

    public void setName(String newName)
    {
        geekName = newName;
    }
}

public class TestEncapsulation {
    public static void main(String[] args)
    {
        Encapsulate obj = new Encapsulate();
        obj.setName("Harsh");
        System.out.println("Geek's name: " + obj.getName());

    }
}