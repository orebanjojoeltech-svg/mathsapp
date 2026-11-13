const syllabus = {
  jss1: [
    {
      title: 'Whole Numbers and Place Value',
      objectives: ['Read and write whole numbers up to large values.', 'Identify place value and value of digits.', 'Apply number order and comparison.'],
      concepts: ['Place value', 'Expanded form', 'Comparing numbers', 'Rounding'],
      questions: [
        { question: 'What is the place value of 7 in 47,258?', answer: 'The 7 is in the thousands place, so its place value is 7,000.' },
        { question: 'Write 36,405 in expanded form.', answer: '30,000 + 6,000 + 400 + 5.' },
        { question: 'Arrange 2,345, 2,435, 2,354 in ascending order.', answer: '2,345, 2,354, 2,435.' }
      ]
    },
    {
      title: 'Addition, Subtraction, Multiplication and Division',
      objectives: ['Perform the four basic operations accurately.', 'Use inverse operations to check work.', 'Solve word problems involving operations.'],
      concepts: ['Sum and difference', 'Product and quotient', 'Estimation', 'Checking answers'],
      questions: [
        { question: 'Calculate 7,845 + 2,369.', answer: '7,845 + 2,369 = 10,214.' },
        { question: 'What is 4,320 ÷ 8?', answer: '4,320 ÷ 8 = 540.' },
        { question: 'A school has 24 desks in each of 12 classrooms. How many desks are there altogether?', answer: '24 × 12 = 288 desks.' }
      ]
    },
    {
      title: 'Fractions',
      objectives: ['Identify types of fractions.', 'Add, subtract, multiply and divide fractions.', 'Compare and simplify fractions.'],
      concepts: ['Proper and improper fractions', 'Equivalent fractions', 'LCM for addition', 'Simplifying fractions'],
      questions: [
        { question: 'Simplify 12/18.', answer: '12/18 = 2/3.' },
        { question: 'Find 1/4 + 1/3.', answer: '1/4 + 1/3 = 3/12 + 4/12 = 7/12.' },
        { question: 'What is 3/5 of 20?', answer: '3/5 × 20 = 12.' }
      ]
    },
    {
      title: 'Decimals',
      objectives: ['Understand decimal place value.', 'Convert decimals to fractions and vice versa.', 'Perform decimal operations.'],
      concepts: ['Tenths, hundredths, thousandths', 'Place value', 'Addition and subtraction of decimals'],
      questions: [
        { question: 'Write 0.75 as a fraction.', answer: '0.75 = 75/100 = 3/4.' },
        { question: 'Add 2.45 + 1.8.', answer: '2.45 + 1.8 = 4.25.' },
        { question: 'What is 5.6 × 3?', answer: '5.6 × 3 = 16.8.' }
      ]
    },
    {
      title: 'Percentages',
      objectives: ['Convert between fractions, decimals and percentages.', 'Find percentages of quantities.', 'Solve percentage increase and decrease problems.'],
      concepts: ['Per cent means per hundred', 'Percent of a quantity', 'Discount and profit'],
      questions: [
        { question: 'Convert 25% to a fraction.', answer: '25% = 25/100 = 1/4.' },
        { question: 'Find 20% of 250.', answer: '20/100 × 250 = 50.' },
        { question: 'A book costs ₦800 and is discounted by 10%. What is the discount?', answer: '10% of ₦800 = ₦80.' }
      ]
    },
    {
      title: 'Ratio and Proportion',
      objectives: ['Write ratios in simplest form.', 'Share quantities in given ratios.', 'Solve direct proportion questions.'],
      concepts: ['Comparing quantities', 'Equivalent ratios', 'Simplifying ratios'],
      questions: [
        { question: 'Express 15:20 in simplest form.', answer: '15:20 = 3:4.' },
        { question: 'Share ₦360 in the ratio 2:1.', answer: 'Total parts = 3. First share = 2/3 × 360 = ₦240, second share = ₦120.' },
        { question: 'If 5 books cost ₦1,250, what is the cost of 3 books?', answer: 'Cost of one book = ₦250. Cost of 3 books = ₦750.' }
      ]
    },
    {
      title: 'Algebraic Thinking',
      objectives: ['Use letters to represent numbers.', 'Simplify algebraic expressions.', 'Evaluate expressions by substitution.'],
      concepts: ['Variables', 'Terms', 'Coefficients', 'Like terms'],
      questions: [
        { question: 'Simplify 3x + 4x.', answer: '7x.' },
        { question: 'If x = 5, evaluate 2x + 7.', answer: '2(5) + 7 = 17.' },
        { question: 'Simplify 6a - 2a + 3a.', answer: '7a.' }
      ]
    },
    {
      title: 'Simple Equations',
      objectives: ['Solve one-step and two-step equations.', 'Use balancing method.', 'Check solutions.'],
      concepts: ['Variables on one side', 'Inverse operations', 'Equation balance'],
      questions: [
        { question: 'Solve x + 8 = 15.', answer: 'x = 7.' },
        { question: 'Solve 3y = 21.', answer: 'y = 7.' },
        { question: 'Solve 2p - 5 = 11.', answer: '2p = 16, so p = 8.' }
      ]
    },
    {
      title: 'Geometry: Lines and Angles',
      objectives: ['Identify types of lines and angles.', 'Measure angles using a protractor.', 'Recognize properties of triangles and quadrilaterals.'],
      concepts: ['Acute, right and obtuse angles', 'Parallel and perpendicular lines', 'Triangle sum'],
      questions: [
        { question: 'What type of angle measures 90°?', answer: 'A right angle.' },
        { question: 'A triangle has angles 50° and 60°. What is the third angle?', answer: '180° - (50° + 60°) = 70°.' },
        { question: 'How many degrees are there in a complete turn?', answer: '360°.' }
      ]
    },
    {
      title: 'Measurement and Mensuration',
      objectives: ['Measure length, mass and capacity accurately.', 'Calculate perimeters and areas of simple shapes.', 'Solve real-life measurement problems.'],
      concepts: ['Perimeter', 'Area', 'Units of measurement', 'Volume'],
      questions: [
        { question: 'Find the perimeter of a rectangle with length 9 cm and width 4 cm.', answer: 'P = 2(9 + 4) = 26 cm.' },
        { question: 'What is the area of a square of side 6 cm?', answer: 'A = 6 × 6 = 36 cm².' },
        { question: 'Convert 3.5 m to centimetres.', answer: '3.5 m = 350 cm.' }
      ]
    },
    {
      title: 'Statistics and Data Handling',
      objectives: ['Collect and organize data.', 'Interpret tables, bar charts and pictograms.', 'Find mean, median and mode.'],
      concepts: ['Data collection', 'Mode', 'Mean', 'Bar charts'],
      questions: [
        { question: 'Find the mode of 3, 5, 3, 7, 3, 9.', answer: 'The mode is 3.' },
        { question: 'The ages of 4 students are 12, 13, 12 and 15. What is the mean age?', answer: 'Mean = (12 + 13 + 12 + 15) ÷ 4 = 13.' },
        { question: 'Why are bar charts useful?', answer: 'They help compare quantities easily.' }
      ]
    },
    {
      title: 'Sets',
      objectives: ['Define a set and describe its members.', 'Use set notation correctly.', 'Find union and intersection.'],
      concepts: ['Elements', 'Subset', 'Union', 'Intersection'],
      questions: [
        { question: 'If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?', answer: 'A ∩ B = {3}.' },
        { question: 'What does the symbol ∪ mean in sets?', answer: 'Union - all elements in either set.' },
        { question: 'List the elements of the set of even numbers from 1 to 10.', answer: '{2, 4, 6, 8, 10}.' }
      ]
    },
    {
      title: 'Everyday Arithmetic',
      objectives: ['Solve real-life money and quantity problems.', 'Calculate profit, loss and discount.', 'Convert currencies and units in simple tasks.'],
      concepts: ['Profit and loss', 'Discount', 'Simple shopping calculations'],
      questions: [
        { question: 'A shirt costs ₦1,500 and is sold for ₦1,800. Find the profit.', answer: 'Profit = ₦300.' },
        { question: 'A bag is sold at a 15% discount. If the original price is ₦4,000, what is the discount?', answer: '15% of ₦4,000 = ₦600.' },
        { question: 'If 1 kilogram equals 1,000 grams, how many grams are in 2.5 kg?', answer: '2.5 kg = 2,500 g.' }
      ]
    }
  ],
  jss2: [
    {
      title: 'Integers and Directed Numbers',
      objectives: ['Identify positive and negative numbers.', 'Compare integers on a number line.', 'Perform addition and subtraction involving integers.'],
      concepts: ['Number line', 'Absolute value', 'Positive and negative integers'],
      questions: [
        { question: 'Which is greater: -6 or -2?', answer: '-2 is greater because it is closer to zero.' },
        { question: 'Calculate -8 + 5.', answer: '-8 + 5 = -3.' },
        { question: 'Find -4 - 7.', answer: '-4 - 7 = -11.' }
      ]
    },
    {
      title: 'Fractions, Decimals and Percentages',
      objectives: ['Convert between forms.', 'Simplify calculations using equivalent forms.', 'Solve percentage word problems.'],
      concepts: ['Equivalent fractions', 'Decimal conversion', 'Percentage conversion'],
      questions: [
        { question: 'Write 0.6 as a percentage.', answer: '0.6 = 60%.' },
        { question: 'Find 3/8 of 64.', answer: '3/8 × 64 = 24.' },
        { question: 'Convert 7/20 to a decimal.', answer: '7/20 = 0.35.' }
      ]
    },
    {
      title: 'Approximations and Estimation',
      objectives: ['Round numbers to required decimal places and nearest tens/hundreds.', 'Estimate answers before calculating.', 'Use estimation to check reasonableness.'],
      concepts: ['Rounding', 'Significant figures', 'Estimating products'],
      questions: [
        { question: 'Round 4,678 to the nearest hundred.', answer: '4,700.' },
        { question: 'Estimate 48 × 19 by rounding first.', answer: '50 × 20 = 1,000, so the estimate is about 1,000.' },
        { question: 'Round 6.873 to 2 decimal places.', answer: '6.87.' }
      ]
    },
    {
      title: 'Ratio, Rate and Proportion',
      objectives: ['Solve proportion problems.', 'Compare rates such as km/h and items per cost.', 'Use ratio to share quantities.'],
      concepts: ['Direct proportion', 'Rate', 'Scale'],
      questions: [
        { question: 'Simplify 18:24.', answer: '3:4.' },
        { question: 'If 6 oranges cost ₦900, how much will 10 oranges cost?', answer: 'Unit cost = ₦150; 10 oranges cost ₦1,500.' },
        { question: 'A car travels 180 km in 3 hours. What is the speed?', answer: '180 ÷ 3 = 60 km/h.' }
      ]
    },
    {
      title: 'Algebraic Expressions',
      objectives: ['Expand and simplify expressions.', 'Collect like terms.', 'Substitute values into formulas.'],
      concepts: ['Variables', 'Terms', 'Coefficients', 'Simplifying and factorising'],
      questions: [
        { question: 'Simplify 5x + 3x - 2x.', answer: '6x.' },
        { question: 'Expand 3(a + 4).', answer: '3a + 12.' },
        { question: 'If x = 4, evaluate 2x² + 3x.', answer: '2(16) + 12 = 44.' }
      ]
    },
    {
      title: 'Linear Equations',
      objectives: ['Solve linear equations with one unknown.', 'Use the balance method effectively.', 'Translate word problems into equations.'],
      concepts: ['Inverse operations', 'Solving equations', 'Checking solutions'],
      questions: [
        { question: 'Solve x - 9 = 13.', answer: 'x = 22.' },
        { question: 'Solve 5y + 4 = 29.', answer: '5y = 25, so y = 5.' },
        { question: 'If 3m = 27, find m.', answer: 'm = 9.' }
      ]
    },
    {
      title: 'Commercial Arithmetic',
      objectives: ['Calculate simple interest, discount and profit.', 'Interpret buying and selling prices.', 'Solve practical money problems.'],
      concepts: ['Profit', 'Loss', 'Discount', 'Simple interest'],
      questions: [
        { question: 'A laptop costs ₦120,000. A discount of 5% is given. What is the discount?', answer: '5% of 120,000 = ₦6,000.' },
        { question: 'A seller buys a book for ₦2,500 and sells it for ₦3,200. What is the profit?', answer: 'Profit = ₦700.' },
        { question: 'Calculate 10% of ₦40,000.', answer: '₦4,000.' }
      ]
    },
    {
      title: 'Geometry: Angles and Polygons',
      objectives: ['Identify polygon types and properties.', 'Calculate missing angles.', 'Understand angle relationships.'],
      concepts: ['Interior angles', 'Exterior angles', 'Triangles, quadrilaterals, pentagons'],
      questions: [
        { question: 'What is the sum of the interior angles of a triangle?', answer: '180°.' },
        { question: 'A quadrilateral has angles 90°, 80°, 100° and x. Find x.', answer: 'x = 360° - (90 + 80 + 100) = 90°.' },
        { question: 'How many sides does a hexagon have?', answer: '6 sides.' }
      ]
    },
    {
      title: 'Area, Perimeter and Volume',
      objectives: ['Calculate the perimeter and area of plane figures.', 'Find the volume of cuboids and cubes.', 'Convert between different units.'],
      concepts: ['Rectangle and triangle area', 'Perimeter formula', 'Volume = length × breadth × height'],
      questions: [
        { question: 'Find the area of a triangle with base 10 cm and height 6 cm.', answer: 'Area = 1/2 × 10 × 6 = 30 cm².' },
        { question: 'What is the perimeter of a square of side 7 cm?', answer: '4 × 7 = 28 cm.' },
        { question: 'A cuboid measures 4 cm by 3 cm by 2 cm. Find its volume.', answer: '4 × 3 × 2 = 24 cm³.' }
      ]
    },
    {
      title: 'Coordinate Geometry',
      objectives: ['Plot points on the Cartesian plane.', 'Read coordinates correctly.', 'Identify quadrants and axes.'],
      concepts: ['x-axis and y-axis', 'Origin', 'Ordered pairs'],
      questions: [
        { question: 'What is the coordinate of the origin?', answer: '(0, 0).' },
        { question: 'If a point is at (4, -3), in which quadrant is it?', answer: 'Quadrant IV.' },
        { question: 'What does the pair (2, 5) represent?', answer: 'A point 2 units right and 5 units up from the origin.' }
      ]
    },
    {
      title: 'Statistics and Probability',
      objectives: ['Interpret data from tables and charts.', 'Find median and range.', 'Understand simple probability.'],
      concepts: ['Mean', 'Median', 'Range', 'Chance'],
      questions: [
        { question: 'Find the median of 3, 5, 8, 10, 12.', answer: 'The median is 8.' },
        { question: 'What is the range of 9, 4, 11, 6?', answer: '11 - 4 = 7.' },
        { question: 'What is the probability of getting a head when tossing a fair coin?', answer: '1/2 or 50%.' }
      ]
    },
    {
      title: 'Transformation Geometry',
      objectives: ['Recognize translations, reflections and rotations.', 'Understand symmetry in shapes.', 'Apply transformations in a plane.'],
      concepts: ['Mirror line', 'Turn', 'Slide', 'Line symmetry'],
      questions: [
        { question: 'What is a reflection?', answer: 'A flip of a shape over a line.' },
        { question: 'What is a translation?', answer: 'A slide of a shape without changing its size or orientation.' },
        { question: 'A shape has line symmetry if what is true?', answer: 'It can be folded along a line so both halves match exactly.' }
      ]
    }
  ]
};

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

