//setting up variables
let canvasX = 800;
let canvasY = 600;

let childSpawned = false;

//variables for personA
let geneA;
let patternA;

let personAheadX = 50;
let personAheadY = 50;

let personAbodyX = 100;
let personAbodyY = 125;

let personAheadColor1, personAheadColor2, personAheadColor3;

let personAWidth, personAHeight;

let personAbodyColor1, personAbodyColor2, personAbodyColor3;

let personAnumShapes;

let personAshapeX, personAshapeY;

//variables for personB
let geneB;
let patternB;

let personBheadX = 450;
let personBheadY = 50;

let personBbodyX = 100;
let personBbodyY = 125;

let personBheadColor1, personBheadColor2, personBheadColor3;

let personBWidth, personBHeight;

let personBbodyColor1, personBbodyColor2, personBbodyColor3;

let personBnumShapes;

let personBshapeX, personBshapeY;

//variables for personC
let geneC;
let patternC;

let personCheadX = 200;
let personCheadY = 350;

let personCbodyX = 58;
let personCbodyY = 325;

let personCheadColor1, personCheadColor2, personCheadColor3;

let personCWidth, personCHeight;

let personCbodyColor1, personCbodyColor2, personCbodyColor3;

let personCnumShapes;

let personCshapeX, personCshapeY;

