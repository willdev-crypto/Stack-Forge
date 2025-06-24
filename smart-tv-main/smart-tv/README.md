## Sistema de Smart TV em Java

Este projeto é um exemplo de um sistema de Smart TV implementado em Java. Ele demonstra conceitos básicos de programação orientada a objetos, como classes, métodos e encapsulamento.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- A pasta `.vscode` contém configurações específicas do Visual Studio Code.
- O arquivo `README.md` contém informações sobre o projeto.
- A pasta `src` contém os arquivos fonte Java.

## Arquivos Fonte

### SmartTv.java

A classe `SmartTv` representa uma televisão inteligente com as seguintes funcionalidades:

- Ligar e desligar a TV.
- Aumentar e diminuir o volume.
- Mudar, aumentar e diminuir o canal.

#### Métodos

- `ligar()`: Liga a TV.
- `desligar()`: Desliga a TV.
- `aumentarVolume()`: Aumenta o volume da TV.
- `diminuirVolume()`: Diminui o volume da TV.
- `mudarCanal(int novoCanal)`: Muda o canal da TV para o canal especificado.
- `aumentarCanal()`: Aumenta o canal da TV em 1.
- `diminuirCanal()`: Diminui o canal da TV em 1.
- `getCanal()`: Retorna o canal atual da TV.
- `getVolume()`: Retorna o volume atual da TV.
- `isLigada()`: Retorna o estado atual da TV (ligada ou desligada).

### Usuario.java

A classe `Usuario` contém o método `main` que demonstra o uso da classe `SmartTv`. Ele realiza as seguintes operações:

- Cria uma instância de `SmartTv`.
- Diminui e aumenta o volume.
- Muda o canal.
- Liga e desliga a TV.
- Exibe o estado atual da TV, incluindo canal, volume e se está ligada ou desligada.

## Configuração do Projeto

O arquivo `.vscode/settings.json` contém as configurações do projeto para o Visual Studio Code:

```json
{
    "java.project.sourcePaths": ["src"],
    "java.project.outputPath": "bin",
    "java.project.referencedLibraries": [
        "lib/**/*.jar"
    ]
}
javac src/*.java -d bin

