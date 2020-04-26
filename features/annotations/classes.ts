class Vehicle {
  // constructor(color: string) {
  //   this.color = color;
  // }
  // color: string;

  constructor(public color: string) {}
  public drive2(): void {
    console.log("chugga chugga");
  }
  private honk(): void {
    console.log("beep");
  }
  protected honk2(): void {
    console.log("beep");
  }
}

class MyCar extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }

  startDrive(): void {
    this.drive();
    this.honk2();
  }
}

const mercedes = new MyCar(4, "orange");
mercedes.startDrive();
// mercedes.honk();
