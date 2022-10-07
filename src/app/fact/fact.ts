export function fact(n : number){
    let aux = 1;
    let fa = 1;
    if(n > 16 || n < 0){
        return 0;
    } else {
        while (aux <= n){
            fa = fa * aux;
            aux = aux + 1;
        }
        return fa;
    }
}
