import java.util.Scanner;

public class BasicApp {
    public static void main(String[] args) {
        // Print a welcome message
        System.out.println("Hello, World! Welcome to the Basic Java Application.");

        // Take user input
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        // Display a personalized message
        System.out.println("Nice to meet you, " + name + "!");

        // Close the scanner
        scanner.close();
    }
}