function createAnswerOptions(answer, questionNumber) {
  const correct = answer.trim().replace(/[.;]+$/, '');
  const quadrantMatch = correct.match(/quadrant\s+([IVX]+)/i);
  let distractors = [];

  if (quadrantMatch) {
    distractors = ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV']
      .filter((choice) => choice.toLowerCase() !== correct.toLowerCase());
  } else if (/subset/i.test(correct)) {
    distractors = [
      'No, it is not a subset.',
      'It is a proper superset.',
      'The two sets are disjoint.'
    ];
  } else if (/acute angle/i.test(correct)) {
    distractors = ['A right angle', 'An obtuse angle', 'A straight angle'];
  } else if (/right angle/i.test(correct)) {
    distractors = ['An acute angle', 'An obtuse angle', 'A reflex angle'];
  } else if (/obtuse angle/i.test(correct)) {
    distractors = ['An acute angle', 'A right angle', 'A reflex angle'];
  } else if (/reflection/i.test(correct)) {
    distractors = ['A translation', 'A rotation', 'An enlargement'];
  } else if (/translation/i.test(correct)) {
    distractors = ['A reflection', 'A rotation', 'An enlargement'];
  } else {
    const matches = [...correct.matchAll(/-?\d[\d,]*(?:\.\d+)?/g)];
    if (matches.length > 0) {
      const match = matches[matches.length - 1];
      const numericText = match[0];
      const value = Number(numericText.replace(/,/g, ''));
      const precision = numericText.includes('.') ? numericText.split('.')[1].length : 0;
      const step = precision > 0 ? 10 ** -precision : 1;
      const formatNumber = (number) => {
        const fixed = number.toFixed(precision);
        const [whole, fraction] = fixed.split('.');
        const grouped = Number(whole).toLocaleString('en-US');
        return fraction === undefined ? grouped : `${grouped}.${fraction}`;
      };

      distractors = [1, -1, 2, -2, 3, -3]
        .map((offset) => {
          const replacement = formatNumber(value + offset * step);
          return `${correct.slice(0, match.index)}${replacement}${correct.slice(match.index + numericText.length)}`;
        })
        .filter((choice) => choice !== correct);
    } else {
      distractors = [
        'None of the other choices',
        'All of the other choices',
        'Not enough information to determine'
      ];
    }
  }

  const uniqueDistractors = [...new Set(distractors)].filter((choice) => choice !== correct);
  const choices = [correct, ...uniqueDistractors.slice(0, 3)];
  while (choices.length < 4) {
    choices.push(`None of the above (${choices.length})`);
  }

  const correctPosition = (questionNumber * 7) % 4;
  const correctIndex = choices.indexOf(correct);
  [choices[correctIndex], choices[correctPosition]] = [choices[correctPosition], choices[correctIndex]];
  return choices;
}

