// Q1: Demonstrate Autoboxing and Unboxing with Integer
public class AutoBoxingUnboxing {
    public static void main(String[] args) {
        // Autoboxing: converting int to Integer (Wrapper class)
        int num = 10;
        Integer obj = num; // Autoboxing
        System.out.println("Autoboxing: " + obj);

        // Unboxing: converting Integer to int
        Integer val = new Integer(20);
        int newNum = val; // Unboxing
        System.out.println("Unboxing: " + newNum);
    }
}

// Q2: Convert a given String to different numeric types
public class StringToNumeric {
    public static void main(String[] args) {
        String str = "123";

        int intValue = Integer.parseInt(str);
        double doubleValue = Double.parseDouble(str);
        float floatValue = Float.parseFloat(str);

        System.out.println("Integer: " + intValue);
        System.out.println("Double: " + doubleValue);
        System.out.println("Float: " + floatValue);
    }
}

// Q3: Convert an Integer object into a Double object
public class IntegerToDouble {
    public static void main(String[] args) {
        Integer intObj = 50; // Autoboxing
        Double doubleObj = intObj.doubleValue(); // Convert to Double

        System.out.println("Integer Object: " + intObj);
        System.out.println("Converted Double Object: " + doubleObj);
    }
}

// Q4: Convert a String to boolean using Boolean.parseBoolean()
public class StringToBoolean {
    public static void main(String[] args) {
        String str1 = "true";
        String str2 = "false";
        String str3 = "random"; // Any non-"true" string will be false

        boolean bool1 = Boolean.parseBoolean(str1);
        boolean bool2 = Boolean.parseBoolean(str2);
        boolean bool3 = Boolean.parseBoolean(str3);

        System.out.println("Boolean value of 'true': " + bool1);
        System.out.println("Boolean value of 'false': " + bool2);
        System.out.println("Boolean value of 'random': " + bool3);
    }
}

// Q5: Find the maximum and minimum value of an integer
public class MaxMinInteger {
    public static void main(String[] args) {
        System.out.println("Maximum Integer Value: " + Integer.MAX_VALUE);
        System.out.println("Minimum Integer Value: " + Integer.MIN_VALUE);
    }
}

// Q6: Convert a decimal number into binary, octal, and hexadecimal
public class NumberConversion {
    public static void main(String[] args) {
        int decimalNumber = 29;

        String binary = Integer.toBinaryString(decimalNumber);
        String octal = Integer.toOctalString(decimalNumber);
        String hexadecimal = Integer.toHexString(decimalNumber);

        System.out.println("Decimal: " + decimalNumber);
        System.out.println("Binary: " + binary);
        System.out.println("Octal: " + octal);
        System.out.println("Hexadecimal: " + hexadecimal);
    }
}