//does once on start
function setup() {
  //make canvas
  createCanvas(canvasX, canvasY);
  //make update button
  updateButton = createButton("Update");
  updateButton.position(300, 50);
  updateButton.mousePressed(update);
  //make restart button
  restartButton = createButton("Restart");
  restartButton.position(355, 50);
  restartButton.mousePressed(restart);
  //geneA textbox
  geneAtextBox = createInput();
  geneAtextBox.position(20, 300);
  //make change gene button
  changeGeneAButton = createButton("GeneA");
  changeGeneAButton.position(200, 300);
  changeGeneAButton.mousePressed(changeGeneA);
  //patternA textbox
  patternAtextBox = createInput();
  patternAtextBox.position(20, 330);
  //make change pattern button
  changePatternAButton = createButton("PatternA");
  changePatternAButton.position(200, 330);
  changePatternAButton.mousePressed(changePatternA);

  //geneB textbox
  geneBtextBox = createInput();
  geneBtextBox.position(420, 300);
  //make change gene button
  changeGeneBButton = createButton("GeneB");
  changeGeneBButton.position(600, 300);
  changeGeneBButton.mousePressed(changeGeneB);
  //patternB textbox
  patternBtextBox = createInput();
  patternBtextBox.position(420, 330);
  //make change pattern button
  changePatternBButton = createButton("PatternB");
  changePatternBButton.position(600, 330);
  changePatternBButton.mousePressed(changePatternB);

  //button to create childd
  createChildButton = createButton("Create Child");
  createChildButton.position(420, 470);
  createChildButton.mousePressed(createChild);

  //promote to A
  promoteAButton = createButton("Promote Child to A");
  promoteAButton.position(100, 600);
  promoteAButton.mousePressed(promoteA);

  //promote to B
  promoteBButton = createButton("Promote Child to B");
  promoteBButton.position(250, 600);
  promoteBButton.mousePressed(promoteB);

  //geneC textbox
  geneCtextBox = createInput();
  geneCtextBox.position(370, 500);
  //make change gene button
  changeGeneCButton = createButton("GeneC");
  changeGeneCButton.position(550, 500);
  changeGeneCButton.mousePressed(changeGeneC);
  //patternC textbox
  patternCtextBox = createInput();
  patternCtextBox.position(370, 530);
  //make change pattern button
  changePatternCButton = createButton("PatternC");
  changePatternCButton.position(550, 530);
  changePatternBButton.mousePressed(changePatternC);

  //-------------------------------------------------------
  //---------randomize things for first person-------------
  //-------------------------------------------------------
  //randomize headA color
  personAheadColor1 = floor(random(0, 255));
  personAheadColor2 = floor(random(0, 255));
  personAheadColor3 = floor(random(0, 255));

  //randomize body color
  personAbodyColor1 = floor(random(0, 255));
  personAbodyColor2 = floor(random(0, 255));
  personAbodyColor3 = floor(random(0, 255));

  //randomize width and height
  personAWidth = floor(random(0, 30));
  personAHeight = floor(random(0, 30));

  //randomize the num of shapes
  personAnumShapes = floor(random(1, 1000));

  //randomize shape position
  personAshapeX = floor(random(150, 200));
  personAshapeY = floor(random(150, 200));

  //randomize the first gene
  //geneMakeUp: "shape of head"-"shape of body"-"color of head1"-"color of head2"-"color of head3"-"width of body"-"height of body"
  geneA =
    floor(random(1, 3)) +
    "-" +
    floor(random(1, 4)) +
    "-" +
    padBy2(personAheadColor1) +
    "-" +
    padBy2(personAheadColor2) +
    "-" +
    padBy2(personAheadColor3) +
    "-" +
    padBy1(personAWidth) +
    "-" +
    padBy1(personAHeight);

  //geneA = "1-3-255-255-255-00-00";
  geneAtextBox.value(geneA);

  //patternMakeUp: "shape for pattern"-"number of shapes"-"multiplier of how far apart they are"-"is pattern color random"-"pattern color1"-"pattern color2"-"pattern color3"-"shapex"-"shapey"
  patternA =
    floor(random(1, 5)) +
    "-" +
    padBy3(personAnumShapes) +
    "-" +
    floor(random(1, 3)) +
    "-" +
    floor(random(0, 2)) +
    "-" +
    padBy2(personAbodyColor1) +
    "-" +
    padBy2(personAbodyColor2) +
    "-" +
    padBy2(personAbodyColor3) +
    "-" +
    padBy2(personAshapeX) +
    "-" +
    padBy2(personAshapeY);

  //patternA = "1-1000-1-0-150-150-150-200-200";
  patternAtextBox.value(patternA);

  //-------------------------------------------------------
  //--------randomize things for second person-------------
  //-------------------------------------------------------
  //randomize headB color
  personBheadColor1 = floor(random(0, 255));
  personBheadColor2 = floor(random(0, 255));
  personBheadColor3 = floor(random(0, 255));

  //randomize body color
  personBbodyColor1 = floor(random(0, 255));
  personBbodyColor2 = floor(random(0, 255));
  personBbodyColor3 = floor(random(0, 255));

  //randomize width and height
  personBWidth = floor(random(0, 30));
  personBHeight = floor(random(0, 30));

  //randomize the num of shapes
  personBnumShapes = floor(random(1, 1000));

  //randomize shape position
  personBshapeX = floor(random(150, 200));
  personBshapeY = floor(random(150, 200));

  //randomize the first gene
  //geneMakeUp: "shape of head"-"shape of body"-"color of head1"-"color of head2"-"color of head3"-"width of body"-"height of body"
  geneB =
    floor(random(1, 3)) +
    "-" +
    floor(random(1, 4)) +
    "-" +
    padBy2(personBheadColor1) +
    "-" +
    padBy2(personBheadColor2) +
    "-" +
    padBy2(personBheadColor3) +
    "-" +
    padBy1(personBWidth) +
    "-" +
    padBy1(personBHeight);

  //geneB = "1-3-255-255-255-00-00";
  geneBtextBox.value(geneB);

  //patternMakeUp: "shape for pattern"-"number of shapes"-"multiplier of how far apart they are"-"is pattern color random"-"pattern color1"-"pattern color2"-"pattern color3"-"shapex"-"shapey"
  patternB =
    floor(random(1, 5)) +
    "-" +
    padBy3(personBnumShapes) +
    "-" +
    floor(random(1, 3)) +
    "-" +
    floor(random(0, 2)) +
    "-" +
    padBy2(personBbodyColor1) +
    "-" +
    padBy2(personBbodyColor2) +
    "-" +
    padBy2(personBbodyColor3) +
    "-" +
    padBy2(personBshapeX) +
    "-" +
    padBy2(personBshapeY);

  //patternB = "1-1000-1-0-150-150-150-200-200";
  patternBtextBox.value(patternB);
}

