

/**
 * a test using "function expressions" & "arrow functions"
 * 
 * 
 * // contexto 'this' dinámico

const object = {
    valor:   42,
    metodo: function() {
        console.log(this.valor); // 'this' se refiere a 'objeto'
    }
}

object.metodo()
 * 
 */

