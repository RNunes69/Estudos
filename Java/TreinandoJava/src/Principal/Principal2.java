package Principal;

import java.util.Scanner;

public class Principal2 {
    public static void main(String[] args) {
        String titulo = "O Pequeno Príncipe";
        String autor = "Antoine de Saint-Exupéry";
        int paginas = 96;
        double preco = 39.90;
        String categoria = "";
        Scanner leitura = new Scanner(System.in);
        System.out.println("Qual genero vc gostaria de ver: ");
        categoria = leitura.next();

        String categoriaDescricao;

        if (Boolean.parseBoolean(categoria = String.valueOf('F'))) {
            categoriaDescricao = "Ficção";
        } else if (Boolean.parseBoolean(categoria = String.valueOf('N'))) {
            categoriaDescricao = "Não-ficção";
        } else if (Boolean.parseBoolean(categoria = String.valueOf('T'))) {
            categoriaDescricao = "Tecnologia";
        } else if (Boolean.parseBoolean(categoria = String.valueOf('H'))) {
            categoriaDescricao = "História";
        } else {
            categoriaDescricao = "Categoria inválida";
        }

        System.out.println("Livro cadastrado: \"" + titulo + "\", de " + autor + ". Ele possui " + paginas +
                " páginas, custa R$" + preco + " e pertence à categoria " + categoriaDescricao + ".");
    }
}