function makeQuestion(question, working, answer, questionNumber = 0) {
  return {
    question,
    working,
    answer,
    options: createAnswerOptions(answer, questionNumber)
  };
}

function createPracticeQuestion(level, topicIndex, number) {
  const i = number - 1;
  const n = i + 2;
  const a = (i * 7) % 19 + 3;
  const b = (i * 5) % 13 + 2;
  const c = (i * 3) % 9 + 2;
  const form = i % 5;

  if (level === 'jss1') {
    switch (topicIndex) {
      case 0: {
        const value = (i + 2) * 1000 + (i % 7) * 100 + (i % 5) * 10 + (i % 9);
        const digit = Number(String(value)[i % String(value).length]);
        const place = String(value).length - 1 - (i % String(value).length);
        if (form === 0) return makeQuestion(`What is the value of the ${digit} in ${value.toLocaleString()}?`, `The digit is in the ${['ones', 'tens', 'hundreds', 'thousands', 'ten-thousands'][place] || 'ones'} place. Multiply ${digit} by ${10 ** place}.`, `${(digit * 10 ** place).toLocaleString()}.`);
        if (form === 1) return makeQuestion(`Write ${value.toLocaleString()} in expanded form.`, `Separate each non-zero digit by its place value: ${String(value).split('').map((d, p) => d === '0' ? null : `${d} × ${10 ** (String(value).length - p - 1)}`).filter(Boolean).join(' + ')}.`, String(value).split('').map((d, p) => d === '0' ? null : Number(d) * 10 ** (String(value).length - p - 1)).filter(Boolean).map(v => v.toLocaleString()).join(' + ') + '.');
        if (form === 2) return makeQuestion(`Round ${value.toLocaleString()} to the nearest hundred.`, `Check the tens digit (${String(value).slice(-2, -1)}). ${Number(String(value).slice(-2, -1)) < 5 ? 'Keep the hundreds digit and change following digits to zero.' : 'Increase the hundreds digit by one and change following digits to zero.'}`, `${Math.round(value / 100) * 100}.`);
        if (form === 3) return makeQuestion(`Write the number immediately after ${value.toLocaleString()}.`, `Add one: ${value.toLocaleString()} + 1 = ${(value + 1).toLocaleString()}.`, `${(value + 1).toLocaleString()}.`);
        const other = value + (i % 2 ? 127 : -84);
        return makeQuestion(`Which is greater: ${value.toLocaleString()} or ${other.toLocaleString()}?`, `Compare digits from left to right. The first different place determines the larger number.`, `${Math.max(value, other).toLocaleString()} is greater.`);
      }
      case 1: {
        const x = 120 + i * 11;
        const y = 35 + (i * 7) % 90;
        if (form === 0) return makeQuestion(`Calculate ${x} + ${y}.`, `Add the numbers: ${x} + ${y} = ${x + y}.`, `${x + y}.`);
        if (form === 1) return makeQuestion(`Calculate ${x + y} - ${y}.`, `Subtract ${y} from ${x + y}: ${x + y} - ${y} = ${x}.`, `${x}.`);
        if (form === 2) return makeQuestion(`Calculate ${a} × ${b}.`, `Multiply: ${a} × ${b} = ${a * b}.`, `${a * b}.`);
        if (form === 3) return makeQuestion(`Calculate ${a * c} ÷ ${c}.`, `Ask how many groups of ${c} make ${a * c}: ${a * c} ÷ ${c} = ${a}.`, `${a}.`);
        return makeQuestion(`A class has ${a} rows with ${b} pupils in each row. How many pupils are there?`, `Equal groups mean multiplication: ${a} × ${b} = ${a * b}.`, `${a * b} pupils.`);
      }
      case 2: {
        const p = i % 7 + 1;
        const q = p + (i % 4) + 2;
        const r = i % 5 + 1;
        const s = r + (i % 3) + 2;
        if (form === 0) {
          const common = q * s / gcd(q, s);
          const total = p * (common / q) + r * (common / s);
          const d = gcd(total, common);
          return makeQuestion(`Find ${p}/${q} + ${r}/${s}.`, `The LCM of ${q} and ${s} is ${common}. Rewrite as ${p * (common / q)}/${common} + ${r * (common / s)}/${common} = ${total}/${common}; simplify by ${d}.`, `${total / d}/${common / d}.`);
        }
        if (form === 1) {
          const common = q * s / gcd(q, s);
          const diff = p * (common / q) - r * (common / s);
          const d = gcd(Math.abs(diff), common);
          return makeQuestion(`Find ${p}/${q} - ${r}/${s}.`, `Use denominator ${common}: ${p * (common / q)}/${common} - ${r * (common / s)}/${common} = ${diff}/${common}.`, `${diff / d}/${common / d}.`);
        }
        if (form === 2) {
          const top = p * r;
          const bottom = q * s;
          const d = gcd(top, bottom);
          return makeQuestion(`Multiply ${p}/${q} by ${r}/${s}.`, `Multiply numerators and denominators: (${p} × ${r})/(${q} × ${s}) = ${top}/${bottom}; simplify by ${d}.`, `${top / d}/${bottom / d}.`);
        }
        if (form === 3) return makeQuestion(`Find ${p}/${q} of ${q * (i % 4 + 3)}.`, `Divide by the denominator, then multiply by the numerator: ${q * (i % 4 + 3)} ÷ ${q} = ${i % 4 + 3}; ${i % 4 + 3} × ${p} = ${p * (i % 4 + 3)}.`, `${p * (i % 4 + 3)}.`);
        const d = gcd(p, q);
        return makeQuestion(`Simplify ${p}/${q}.`, `Divide numerator and denominator by their greatest common divisor, ${d}: ${p} ÷ ${d} over ${q} ÷ ${d}.`, `${p / d}/${q / d}.`);
      }
      case 3: {
        const x = (a / 10).toFixed(1);
        const y = (b / 100).toFixed(2);
        if (form === 0) return makeQuestion(`Calculate ${x} + ${y}.`, `Line up decimal points: ${x} + ${y} = ${(Number(x) + Number(y)).toFixed(2)}.`, `${(Number(x) + Number(y)).toFixed(2)}.`);
        if (form === 1) return makeQuestion(`Calculate ${(Number(x) + Number(y)).toFixed(2)} - ${y}.`, `Line up decimal points and subtract: ${(Number(x) + Number(y)).toFixed(2)} - ${y} = ${x}.`, `${x}.`);
        if (form === 2) return makeQuestion(`Calculate ${x} × ${c}.`, `Multiply as whole numbers, then put the decimal point back one place: ${Number(x) * 10} × ${c} = ${Number(x) * 10 * c}; the product is ${(Number(x) * c).toFixed(1)}.`, `${(Number(x) * c).toFixed(1)}.`);
        if (form === 3) return makeQuestion(`Write ${y} as a fraction in simplest form.`, `There are two decimal places, so ${y} = ${Math.round(Number(y) * 100)}/100. Divide top and bottom by their greatest common divisor.`, `${(Math.round(Number(y) * 100) / gcd(Math.round(Number(y) * 100), 100))}/${100 / gcd(Math.round(Number(y) * 100), 100)}.`);
        return makeQuestion(`Calculate ${c}.4 ÷ 2.`, `Multiply both numbers by 10: ${c * 10 + 4} ÷ 20 = ${(c + 0.4) / 2}.`, `${((c + 0.4) / 2).toFixed(2)}.`);
      }
      case 4: {
        const pct = (i % 8 + 1) * 5;
        const amount = (i + 5) * 20;
        if (form === 0) return makeQuestion(`Find ${pct}% of ${amount}.`, `Convert the percentage to a fraction: ${pct}/100 × ${amount} = ${pct * amount / 100}.`, `${pct * amount / 100}.`);
        if (form === 1) return makeQuestion(`Convert ${pct}% to a fraction in simplest form.`, `${pct}% = ${pct}/100. Divide numerator and denominator by ${gcd(pct, 100)}.`, `${pct / gcd(pct, 100)}/${100 / gcd(pct, 100)}.`);
        if (form === 2) return makeQuestion(`Convert ${pct}% to a decimal.`, `Divide by 100 by moving the decimal point two places left: ${pct} ÷ 100 = ${(pct / 100).toFixed(2)}.`, `${(pct / 100).toFixed(2)}.`);
        if (form === 3) return makeQuestion(`Increase ${amount} by ${pct}%.`, `Increase = ${pct}/100 × ${amount} = ${pct * amount / 100}. Add it: ${amount} + ${pct * amount / 100} = ${amount + pct * amount / 100}.`, `${amount + pct * amount / 100}.`);
        return makeQuestion(`A ${amount} item has a ${pct}% discount. Find its sale price.`, `Discount = ${pct}/100 × ${amount} = ${pct * amount / 100}. Sale price = ${amount} - ${pct * amount / 100}.`, `${amount - pct * amount / 100}.`);
      }
      case 5: {
        const x = (i % 8 + 2) * 2;
        const y = (i % 6 + 3) * 2;
        if (form === 0) {
          const d = gcd(x, y);
          return makeQuestion(`Simplify the ratio ${x}:${y}.`, `Divide both terms by their greatest common divisor, ${d}: ${x} ÷ ${d}:${y} ÷ ${d}.`, `${x / d}:${y / d}.`);
        }
        if (form === 1) {
          const total = (x + y) * (i + 2);
          return makeQuestion(`Share ${total} in the ratio ${x}:${y}.`, `Total parts = ${x} + ${y} = ${x + y}. One part = ${total} ÷ ${x + y} = ${total / (x + y)}. Shares are ${x} × ${total / (x + y)} and ${y} × ${total / (x + y)}.`, `${x * total / (x + y)} and ${y * total / (x + y)}.`);
        }
        if (form === 2) return makeQuestion(`If ${x} items cost ₦${x * 150}, how much do ${y} items cost at the same rate?`, `One item costs ₦${x * 150} ÷ ${x} = ₦150. Then ${y} × ₦150 = ₦${y * 150}.`, `₦${y * 150}.`);
        if (form === 3) return makeQuestion(`Complete the equivalent ratio: ${x}:${y} = ${x * 3}:?`, `The first term is multiplied by 3. Multiply the second term by 3 too: ${y} × 3 = ${y * 3}.`, `${y * 3}.`);
        return makeQuestion(`A recipe uses ${x} cups for ${y} people. How many cups are needed for ${y * 2} people?`, `The number of people doubles, so double the cups: ${x} × 2 = ${x * 2}.`, `${x * 2} cups.`);
      }
      case 6: {
        const coeff = i % 6 + 2;
        const coeff2 = i % 4 + 1;
        if (form === 0) return makeQuestion(`Simplify ${coeff}x + ${coeff2}x.`, `These are like terms. Add their coefficients: (${coeff} + ${coeff2})x = ${coeff + coeff2}x.`, `${coeff + coeff2}x.`);
        if (form === 1) return makeQuestion(`If x = ${n}, evaluate ${coeff}x + ${coeff2}.`, `Substitute ${n} for x: ${coeff} × ${n} + ${coeff2} = ${coeff * n} + ${coeff2}.`, `${coeff * n + coeff2}.`);
        if (form === 2) return makeQuestion(`Simplify ${coeff * 2}a - ${coeff}a + ${coeff2}a.`, `Combine coefficients of a: ${coeff * 2} - ${coeff} + ${coeff2} = ${coeff + coeff2}.`, `${coeff + coeff2}a.`);
        if (form === 3) return makeQuestion(`Expand ${coeff}(x + ${coeff2}).`, `Multiply each term inside the brackets by ${coeff}: ${coeff} × x + ${coeff} × ${coeff2}.`, `${coeff}x + ${coeff * coeff2}.`);
        return makeQuestion(`If a = ${n}, evaluate ${coeff}a - ${coeff2}.`, `Substitute: ${coeff} × ${n} - ${coeff2} = ${coeff * n} - ${coeff2}.`, `${coeff * n - coeff2}.`);
      }
      case 7: {
        const k = i % 9 + 2;
        const answer = i + 4;
        if (form === 0) return makeQuestion(`Solve x + ${k} = ${answer + k}.`, `Subtract ${k} from both sides: x = ${answer + k} - ${k}.`, `x = ${answer}.`);
        if (form === 1) return makeQuestion(`Solve y - ${k} = ${answer - k}.`, `Add ${k} to both sides: y = ${answer - k} + ${k}.`, `y = ${answer}.`);
        if (form === 2) return makeQuestion(`Solve ${k}p = ${k * answer}.`, `Divide both sides by ${k}: p = ${k * answer} ÷ ${k}.`, `p = ${answer}.`);
        if (form === 3) return makeQuestion(`Solve ${k}m + ${k} = ${k * answer + k}.`, `Subtract ${k}: ${k}m = ${k * answer}. Divide by ${k}.`, `m = ${answer}.`);
        return makeQuestion(`A number plus ${k} equals ${answer + k}. Find the number.`, `Let the number be x. x + ${k} = ${answer + k}; subtract ${k} from both sides.`, `${answer}.`);
      }
      case 8: {
        const angle = 25 + (i % 6) * 10;
        if (form === 0) return makeQuestion(`Classify an angle of ${angle}°.`, `Compare ${angle}° with 90°: it is less than 90°.`, 'It is an acute angle.');
        if (form === 1) return makeQuestion(`A triangle has angles ${angle}° and 60°. Find the third angle.`, `Angles in a triangle total 180°: 180° - (${angle}° + 60°) = ${120 - angle}°.`, `${120 - angle}°.`);
        if (form === 2) return makeQuestion(`Find the complement of ${angle}°.`, `Complementary angles total 90°: 90° - ${angle}° = ${90 - angle}°.`, `${90 - angle}°.`);
        if (form === 3) return makeQuestion(`Find the supplement of ${angle}°.`, `Supplementary angles total 180°: 180° - ${angle}° = ${180 - angle}°.`, `${180 - angle}°.`);
        return makeQuestion(`How many degrees are in ${n} right angles?`, `One right angle is 90°. Multiply: ${n} × 90° = ${n * 90}°.`, `${n * 90}°.`);
      }
      case 9: {
        const l = i % 9 + 4;
        const w = i % 5 + 2;
        if (form === 0) return makeQuestion(`Find the perimeter of a rectangle ${l} cm long and ${w} cm wide.`, `P = 2(l + w) = 2(${l} + ${w}) = 2 × ${l + w}.`, `${2 * (l + w)} cm.`);
        if (form === 1) return makeQuestion(`Find the area of a rectangle ${l} cm by ${w} cm.`, `Area = length × width = ${l} × ${w}.`, `${l * w} cm².`);
        if (form === 2) return makeQuestion(`Convert ${l} m to centimetres.`, `1 m = 100 cm, so multiply by 100: ${l} × 100 = ${l * 100}.`, `${l * 100} cm.`);
        if (form === 3) return makeQuestion(`Find the area of a square of side ${w} cm.`, `Area = side × side = ${w} × ${w}.`, `${w * w} cm².`);
        return makeQuestion(`A cuboid is ${l} cm long, ${w} cm wide and ${c} cm high. Find its volume.`, `Volume = length × width × height = ${l} × ${w} × ${c}.`, `${l * w * c} cm³.`);
      }
      case 10: {
        const d = [a, b, a, c, a];
        const sorted = [...d].sort((x, y) => x - y);
        if (form === 0) return makeQuestion(`Find the mean of ${d.join(', ')}.`, `Add the values: ${d.join(' + ')} = ${d.reduce((sum, value) => sum + value, 0)}. Divide by ${d.length}.`, `${d.reduce((sum, value) => sum + value, 0) / d.length}.`);
        if (form === 1) return makeQuestion(`Find the median of ${d.join(', ')}.`, `Order the data: ${sorted.join(', ')}. The middle (third) value is ${sorted[2]}.`, `${sorted[2]}.`);
        if (form === 2) return makeQuestion(`Find the mode of ${d.join(', ')}.`, `Count each value. ${a} appears three times, more than the other values.`, `${a}.`);
        if (form === 3) return makeQuestion(`Find the range of ${d.join(', ')}.`, `Range = largest - smallest = ${sorted[4]} - ${sorted[0]}.`, `${sorted[4] - sorted[0]}.`);
        return makeQuestion(`A bar chart has bars of ${a}, ${b} and ${c}. What is the total?`, `Add the bar values: ${a} + ${b} + ${c} = ${a + b + c}.`, `${a + b + c}.`);
      }
      case 11: {
        const A = [1, 2, 3 + i % 4];
        const B = [3 + i % 4, 4, 5 + i % 3];
        if (form === 0) return makeQuestion(`If A = {${A.join(', ')}} and B = {${B.join(', ')}}, find A ∩ B.`, `The intersection contains elements that appear in both sets. The shared element is ${3 + i % 4}.`, `{${3 + i % 4}}.`);
        if (form === 1) return makeQuestion(`If A = {${A.join(', ')}} and B = {${B.join(', ')}}, find A ∪ B.`, `The union lists each element from either set once, without repeats.`, `{${[...new Set([...A, ...B])].sort((x, y) => x - y).join(', ')}}.`);
        if (form === 2) return makeQuestion(`How many elements are in {${A.join(', ')}}?`, `Count the distinct members: ${A.length}.`, `${A.length} elements.`);
        if (form === 3) return makeQuestion(`Is {1, 2, ${n}} a subset of {1, 2, ..., ${n + 1}}?`, `Check each member: 1, 2 and ${n} are all included in the larger set.`, 'Yes, it is a subset.');
        const limit = n + 4;
        const evens = Array.from({ length: Math.floor(limit / 2) }, (_, index) => (index + 1) * 2);
        return makeQuestion(`List the even numbers from 1 to ${limit}.`, `Select the multiples of 2 that do not exceed ${limit}: ${evens.join(', ')}.`, `{${evens.join(', ')}}.`);
      }
      default: {
        const cost = 200 + i * 25;
        const pct = i % 5 + 5;
        if (form === 0) return makeQuestion(`An item costs ₦${cost} and sells for ₦${cost + 100}. Find the profit.`, `Profit = selling price - cost price = ₦${cost + 100} - ₦${cost}.`, `₦100.`);
        if (form === 1) return makeQuestion(`Find ${pct}% discount on an item costing ₦${cost}.`, `Discount = ${pct}/100 × ₦${cost} = ₦${cost * pct / 100}.`, `₦${cost * pct / 100}.`);
        if (form === 2) return makeQuestion(`Convert ${n} kg to grams.`, `1 kg = 1,000 g. Multiply ${n} by 1,000.`, `${n * 1000} g.`);
        if (form === 3) return makeQuestion(`You buy ${n} items at ₦${a * 10} each. What is the total cost?`, `Total cost = number of items × price each = ${n} × ₦${a * 10}.`, `₦${n * a * 10}.`);
        const change = 100 + Math.floor(i / 5) * 50;
        return makeQuestion(`If you pay ₦${cost} with ₦${cost + change}, what change should you receive?`, `Change = amount paid - cost = ₦${cost + change} - ₦${cost}.`, `₦${change}.`);
      }
    }
  }

  switch (topicIndex) {
    case 0: {
      const x = i + 3;
      if (form === 0) return makeQuestion(`Calculate ${-x} + ${b}.`, `Opposite signs: subtract magnitudes ${Math.max(x, b)} - ${Math.min(x, b)} = ${Math.abs(x - b)}. Keep the sign of the number with the larger magnitude.`, `${-x + b}.`);
      if (form === 1) return makeQuestion(`Calculate ${x} - ${b + x}.`, `Subtract by adding the opposite: ${x} - ${b + x} = ${x} + (-${b + x}) = -${b}.`, `${-b}.`);
      if (form === 2) return makeQuestion(`Calculate -${x} - ${b}.`, `Subtracting a positive moves further left: -${x} - ${b} = -(${x} + ${b}).`, `${-(x + b)}.`);
      if (form === 3) return makeQuestion(`Which is greater: -${x} or -${b}?`, `On a number line, the negative number closer to zero is greater.`, `${-Math.min(x, b)} is greater.`);
      return makeQuestion(`Find the absolute value of -${x}.`, `Absolute value is the distance from zero, so remove the negative sign.`, `${x}.`);
    }
    case 1: {
      const p = i % 7 + 1;
      const q = p + (i % 5) + 2;
      const amount = (i + 3) * 8;
      if (form === 0) return makeQuestion(`Convert ${p}/${q} to a decimal (to 3 d.p.).`, `Divide numerator by denominator: ${p} ÷ ${q} = ${(p / q).toFixed(3)}...`, `${(p / q).toFixed(3)}.`);
      if (form === 1) return makeQuestion(`Convert ${(amount / 100).toFixed(2)} to a percentage.`, `Multiply by 100: ${(amount / 100).toFixed(2)} × 100 = ${amount}%.`, `${amount}%.`);
      if (form === 2) return makeQuestion(`Find ${p}/${q} of ${q * 6}.`, `Divide by ${q}, then multiply by ${p}: ${q * 6} ÷ ${q} = 6; 6 × ${p} = ${p * 6}.`, `${p * 6}.`);
      if (form === 3) return makeQuestion(`Convert ${amount}% to a decimal.`, `Divide by 100: ${amount}% = ${amount} ÷ 100.`, `${(amount / 100).toFixed(2)}.`);
      return makeQuestion(`Simplify ${p * 3}/${q * 3}.`, `Divide numerator and denominator by 3: (${p} × 3)/(${q} × 3) = ${p}/${q}.`, `${p}/${q}.`);
    }
    case 2: {
      const value = 1234 + i * 137;
      if (form === 0) return makeQuestion(`Round ${value.toLocaleString()} to the nearest ten.`, `Check the ones digit (${value % 10}). ${value % 10 < 5 ? 'Keep the tens digit.' : 'Increase the tens digit by one.'} Replace the ones digit with zero.`, `${Math.round(value / 10) * 10}.`);
      if (form === 1) return makeQuestion(`Round ${(value / 1000).toFixed(3)} to 2 decimal places.`, `Check the third decimal digit in ${(value / 1000).toFixed(3)}. Round the second decimal digit accordingly.`, `${(Math.round((value / 1000) * 100) / 100).toFixed(2)}.`);
      if (form === 2) return makeQuestion(`Estimate ${48 + i} × ${19 + i} by rounding each factor to the nearest ten.`, `Round ${48 + i} to ${Math.round((48 + i) / 10) * 10} and ${19 + i} to ${Math.round((19 + i) / 10) * 10}. Multiply those estimates.`, `${Math.round((48 + i) / 10) * 10 * Math.round((19 + i) / 10) * 10}.`);
      if (form === 3) return makeQuestion(`Round ${value.toLocaleString()} to 1 significant figure.`, `Keep the first non-zero digit (${String(value)[0]}). Check the next digit (${String(value)[1]}); ${Number(String(value)[1]) < 5 ? 'keep it' : 'round it up'} and replace following digits by zero.`, `${Number(String(value)[0]) * 10 ** (String(value).length - 1)}.`);
      return makeQuestion(`Estimate ${102 + i} ÷ ${5 + i % 4} using rounded numbers.`, `Round ${102 + i} to ${Math.round((102 + i) / 10) * 10}; use the nearby divisor ${5 + i % 4}. Divide to get an approximate quotient.`, `Approximately ${Math.round(Math.round((102 + i) / 10) / (5 + i % 4))}.`);
    }
    case 3: {
      const x = i % 8 + 2;
      const y = i % 6 + 3;
      if (form === 0) {
        const divisor = gcd(x, y);
        return makeQuestion(`Simplify the ratio ${x * 3}:${y * 3}.`, `The greatest common divisor is ${divisor * 3}. Divide both terms by it: ${x * 3} ÷ ${divisor * 3}:${y * 3} ÷ ${divisor * 3}.`, `${x / divisor}:${y / divisor}.`);
      }
      if (form === 1) return makeQuestion(`Share ${x + y} × ${n} in the ratio ${x}:${y}.`, `Total parts = ${x + y}. One part = (${x + y} × ${n}) ÷ ${x + y} = ${n}. Multiply by each ratio term.`, `${x * n} and ${y * n}.`);
      if (form === 2) return makeQuestion(`A vehicle travels ${x * 12} km in ${x} hours. Find its average speed.`, `Speed = distance ÷ time = ${x * 12} ÷ ${x}.`, `12 km/h.`);
      if (form === 3) return makeQuestion(`If ${x} notebooks cost ₦${x * 200}, find the cost of ${y} notebooks.`, `Unit cost = ₦${x * 200} ÷ ${x} = ₦200. Multiply by ${y}.`, `₦${y * 200}.`);
      return makeQuestion(`On a map, 1 cm represents ${n} km. What real distance does ${x} cm represent?`, `Multiply the map distance by the scale: ${x} × ${n} = ${x * n}.`, `${x * n} km.`);
    }
    case 4: {
      const m = i % 7 + 2;
      const k = i % 5 + 1;
      if (form === 0) return makeQuestion(`Simplify ${m}x + ${k}x - ${k}x.`, `Combine like terms by adding coefficients: ${m} + ${k} - ${k} = ${m}.`, `${m}x.`);
      if (form === 1) return makeQuestion(`Expand ${m}(x + ${k}).`, `Multiply each term by ${m}: ${m} × x + ${m} × ${k}.`, `${m}x + ${m * k}.`);
      if (form === 2) return makeQuestion(`If x = ${n}, evaluate ${m}x - ${k}.`, `Substitute x = ${n}: ${m} × ${n} - ${k} = ${m * n} - ${k}.`, `${m * n - k}.`);
      if (form === 3) return makeQuestion(`Factorise ${m}x + ${m * k}.`, `The common factor is ${m}. Divide each term by ${m} and place the results in brackets.`, `${m}(x + ${k}).`);
      return makeQuestion(`Simplify ${m}a + ${k}b + ${m}a.`, `Combine only like terms: ${m}a + ${m}a = ${m * 2}a. The b-term cannot combine with the a-terms.`, `${m * 2}a + ${k}b.`);
    }
    case 5: {
      const k = i % 7 + 2;
      const x = i + 3;
      if (form === 0) return makeQuestion(`Solve ${k}x + ${k} = ${k * x + k}.`, `Subtract ${k} from both sides: ${k}x = ${k * x}. Divide by ${k}.`, `x = ${x}.`);
      if (form === 1) return makeQuestion(`Solve ${k}y - ${k} = ${k * x - k}.`, `Add ${k} to both sides: ${k}y = ${k * x}. Divide by ${k}.`, `y = ${x}.`);
      if (form === 2) return makeQuestion(`Solve x/${k} = ${x}.`, `Multiply both sides by ${k}: x = ${x} × ${k}.`, `x = ${x * k}.`);
      if (form === 3) return makeQuestion(`Solve ${k}(m + 2) = ${k * (x + 2)}.`, `Divide both sides by ${k}: m + 2 = ${x + 2}. Subtract 2.`, `m = ${x}.`);
      return makeQuestion(`Three times a number plus ${k} is ${3 * x + k}. Find the number.`, `Let it be x: 3x + ${k} = ${3 * x + k}. Subtract ${k} and divide by 3.`, `${x}.`);
    }
    case 6: {
      const cost = 5000 + i * 750;
      const rate = i % 5 + 5;
      if (form === 0) return makeQuestion(`An item bought for ₦${cost} is sold for ₦${cost + 800}. Find the profit.`, `Profit = selling price - cost price = ₦${cost + 800} - ₦${cost}.`, `₦800.`);
      if (form === 1) return makeQuestion(`Find ${rate}% of ₦${cost}.`, `${rate}% of ${cost} = ${rate}/100 × ${cost}.`, `₦${rate * cost / 100}.`);
      if (form === 2) return makeQuestion(`Find the simple interest on ₦${cost} at ${rate}% per year for 2 years.`, `I = PRT/100 = (${cost} × ${rate} × 2)/100.`, `₦${cost * rate * 2 / 100}.`);
      if (form === 3) return makeQuestion(`An item costing ₦${cost} has a ${rate}% discount. Find the sale price.`, `Discount = ${rate}/100 × ${cost} = ₦${rate * cost / 100}. Sale price = ${cost} - ${rate * cost / 100}.`, `₦${cost - rate * cost / 100}.`);
      return makeQuestion(`A trader buys ${n} items for ₦${n * 300} and sells each for ₦350. Find total profit.`, `Selling total = ${n} × ₦350 = ₦${n * 350}. Cost total = ₦${n * 300}. Profit = ${n * 350} - ${n * 300}.`, `₦${n * 50}.`);
    }
    case 7: {
      const x = 30 + i % 5 * 10;
      const angle = 25 + (Math.floor(i / 5) * 7) % 60;
      if (form === 0) return makeQuestion(`Two angles on a straight line are ${angle}° and y. Find y.`, `Angles on a straight line total 180°: y = 180° - ${angle}°.`, `${180 - angle}°.`);
      if (form === 1) return makeQuestion(`A triangle has angles ${angle}°, 60° and y. Find y.`, `Triangle angles total 180°: y = 180° - (${angle}° + 60°).`, `${120 - angle}°.`);
      const sides = 5 + Math.floor(i / 5) % 4;
      if (form === 2) return makeQuestion(`Find the sum of the interior angles of a ${['', '', '', '', '', 'pentagon', 'hexagon', 'heptagon', 'octagon'][sides]}.`, `For ${sides} sides, the angle sum is (n - 2) × 180° = (${sides} - 2) × 180°.`, `${(sides - 2) * 180}°.`);
      if (form === 3) return makeQuestion(`Find each interior angle of a regular ${['', '', '', '', '', 'pentagon', 'hexagon', 'heptagon', 'octagon'][sides]}.`, `Angle sum = (${sides} - 2) × 180° = ${(sides - 2) * 180}°. Divide by ${sides}: ${(sides - 2) * 180}° ÷ ${sides}.`, `${(sides - 2) * 180 / sides}°.`);
      return makeQuestion(`An angle is ${x}°. What is its vertically opposite angle?`, `Vertically opposite angles are equal.`, `${x}°.`);
    }
    case 8: {
      const l = i % 8 + 5;
      const w = i % 6 + 3;
      if (form === 0) return makeQuestion(`Find the area of a triangle with base ${l} cm and height ${w} cm.`, `A = ½ × base × height = ½ × ${l} × ${w}.`, `${l * w / 2} cm².`);
      if (form === 1) return makeQuestion(`Find the perimeter of a square with side ${l} cm.`, `P = 4 × side = 4 × ${l}.`, `${4 * l} cm.`);
      if (form === 2) return makeQuestion(`Find the volume of a cuboid ${l} cm × ${w} cm × ${c} cm.`, `V = length × width × height = ${l} × ${w} × ${c}.`, `${l * w * c} cm³.`);
      if (form === 3) return makeQuestion(`Convert ${l * 100} cm to metres.`, `100 cm = 1 m, so divide by 100: ${l * 100} ÷ 100.`, `${l} m.`);
      return makeQuestion(`Find the area of a rectangle ${l} m by ${w} m.`, `Area = length × width = ${l} × ${w}.`, `${l * w} m².`);
    }
    case 10: {
      const values = [i % 9 + 2, i % 7 + 4, i % 9 + 2, i % 5 + 8, i % 9 + 2];
      const sorted = [...values].sort((x, y) => x - y);
      if (form === 0) return makeQuestion(`Find the mean of ${values.join(', ')}.`, `Add: ${values.join(' + ')} = ${values.reduce((sum, x) => sum + x, 0)}. Divide by 5.`, `${values.reduce((sum, x) => sum + x, 0) / 5}.`);
      if (form === 1) return makeQuestion(`Find the median of ${values.join(', ')}.`, `Order: ${sorted.join(', ')}. The middle value is ${sorted[2]}.`, `${sorted[2]}.`);
      if (form === 2) return makeQuestion(`Find the range of ${values.join(', ')}.`, `Largest - smallest = ${sorted[4]} - ${sorted[0]}.`, `${sorted[4] - sorted[0]}.`);
      if (form === 3) return makeQuestion(`A bag has ${n} red and ${b} blue counters. How many counters are there?`, `Total = red + blue = ${n} + ${b}.`, `${n + b}.`);
      return makeQuestion(`A fair die is rolled. What is the probability of getting a ${i % 6 + 1}?`, `There is 1 favorable face out of 6 equally likely faces.`, '1/6.');
    }
    case 9: {
      const x = i % 8 + 2;
      if (form === 0) return makeQuestion(`Point P is (${x}, ${-x}). In which quadrant is P?`, `The x-coordinate is positive and the y-coordinate is negative.`, 'Quadrant IV.');
      if (form === 1) return makeQuestion(`Move point (${x}, ${b}) 3 units right. What are its new coordinates?`, `Add 3 to the x-coordinate and keep y unchanged: (${x} + 3, ${b}).`, `(${x + 3}, ${b}).`);
      if (form === 2) return makeQuestion(`What are the coordinates of a point on the x-axis with x-coordinate ${x}?`, `Every point on the x-axis has y = 0.`, `(${x}, 0).`);
      if (form === 3) return makeQuestion(`Point A is (${x}, ${b}). Reflect it in the x-axis.`, `Reflection in the x-axis keeps x the same and changes the sign of y.`, `(${x}, ${-b}).`);
      return makeQuestion(`How many units from the origin is point (${x}, 0) along the x-axis?`, `Distance along the axis is the absolute value of x: |${x}|.`, `${x} units.`);
    }
    case 11: {
      const values = [i % 8 + 2, i % 5 + 4, i % 8 + 2, i % 6 + 6, i % 7 + 3];
      const sorted = [...values].sort((x, y) => x - y);
      if (form === 0) return makeQuestion(`Find the median of ${values.join(', ')}.`, `Arrange in order: ${sorted.join(', ')}. The middle value is ${sorted[2]}.`, `${sorted[2]}.`);
      if (form === 1) return makeQuestion(`Find the range of ${values.join(', ')}.`, `Subtract the smallest value from the largest: ${sorted[4]} - ${sorted[0]}.`, `${sorted[4] - sorted[0]}.`);
      if (form === 2) return makeQuestion(`A bag has ${n} red and ${b} blue counters. Find the probability of choosing red.`, `Favorable outcomes = ${n}; total outcomes = ${n} + ${b} = ${n + b}. Probability = favorable/total.`, `${n}/${n + b}.`);
      if (form === 3) return makeQuestion(`A bag contains ${n} red and ${b} blue counters. What is the probability of choosing a blue counter?`, `Favorable outcomes = ${b}; total outcomes = ${n} + ${b} = ${n + b}. Probability = favorable/total.`, `${b}/${n + b}.`);
      return makeQuestion(`Find the mean of ${values.slice(0, 4).join(', ')}.`, `Sum = ${values.slice(0, 4).join(' + ')} = ${values.slice(0, 4).reduce((sum, x) => sum + x, 0)}. Divide by 4.`, `${values.slice(0, 4).reduce((sum, x) => sum + x, 0) / 4}.`);
    }
    default: {
      const x = i % 8 + 2;
      if (form === 0) return makeQuestion(`Translate point (${x}, ${b}) 2 units right and 1 unit up.`, `Add 2 to x and 1 to y: (${x} + 2, ${b} + 1).`, `(${x + 2}, ${b + 1}).`);
      if (form === 1) return makeQuestion(`Reflect point (${x}, ${b}) in the x-axis.`, `Keep x the same and change y to its opposite.`, `(${x}, ${-b}).`);
      if (form === 2) return makeQuestion(`Rotate point (${x}, 0) 90° anticlockwise about the origin.`, `A 90° anticlockwise turn maps (x, y) to (-y, x). Apply it to (${x}, 0).`, `(0, ${x}).`);
      if (form === 3) return makeQuestion(`What does a 180° rotation do to the coordinates (${x}, ${b}) about the origin?`, `A half-turn maps (x, y) to (-x, -y).`, `(${-x}, ${-b}).`);
      return makeQuestion(`Reflect point (${x}, ${b}) in the y-axis.`, `Reflection in the y-axis changes the sign of x and keeps y unchanged.`, `(${-x}, ${b}).`);
    }
  }
}

