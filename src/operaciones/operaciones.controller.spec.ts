import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: 10, b: 30 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(40);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: 100, b: 100 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(200);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'resta', a: 200, b: 100 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(100);
      });
  });
  
   it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicacion', a: 2, b: 3 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(6);
      });
  });

   it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'division', a: 200, b: 10 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(20);
      });
  });

  it('/operaciones (GET) with invalid operation', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'invalid', a: 10, b: 5 })
      .expect(502)
      .expect('Content-type', /application\/json/)
      .then((response) => {       
        expect(response.body.mensaje).toBe('operacion no pudo ser calculada');
      });
  });  

});