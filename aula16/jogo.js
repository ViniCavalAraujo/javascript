function jogo (x) {
    if (x == 10) {
        return 'acertou'
    } else {
        return 'errou'
    }
}

console.log(`Você ${jogo(10)}, essa palavra tem ${jogo(10).length} letras`)