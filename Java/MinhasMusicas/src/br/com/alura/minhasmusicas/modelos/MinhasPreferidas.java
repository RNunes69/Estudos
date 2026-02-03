package br.com.alura.minhasmusicas.modelos;

public class MinhasPreferidas {

    public void inclui(Audio audio){
        if(audio.getClassificacao() >= 9){
            System.out.println(audio.getTitulo() + " é Top 50");
        }else {
            System.out.println(audio.getTitulo() + " é Top 200");
        }
    }




}
