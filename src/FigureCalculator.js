class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    // formula: (2 * (length + width))
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    // formula: (Length * Width)
    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    if (args.length !== 3) {
      throw new Error('fungsi hanya menerima tiga parameter');
    }

    let a;
    for (a = 0; a < args.length; a += 1) {
      if (typeof args[a] !== 'number') {
        throw new Error('fungsi hanya menerima parameter number');
      }
    }

    // formula: (a + b + c)
    return this._mathBasic.add(...args);
  }

  calculateTriangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }

    const [base, height] = args;

    if (typeof base !== 'number' || typeof height !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    // formula: (Length * Width)
    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
