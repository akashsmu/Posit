const infi = "100000000000000000000000";
const zero = "000000000000000000000000";

function inverseFunc(input) {
  var output = "";
  for (let i of input) {
    if (i === "0") {
      output = output + "1";
    } else if (i === "1") {
      output = output + "0";
    }
  }
  return output;
}

function zeros(num) {
  var zeroString = "";
  for (let i = 0; i < num; i++) {
    zeroString = zeroString + "0";
  }
  return zeroString;
}

function twosComplement(input1) {
  var invari;
  var vari;
  var foundZero = false;
  var output;
  var input = inverseFunc(input1);
  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] === "0") {
      invari = input.slice(0, i);
      vari = input.slice(i, input.length);
      output = invari + inverseFunc(vari);
      foundZero = true;
      break;
    }
  }
  if (!foundZero) {
    output = "1" + inverseFunc(input);
  }
  return output;
}

function extractFields(posit, exp) {
  var positObj = {
    rc: null,
    regime: 1,
    sign: null,
    exponent: null,
    expDec: null,
    fraction: null,
    posit2c: null,
  };
  positObj.sign = posit[0];
  if (positObj.sign === "1") {
    positObj.posit2c = twosComplement(posit);
  } else if (positObj.sign === "0") {
    positObj.posit2c = posit;
  }

  for (let i = 1; i < positObj.posit2c.length; i++) {
    try {
      if (positObj.posit2c[i] === "0") {
        positObj.rc = "0";
        if (positObj.posit2c[i] === positObj.posit2c[i + 1]) {
          positObj.regime = positObj.regime + 1;
          continue;
        }
        if (positObj.posit2c[i] !== positObj.posit2c[i + 1]) {
          positObj.exponent = positObj.posit2c.slice(i + 2, i + exp + 2);
          if (positObj.exponent.length !== exp) {
            positObj.exponent =
              zeros(exp - positObj.exponent.length) + positObj.exponent;
          }
          positObj.fraction =
            "01" + positObj.posit2c.slice(i + exp + 2, positObj.posit2c.length);
          break;
        }
      }
      if (positObj.posit2c[i] === "1") {
        positObj.rc = "1";
        if (positObj.posit2c[i] === positObj.posit2c[i + 1]) {
          positObj.regime = positObj.regime + 1;
          continue;
        }
        if (positObj.posit2c[i] !== positObj.posit2c[i + 1]) {
          positObj.exponent = positObj.posit2c.slice(i + 2, i + exp + 2);
          if (positObj.exponent.length !== exp) {
            positObj.exponent =
              zeros(exp - positObj.exponent.length) + positObj.exponent;
          }
          positObj.fraction =
            "01" + positObj.posit2c.slice(i + exp + 2, positObj.posit2c.length);
          break;
        }
      }
    } catch (err) {
      positObj.regime = positObj.posit2c.length - 2;
      positObj.exponent = null;
      positObj.fraction = null;
    }
  }
  if (positObj.rc === "0") {
    positObj.regime = -positObj.regime;
  } else if (positObj.rc === "1") {
    positObj.regime = positObj.regime - 1;
  }
  var l = positObj.fraction.length;
  for (let i = 0; i < 21 - l; i++) {
    positObj.fraction = "0" + positObj.fraction;
  }
  positObj.expDec = exponentMapper(positObj.exponent);
  return positObj;
}

function convertPtoD(pString, es) {
  var useed = Math.pow(2, Math.pow(2, es));
  var positObj = extractFields(pString, es);
  positObj.fraction = positObj.fraction.slice(2);
  var dec = 0;
  var frac = 0;
  var dpow = 1;
  for (let i of positObj.fraction) {
    frac = frac + (1 / Math.pow(2, dpow)) * parseInt(i);
    dpow = dpow + 1;
  }
  frac = frac + 1;
  dec = Math.pow(useed, positObj.regime) * Math.pow(2, positObj.expDec) * frac;
  if (positObj.sign === "1") {
    dec = -dec;
  }
  return dec;
}

function exponentMapper(a) {
  return parseInt(a, 2);
}

function decToBin(a, pres) {
  var a1 = Math.abs(a);
  var binString = "";
  while (a1 > 0) {
    var rem = a1 % 2;
    binString = rem + binString;
    a1 = Math.floor(a1 / 2);
  }
  if (binString.length < pres) {
    for (let i = 0; i < pres; i++) {
      if (binString.length === pres) {
        break;
      } else {
        binString = "0" + binString;
      }
    }
  }
  return binString;
}