//this is called everytime the update button is pushed
function draw() {
  noLoop();
  //draw the background box
  fill("white");
  background = rect(0, 0, canvasX, canvasY);

  //-------------------------------------------------------
  //----------------make the first person------------------
  //-------------------------------------------------------

  //calling make head for person A
  makeHead(
    geneA,
    personAheadX,
    personAheadY,
    personAheadColor1,
    personAheadColor2,
    personAheadColor3,
    50,
    50
  );
  //calling make body for person A
  makeBody(
    geneA,
    personAbodyX,
    personAbodyY,
    personAbodyX,
    personAbodyY,
    personAbodyX,
    personAbodyY,
    personAbodyColor1,
    personAbodyColor2,
    personAbodyColor3,
    100,
    100,
    patternA
  );

  //-------------------------------------------------------
  //----------------make the second person-----------------
  //-------------------------------------------------------

  //calling make head for person B
  makeHead(
    geneB,
    personBheadX,
    personBheadY,
    personBheadColor1,
    personBheadColor2,
    personBheadColor3,
    50,
    50
  );
  //calling make body for person B
  makeBody(
    geneB,
    personBbodyX * 3.7,
    personBbodyY * 3.1,
    personBbodyX * 3.5,
    personBbodyY,
    personBbodyX,
    personBbodyY,
    personBbodyColor1,
    personBbodyColor2,
    personBbodyColor3,
    100,
    100,
    patternB
  );

  //-------------------------------------------------------
  //----------------make the third person-----------------
  //-------------------------------------------------------

  //checking that the "Create Child" button has been pushed
  if (childSpawned) {
    //calling make head for person C
    makeHead(
      geneC,
      personCheadX,
      personCheadY,
      personCheadColor1,
      personCheadColor2,
      personCheadColor3,
      50,
      50
    );
    //calling make body for person C
    makeBody(
      geneC,
      personCbodyX * 3.4,
      personCbodyY / 1.4,
      personCbodyX * 3.5,
      personCbodyY,
      personCbodyX * 5,
      personCbodyY,
      personCbodyColor1,
      personCbodyColor2,
      personCbodyColor3,
      100,
      100,
      patternC
    );
  }
}

//update button function
function update() {
  loop();
}

//restart button function
function restart() {
  location.reload();
}

//change geneA
function changeGeneA() {
  geneA = geneAtextBox.value();
  loop();
}

//change patternA
function changePatternA() {
  patternA = patternAtextBox.value();
  loop();
}

//change geneB
function changeGeneB() {
  geneB = geneBtextBox.value();
  loop();
}

//change patternB
function changePatternB() {
  patternB = patternBtextBox.value();
  loop();
}

//change geneC
function changeGeneC() {
  geneC = geneCtextBox.value();
  loop();
}

//change patternC
function changePatternC() {
  patternC = patternBtextBox.value();
  loop();
}

//promoting the child to the A spot
function promoteA() {
  geneA = geneC;
  geneAtextBox.value(geneA);
  patternA = patternC;
  patternAtextBox.value(patternA);
  loop();
}

//promting the child to the B spot
function promoteB() {
  geneB = geneC;
  geneBtextBox.value(geneB);
  patternB = patternC;
  patternBtextBox.value(patternB);
  loop();
}

//create child function
function createChild() {
  childSpawned = true;
  if (random(0, 100) < 40) {
    if (random(0, 100) < 50) {
      geneC = geneA;
    } else geneC = geneB;
  } else geneC = makeChildGene(geneA, geneB);
  if (random(0, 100) < 40) {
    if (random(0, 100) < 50) {
      patternC = patternA;
    } else patternC = patternB;
  } else patternC = makeChildPattern(patternA, patternB);
  geneCtextBox.value(geneC);
  patternCtextBox.value(patternC);
  loop();
}

