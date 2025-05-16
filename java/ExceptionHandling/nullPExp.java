class NullPointerExample {
    public static void main(String[] args) {
        String str = null; 
        try {
            System.out.println(str.length()); // This will throw NullPointerException
        } catch (Exception e) {
            System.out.println("Caught NullPointerException: String is null");
        }
    }
}

//  0 1 2 3 4  
// [1,2,3,4,5]