function binaryAdder(a, b, signa, signb) {
  var deca = parseInt(a, 2);
  var decb = parseInt(b, 2);
  var sumObj = {};
  if (signa === "0" && signb === "0") {
    sumObj.sum = deca + decb;
  } else if (signa === "0" && signb === "1") {
    sumObj.sum = deca - decb;
  } else if (signa === "1" && signb === "0") {
    sumObj.sum = -deca + decb;
  } else if (signa === "1" && signb === "1") {
    sumObj.sum = -(deca + decb);
  }
  if (sumObj.sum < 0) {
    sumObj.sign = "1";
  } else if (sumObj.sum > 0) {
    sumObj.sign = "0";
  } else {
    sumObj.sign = "0";
  }
  return sumObj;
}

function binaryMultiplier(a, b, signa, signb) {
  var deca = parseInt(a, 2);
  var decb = parseInt(b, 2);
  var prodObj = {};
  if (signa === signb) {
    prodObj.prod = deca * decb;
  } else if (signa !== signb) {
    prodObj.prod = -deca * decb;
  }
  if (prodObj.prod < 0) {
    prodObj.sign = "1";
  } else if (prodObj.prod > 0) {
    prodObj.sign = "0";
  } else {
    prodObj.sign = "0";
  }
  return prodObj;
}

function shifter(a, shift, direction) {
  var shifted =
    direction === "left"
      ? a.slice(shift, a.length)
      : a.slice(0, a.length - shift);
  for (let i = 0; i < shift; i++) {
    if (direction === "right") {
      shifted = "0" + shifted;
    } else if (direction === "left") {
      shifted = shifted + "0";
    }
  }
  return shifted;
}

function swapper(paObj, pbObj) {
  var swappedObj = {
    pLarge: {},
    pSmall: {},
  };

  if (paObj.regime > pbObj.regime) {
    swappedObj.pLarge = paObj;
    swappedObj.pSmall = pbObj;
  } else if (paObj.regime < pbObj.regime) {
    swappedObj.pLarge = pbObj;
    swappedObj.pSmall = paObj;
  } else if (paObj.regime === pbObj.regime) {
    if (paObj.expDec > pbObj.expDec) {
      swappedObj.pLarge = paObj;
      swappedObj.pSmall = pbObj;
    } else if (paObj.expDec < pbObj.expDec) {
      swappedObj.pLarge = pbObj;
      swappedObj.pSmall = paObj;
    } else {
      swappedObj.pLarge = paObj;
      swappedObj.pSmall = pbObj;
    }
  }
  return swappedObj;
}

function fracAdjust(fracb, scale) {
  return shifter(fracb, scale, "right");
}

