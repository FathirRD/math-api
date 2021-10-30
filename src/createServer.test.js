const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it(
      `should return response with status code of 200 and the payload value
       is addition result of a and b correctly`, async () => {
      // Arrange
        const a = 10;
        const b = 20;
        const spyAdd = jest.spyOn(MathBasic, 'add');
        const server = createServer({ mathBasic: MathBasic });

        // Action
        const response = await server.inject({
          method: 'GET',
          url: `/add/${a}/${b}`,
        });

        // Assert
        const responseJson = JSON.parse(response.payload);
        expect(response.statusCode).toEqual(200);
        expect(responseJson.value).toEqual(30);
        expect(spyAdd).toBeCalledWith(a, b);
      },
    );
  });

  describe('when GET /subtract', () => {
    it(`should respond with a status code of 200 and the payload value
        is subtraction result of a and b correctly`, async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4); // a - b
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe('when GET /multiply', () => {
    it(`should respond with a status code of 200 and the payload value
        is multiplication result of a and b correctly`, async () => {
      // Arrange
      const a = 10;
      const b = 8;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(80); // a * b
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe('when GET /divide', () => {
    it(`should respond with a status code of 200 and the payload value
        is divided result of a and b correctly`, async () => {
      // Arrange
      const a = 12;
      const b = 6;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(2); // a / b
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/perimeter', () => {
    it(`should respond with a status code of 200 and the payload value
        is calculated result from perimeter of rectangle`, async () => {
      // Arrange
      const length = 12;
      const width = 6;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ figureCalculator: new FigureCalculator(MathBasic) });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(36); // 2 (length + width)
      expect(spyAdd).toBeCalledWith(length, width);
      expect(spyMultiply).toBeCalledWith(2, 18);
    });
  });

  describe('when GET /rectangle/area', () => {
    it(`should respond with a status code of 200 and the payload value
        is calculated result from area of rectangle`, async () => {
      // Arrange
      const length = 12;
      const width = 6;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ figureCalculator: new FigureCalculator(MathBasic) });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(72); // lenth * width
      expect(spyMultiply).toBeCalledWith(length, width);
    });
  });

  describe('when GET /triangle/perimeter', () => {
    it(`should respond with a status code of 200 and the payload value
        is calculated result from perimeter of triangle`, async () => {
      // Arrange
      const a = 12;
      const b = 6;
      const c = 6;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ figureCalculator: new FigureCalculator(MathBasic) });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${a}/${b}/${c}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(24); // a+b+c
      expect(spyAdd).toBeCalledWith(a, b, c);
    });
  });

  describe('when GET /triangle/area', () => {
    it(`should respond with a status code of 200 and the payload value
        is calculated result from perimeter of triangle`, async () => {
      // Arrange
      const base = 12;
      const height = 6;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ figureCalculator: new FigureCalculator(MathBasic) });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(36); // Base * Height / 2
      expect(spyMultiply).toBeCalledWith(base, height);
      expect(spyDivide).toBeCalledWith(72, 2);
    });
  });
});