function makeChildGene(gene1, gene2) {
  let newGene;
  let first = floor(
    (Number(gene1.substring(0, 1)) + Number(gene2.substring(0, 1))) / 2
  );
  let second = floor(
    (Number(gene1.substring(2, 3)) + Number(gene2.substring(2, 3))) / 2
  );
  let third = floor(
    (Number(gene1.substring(4, 7)) + Number(gene2.substring(4, 7))) / 2
  );
  let fourth = floor(
    (Number(gene1.substring(8, 11)) + Number(gene2.substring(8, 11))) / 2
  );
  let fifth = floor(
    (Number(gene1.substring(12, 15)) + Number(gene2.substring(12, 15))) / 2
  );
  let sixth = floor(
    (Number(gene1.substring(16, 18)) + Number(gene2.substring(16, 18))) / 2
  );
  let seventh = floor(
    (Number(gene1.substring(19, 21)) + Number(gene2.substring(19, 21))) / 2
  );

  //chance to mutate
  if (random(0, 100) < 10) {
    if (first == 2) {
      first = 1;
    } else {
      first = 2;
    }
    if (random(0, 100) < 10) {
      if (second == 2) {
        second = 1;
      } else if (second == 1) {
        second = 3;
      } else {
        second = 2;
      }
    }
  }

  newGene =
    first +
    "-" +
    second +
    "-" +
    padBy2(third) +
    "-" +
    padBy2(fourth) +
    "-" +
    padBy2(fifth) +
    "-" +
    padBy1(sixth) +
    "-" +
    padBy1(seventh);
  return newGene;
}

function makeChildPattern(pattern1, pattern2) {
  let newPattern;
  let first = floor(
    (Number(pattern1.substring(0, 1)) + Number(pattern2.substring(0, 1))) / 2
  );
  let second = floor(
    (Number(pattern1.substring(2, 6)) + Number(pattern2.substring(2, 6))) / 2
  );
  let third = floor(
    (Number(pattern1.substring(7, 8)) + Number(pattern2.substring(7, 8))) / 2
  );
  let fourth = floor(
    (Number(pattern1.substring(9, 10)) + Number(pattern2.substring(9, 10))) / 2
  );
  let fifth = floor(
    (Number(pattern1.substring(11, 14)) + Number(pattern2.substring(11, 14))) /
      2
  );
  let sixth = floor(
    (Number(pattern1.substring(15, 18)) + Number(pattern2.substring(15, 18))) /
      2
  );
  let seventh = floor(
    (Number(pattern1.substring(19, 22)) + Number(pattern2.substring(19, 22))) /
      2
  );
  let eighth = floor(
    (Number(pattern1.substring(23, 26)) + Number(pattern2.substring(23, 26))) /
      2
  );
  let ninth = floor(
    (Number(pattern1.substring(27, 30)) + Number(pattern2.substring(37, 30))) /
      2
  );

  //chance to mutate
  if (random(0, 100) < 10) {
    if (first == 1) {
      first = 2;
    } else if (first == 2) {
      first = 3;
    } else if (first == 3) {
      first = 4;
    } else if ((first = 4)) {
      first = 1;
    }
  }

  newPattern =
    first +
    "-" +
    padBy3(second) +
    "-" +
    third +
    "-" +
    fourth +
    "-" +
    padBy2(fifth) +
    "-" +
    padBy2(sixth) +
    "-" +
    padBy2(seventh) +
    "-" +
    padBy2(eighth) +
    "-" +
    padBy2(ninth);
  return newPattern;
}