function prepareQuestionBanks() {
  Object.entries(syllabus).forEach(([level, topics]) => {
    topics.forEach((topic, topicIndex) => {
      topic.questions = Array.from({ length: 50 }, (_, index) => {
        const question = createPracticeQuestion(level, topicIndex, index + 1);
        question.options = createAnswerOptions(question.answer, index + 1);
        return question;
      });
    });
  });
}

prepareQuestionBanks();

const overview = document.getElementById('overview');
const topicsContainer = document.getElementById('topics-container');

function renderOverview(level) {
  const current = syllabus[level];
  const totalQuestions = current.reduce((sum, topic) => sum + topic.questions.length, 0);
  overview.innerHTML = `
    <article class="overview-card">
      <div class="label">Class</div>
      <strong>${level.toUpperCase().replace('JSS', 'JSS ')}</strong>
    </article>
    <article class="overview-card">
      <div class="label">Topics</div>
      <strong>${current.length}</strong>
    </article>
    <article class="overview-card">
      <div class="label">Question Bank</div>
      <strong>${totalQuestions}</strong>
    </article>
    <article class="overview-card">
      <div class="label">Study Focus</div>
      <strong>${current[0].title}</strong>
    </article>
  `;
}

function renderTopics(level) {
  const current = syllabus[level];

  topicsContainer.innerHTML = current
    .map((topic, index) => {
      const questionItems = topic.questions
        .map(
          (item, qIndex) => `
            <div class="question-item">
              <p class="prompt">Q${qIndex + 1}: ${item.question}</p>
              <ol class="answer-options" type="A">
                ${item.options.map((option) => `<li>${option}</li>`).join('')}
              </ol>
              <p class="working"><strong>Working:</strong> ${item.working}</p>
              <p class="answer"><strong>Answer:</strong> ${item.answer}</p>
            </div>
          `
        )
        .join('');

      const objectives = topic.objectives.map((goal) => `<li>${goal}</li>`).join('');
      const concepts = topic.concepts.map((concept) => `<li>${concept}</li>`).join('');

      return `
        <article class="topic-card" data-topic="${index}">
          <button class="topic-header" type="button" aria-expanded="false">
            <div class="topic-title">
              <span class="topic-number">${index + 1}</span>
              <h3>${topic.title}</h3>
            </div>
            <span class="chevron" aria-hidden="true"></span>
          </button>
          <div class="topic-content">
            <div class="topic-meta">
              <div class="meta-box">
                <h4>Learning Objectives</h4>
                <ul>${objectives}</ul>
              </div>
              <div class="meta-box">
                <h4>Key Ideas</h4>
                <ul>${concepts}</ul>
              </div>
            </div>
            <div class="questions">
              <h4>Practice Questions, Workings and Answers <span class="question-count">50 questions</span></h4>
              ${questionItems}
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  topicsContainer.querySelectorAll('.topic-header').forEach((button) => {
    button.addEventListener('click', () => {
      const parent = button.closest('.topic-card');
      parent.classList.toggle('open');
      button.setAttribute('aria-expanded', String(parent.classList.contains('open')));
    });
  });
}

const buttons = document.querySelectorAll('.level-btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.level;
    buttons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderOverview(selected);
    renderTopics(selected);
  });
});

renderOverview('jss1');
renderTopics('jss1');