export function positAdder(pa, pb, exp) {
  var useed = Math.pow(2, Math.pow(2, exp));
  if (pa === zero && pb === zero) {
    return zero;
  }
  if (pa === zero && pb !== zero) {
    return pb;
  }
  if (pa !== zero && pb === zero) {
    return pa;
  }
  var positObj = {
    paObj: {},
    pbObj: {},
  };
  var psObj = {};
  positObj.paObj = extractFields(pa, exp);
  positObj.pbObj = extractFields(pb, exp);
  var positObj1 = swapper(positObj.paObj, positObj.pbObj);
  positObj.paObj = positObj1.pLarge;
  positObj.pbObj = positObj1.pSmall;
  var scaleFac =
    positObj.paObj.regime * Math.pow(2, exp) + positObj.paObj.expDec;
  var scaledExpoDiff =
    Math.pow(2, exp) * (positObj.paObj.regime - positObj.pbObj.regime) +
    (positObj.paObj.expDec - positObj.pbObj.expDec);
  positObj.pbObj.fraction = fracAdjust(positObj.pbObj.fraction, scaledExpoDiff);
  psObj.regime = positObj.paObj.regime;
  psObj.expDec = positObj.paObj.expDec;
  var result = binaryAdder(
    positObj.paObj.fraction,
    positObj.pbObj.fraction,
    positObj.paObj.sign,
    positObj.pbObj.sign
  );
  psObj.sign = result.sign;
  if (result.sum === 0) {
    return zero;
  }
  var resFrac = decToBin(result.sum, 21);
  var overflow = 0;
  if (resFrac[0] === "1") {
    resFrac = resFrac.slice(0, 20);
    overflow = 1;
  } else if (resFrac[0] === "0") {
    resFrac = resFrac.slice(1, 21);
    overflow = 0;
  }
  var lz = 0;
  for (let i of resFrac) {
    if (i === "0") {
      lz = lz + 1;
    } else break;
  }
  resFrac = shifter(resFrac, lz, "left");
  // psObj.regime = Math.floor(
  //   (psObj.regime * Math.pow(2, exp) - lz) / Math.pow(2, exp)
  // );
  // psObj.expDec = psObj.expDec + overflow;

  scaleFac = scaleFac + overflow - lz;
  psObj.expDec = scaleFac % Math.pow(2, exp);
  if (psObj.expDec >= Math.pow(2, exp) - 1) {
    psObj.expDec = Math.pow(2, exp) - 1;
  }
  // scaleFac = Math.floor(scaleFac / 4);
  psObj.regime = Math.floor(scaleFac / Math.pow(2, exp));
  psObj.exponent = decToBin(psObj.expDec, exp);
  psObj.fraction = resFrac;
  var finalPosit = "";
  var regimeString = "";
  if (psObj.regime < 0) {
    for (let i = 0; i < Math.abs(psObj.regime); i++) {
      regimeString = regimeString + "0";
    }
    regimeString = regimeString + "1";
  }
  if (psObj.regime >= 0) {
    for (let i = 0; i < Math.abs(psObj.regime) + 1; i++) {
      regimeString = regimeString + "1";
    }
    regimeString = regimeString + "0";
  }
  finalPosit =
    finalPosit + "0" + regimeString + psObj.exponent + psObj.fraction.slice(1);
  if (finalPosit.length > 24) {
    finalPosit = finalPosit.slice(0, 24);
  }
  if (psObj.sign === "1") {
    finalPosit = twosComplement(finalPosit);
  }
  return finalPosit;
}

export function positMultiplier(pa, pb, exp) {
  var useed = Math.pow(2, Math.pow(2, exp));
  if (pa === zero || pb === zero) {
    return zero;
  }
  var positObj = {
    paObj: {},
    pbObj: {},
  };
  var pmObj = {};
  positObj.paObj = extractFields(pa, exp);
  positObj.pbObj = extractFields(pb, exp);
  var result = binaryMultiplier(
    positObj.paObj.fraction.slice(1, 21),
    positObj.pbObj.fraction.slice(1, 21),
    positObj.paObj.sign,
    positObj.pbObj.sign
  );
  var scaleFac =
    Math.pow(2, exp) * (positObj.paObj.regime + positObj.pbObj.regime) +
    positObj.paObj.expDec +
    positObj.pbObj.expDec;

  var overflow = 0;
  var resFrac = decToBin(result.prod, 40);
  if (resFrac[0] === "1") {
    pmObj.fraction = resFrac.slice(0, resFrac.length - 1);
    overflow = 1;
  } else if (resFrac[0] === "0") {
    pmObj.fraction = resFrac.slice(1, resFrac.length);
    overflow = 0;
  }
  scaleFac = scaleFac + overflow;
  pmObj.expDec = scaleFac % Math.pow(2, exp);
  pmObj.regime = Math.floor(scaleFac / Math.pow(2, exp));
  if (pmObj.expDec >= Math.pow(2, exp) - 1) {
    pmObj.expDec = Math.pow(2, exp) - 1;
  }
  pmObj.sign = result.sign;
  pmObj.exponent = decToBin(pmObj.expDec, 2);
  var finalPosit = "";
  var regimeString = "";
  if (pmObj.regime < 0) {
    for (let i = 0; i < Math.abs(pmObj.regime); i++) {
      regimeString = regimeString + "0";
    }
    regimeString = regimeString + "1";
  }
  if (pmObj.regime >= 0) {
    for (let i = 0; i < Math.abs(pmObj.regime) + 1; i++) {
      regimeString = regimeString + "1";
    }
    regimeString = regimeString + "0";
  }
  finalPosit =
    finalPosit + "0" + regimeString + pmObj.exponent + pmObj.fraction.slice(1);
  if (finalPosit.length > 24) {
    finalPosit = finalPosit.slice(0, 24);
  }
  if (pmObj.sign === "1") {
    finalPosit = twosComplement(finalPosit);
  }
  return finalPosit;
}