//function to pad a number by a max of one digit
function padBy1(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

//function to pad a number by a max of two digits
function padBy2(num) {
  if (num < 100 && num > 9) {
    num = "0" + num;
  }
  if (num < 10) {
    num = "00" + num;
  }
  return num;
}

//function to pad a number by a max of three digits
function padBy3(num) {
  if (num < 1000 && num > 99) {
    num = "0" + num;
  }
  if (num < 100 && num > 9) {
    num = "00" + num;
  }
  if (num < 10) {
    num = "000" + num;
  }
  return num;
}

//making the pattern function
function makePattern(pattern) {
  //slicing up the genome to get at what each part means
  let numShapes = pattern.substring(2, 6);
  let mult_distance = pattern.substring(7, 8);
  let colorBool = pattern.substring(9, 10);
  let color1 = pattern.substring(11, 14);
  let color2 = pattern.substring(15, 18);
  let color3 = pattern.substring(19, 22);
  let shapeX = pattern.substring(23, 26);
  let shapeY = pattern.substring(27, 30);

  //making the patter to punch through the canvas with a mask
  pg = createGraphics(canvasX, canvasY);
  switch (pattern.substring(0, 1)) {
    //the first case is circles
    case "1":
      for (let i = 0; i < numShapes; i++) {
        let circleX = random(0, shapeX);
        let circleY = random(0, shapeY);
        if (colorBool == 1) {
          personAbodyColor1 = random(0, 255);
          personAbodyColor2 = random(0, 255);
          personAbodyColor3 = random(0, 255);
          pg.fill(personAbodyColor1, personAbodyColor2, personAbodyColor3);
        } else pg.fill(color1, color2, color3);
        pg.ellipse(circleX, circleY, 10);
      }
      break;
    //the second case is the enlongated rectangles
    case "2":
      for (let i = 0; i < numShapes; i++) {
        pg.rotate(random(360));
        if (colorBool == 1) {
          pg.fill(random(255), random(255), random(255));
        } else pg.fill(color1, color2, color3);
        pg.rect(0, 0, 1000, 10 * mult_distance);
      }
      break;
    //third pattern is the triangles
    case "3":
      for (let i = 0; i < numShapes; i++) {
        pg.rotate(random(360));
        if (colorBool == 1) {
          pg.fill(random(255), random(255), random(255));
        } else pg.fill(color1, color2, color3);
        let triangleX = random(0, shapeX);
        let triangleY = random(0, shapeY);
        pg.triangle(
          triangleX,
          triangleY,
          triangleX + 25,
          triangleY - 25,
          triangleX + 50,
          triangleY + 0
        );
      }
      break;
    //fourth pattern is the diamonds
    case "4":
      for (let i = 0; i < numShapes; i++) {
        pg.rotate(random(360));
        if (colorBool == 1) {
          pg.fill(random(255), random(255), random(255));
        } else pg.fill(color1, color2, color3);
        let quadX = random(0, shapeX);
        let quadY = random(0, shapeY);
        pg.quad(
          quadX,
          quadY,
          quadX + 15,
          quadY,
          quadX + 20,
          quadY + 10,
          quadX + 10,
          quadY + 10
        );
      }
      break;
    default:
      console.log("pattern defaulted");
  }
}

//function for making the head (shape and color)
function makeHead(gene, x, y, color1, color2, color3, size1, size2) {
  switch (gene.substring(0, 1)) {
    //first case is circle head
    case "1":
      fill(gene.substring(4, 7), gene.substring(8, 11), gene.substring(12, 15));
      ellipse(x + 50, y, size1);
      break;
    //second case is rectangle head
    case "2":
      fill(color1, color2, color3);
      rect(x + 25, y - 25, size1, size2);
      break;
    default:
      console.log("head defaulted");
  }
}

//function to make the body
function makeBody(
  gene,
  x1,
  x2,
  x3,
  y1,
  y2,
  y3,
  color1,
  color2,
  color3,
  size1,
  size2,
  pattern
) {
  switch (gene.substring(2, 3)) {
    //first case is circle body
    case "1":
      makePattern(pattern);
      let mskAcircle = createGraphics(canvasX, canvasY);
      mskAcircle.fill(color1, color2, color3);
      mskAcircle.ellipse(x1, y1, size1 * 2 + Number(gene.substring(16, 18)));
      mskImage = mskAcircle.get();
      pgImage = pg.get();
      pgImage.mask(mskImage.get());
      image(pgImage, x1 - 50, y1 - 50);
      break;
    //second case is rectangle body
    case "2":
      makePattern(pattern);
      let mskAsquare = createGraphics(canvasX, canvasY);
      mskAsquare.fill(color1, color2, color3);
      mskAsquare.rect(
        x1,
        y1,
        size1 + Number(gene.substring(16, 18)),
        size2 * 2 + Number(gene.substring(19, 22))
      );
      mskImage = mskAsquare.get();
      pgImage = pg.get();
      pgImage.mask(mskImage.get());
      image(pgImage, x1 - 75, y1 - 100);
      break;
    //third case is triangle body
    case "3":
      makePattern(pattern);
      let mskAtriangle = createGraphics(canvasX, canvasY);
      mskAtriangle.fill(color1, color2, color3);
      mskAtriangle.triangle(
        x1 - 100,
        y1 + 150,
        x2 - 25,
        y2 - 25,
        x3 + 100,
        y3 + 150
      );
      mskImage = mskAtriangle.get();
      pgImage = pg.get();
      pgImage.mask(mskImage.get());
      image(pgImage, x1 - 50, y1 - 75);
      break;
    default:
      console.log("body defaulted");
  }
}
