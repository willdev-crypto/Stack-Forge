public class Usuario {
    public static void main(String[] args) throws Exception {
        SmartTv smartTv = new SmartTv();

        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.aumentarVolume();

        System.out.println("Canal Atual : " + smartTv.getCanal());
        smartTv.mudarCanal(12);

        System.out.println("Canal Atual : " + smartTv.getCanal());
        System.out.println("Volume Atual : " + smartTv.getVolume());

        System.out.println("Tv Ligada : " + smartTv.isLigada());

        smartTv.ligar();
        System.out.println("Novo Status -> Tv Ligada : " + smartTv.isLigada());

        smartTv.desligar();
        System.out.println("Novo Status -> Tv Ligada : " + smartTv.isLigada());
    }
}
