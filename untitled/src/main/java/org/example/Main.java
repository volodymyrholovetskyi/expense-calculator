package org.example;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        double v = Math.pow(2, 2) * Math.PI;

        String a = "java";
        String b = "java";
        System.out.println(a==b);
        if (2 % 2 == 0) {
            int[] list = {2, 4, 7, 10, 11, 45, 50, 59, 60, 66, 70, 79};
            int i = Arrays.binarySearch(list, 12);
            System.out.println(i);
            System.out.println("Ged" + ((9/5) * 30 +32) + "dfd");

            Scanner sc = new Scanner(System.in);
            System.out.println("? ");
            String text = sc.nextLine();
            if (text.matches(".*Java.*")) {
                System.out.println("Contens");
            }

            int[][] arr = {
                    {1, 2, 3},
                    {1, 3}
            };

        }
    }

    public static class A {

        public A() {

        }

    }

    public static class B extends A {

        public B(String a) {

        }

    }
}