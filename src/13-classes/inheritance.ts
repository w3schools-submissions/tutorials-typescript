// Implements
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
}

// Override
class BigSquare extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  public override toString(): string {
    return `BigSquare[width=${this.width}]`;
  }
}

// Abstract
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=$(this.getArea())]`;
  }
}

class LongRectangle extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
