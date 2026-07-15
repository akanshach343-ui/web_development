import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            long x = sc.nextLong();
            long y = sc.nextLong();

            // Step 1: compute a
            long a = (2 * y) / (1 + 2 * x) + 1;

            // Step 2: check validity
            if (a >= (y + x - 1) / x) { // equivalent to a >= ceil(y/x)
                System.out.println(-1);
            } else {
                long b = y - a * x;
                if (b > 0 && a > 2 * b) {
                    System.out.println(a + " " + b);
                } else {
                    System.out.println(-1);
                }
            }
        }

        sc.close();
    }
}
