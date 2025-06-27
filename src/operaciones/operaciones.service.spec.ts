import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it
  it('operacion debe sumar', () => {
    let a: any = 10;
    let b = 30;
    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = 50;
    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = -50;
    expect(service.operar('suma', a, b)).not.toBe(-100);

    a = Math.PI;
    b = 30;
    expect(service.operar('suma', a, b)).toBeCloseTo(33.14, 2);

    a = null;
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('suma', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('operacion debe restar', () => {
    let a: any = 10;
    let b = 30;
    expect(service.operar('resta', a, b)).toBe(-20);

    a = -10;
    b = 50;
    expect(service.operar('resta', a, b)).toBe(-60);

    a = -10;
    b = -50;
    expect(service.operar('resta', a, b)).not.toBe(50);

    a = Math.PI;
    b = 30;
    expect(service.operar('resta', a, b)).toBeCloseTo(-26.86, 2);

    a = null;
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('resta', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('operacion debe multiplicar', () => {
    let a: any = 10;
    let b = 30;
    expect(service.operar('multiplicacion', a, b)).toBe(300);

    a = -10;
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBe(-500);

    a = -10;
    b = -50;
    expect(service.operar('multiplicacion', a, b)).not.toBe(600);

    a = Math.PI;
    b = 30;
    expect(service.operar('multiplicacion', a, b)).toBeCloseTo(94.25, 2);

    a = null;
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('multiplicacion', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('operacion debe dividir', () => {
    let a: any = 30;
    let b = 10;
    expect(service.operar('division', a, b)).toBe(3);

    a = -50;
    b = 10;
    expect(service.operar('division', a, b)).toBe(-5);

    a = -50;
    b = -10;
    expect(service.operar('division', a, b)).not.toBe(6);

    a = null;
    b = 50;
    expect(service.operar('division', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('division', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

    a= Math.PI;
    b=50;
    expect(service.operar('division', a, b)).toBeCloseTo(0.0628, 4);
    
    a = 10;
    b = 0;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede dividir por 0.');
  });

  it('operacion debe elevar en potencia', () => {  
    let a: any = 2;
    let b = 3;
    expect(service.operar('potencia', a, b)).toBe(8);

    a = -2;
    b = 3;
    expect(service.operar('potencia', a, b)).toBe(-8);

    a = 2;
    b = -3;
    expect(service.operar('potencia', a, b)).toBe(0.125);

    a = -2;
    b = -3;
    expect(service.operar('potencia', a, b)).not.toBe(-1.125);

    a = Math.PI;
    b = 2;
    expect(service.operar('potencia', a, b)).toBeCloseTo(9.87, 2);

    a = null;
    b = 50;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('potencia', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('operacion debe calcular factorial', () => {
    let a: any = 5;
    let b=0;
    expect(service.operar('factorial', a, b)).toBe(120);

    a = 0;
    expect(service.operar('factorial', a,b)).toBe(1);

    a = null;
    expect(service.operar('factorial', a, b)).toBeNaN();

    a = -2;
    expect(() => {
      service.operar('factorial', a,b);
    }).toThrow('El factorial no está definido para números negativos.');

    a = '10';
    expect(service.operar('factorial', a, b)).toBeNaN();

    a = undefined;
    expect(() => {
      service.operar('factorial', a,b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  }); 

  
});
