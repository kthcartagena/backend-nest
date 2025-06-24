import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
  operar(operacion: string, a: number, b: number) {
    switch (operacion) {
      case 'suma':    
    } 

    if (operacion === 'suma') {
      return this.#suma(a, b);
    }

    if (operacion === 'resta') {
      return this.#resta(a, b);
    }

    if (operacion === 'multiplicacion') {
      return this.#multiplicacion(a, b);
    } 

    if (operacion === 'division') {
      return this.#division(a, b);
    }

    if (operacion === 'potencia') {
      return this.#potencia(a, b);
    }
    
   if (operacion === 'factorial') {   
      return this.#factorial(a);  
   }
  }

  #suma(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a + b;
  }

  #resta(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a - b;
  } 

  #multiplicacion(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a * b;
  }

  #division(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    if (b === 0) {
      throw new Error('No se puede dividir por 0.');
    }    
    return a / b;
  } 

  #potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a ** b;
  } 

  #factorial(n: number): number {
    if (n < 0) {
      throw new Error('El factorial no está definido para números negativos.');
    }   
    if (n === 0 || n === 1) {
      return 1;
    } 
     if (n === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof n !== 'number') {
      return NaN;
    }   
    return n * this.#factorial(n - 1);
  }
}