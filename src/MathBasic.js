const MathBasic = {
  add: (...args) => {
    if (args.length < 2) {
      throw new Error('fungsi add minimal memiliki 2 parameter');
    }

    let a;
    for (a = 0; a < args.length; a += 1) {
      if (typeof args[a] !== 'number') {
        throw new Error('fungsi hanya menerima parameter number');
      }
    }

    let result = 0;
    for (a = 0; a < args.length; a += 1) {
      result += args[a];
    }

    return result;
  },
  subtract: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi subtract hanya menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return a - b;
  },

  multiply: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi multiply hanya menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return a * b;
  },

  divide: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi multiply hanya menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    if (b === 0) {
      throw new Error('pembagi tidak boleh 0');
    }

    return a / b;
  },
};

module.exports = MathBasic;
