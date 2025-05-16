
class arrOutOfBound{
    public static void main(String[] args){
try {
    int[] arr = new int[5];
    arr[5] = 100; // Array index out of bounds
    System.out.println("Index updated");

}
catch (Exception e) {
    System.out.println("General exception occurred."+e);
}
//  catch (ArrayIndexOutOfBoundsException e) {
//     System.out.println("Index out of bounds!");

// } 
finally{
    System.out.println("Finall block always executes.");
}
    }
}

