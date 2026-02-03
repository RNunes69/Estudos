package Principal;

import java.util.Scanner;

public class Pricipal3 {
    public static void main(String[] args) {
        int degraus = 1;
        int quantidade = 0;
        Scanner leitura = new Scanner(System.in);
        System.out.println("Quantos degraus devo subir: ");
        quantidade = leitura.nextInt();

        while (degraus != quantidade + 1){
            System.out.println("Degrau "+ degraus);
            degraus ++;
        }
    }
}
