@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `this boat color is ${this.color}`;
  }
  @logError("test message")
  pilot(@parameterDecorator speed: string): void {
    // console.log("swish");
    // throw new Error("oh oh oh ");
    if (speed === "fast") {
      console.log("eh ehehe");
    } else {
      console.log("ooh");
    }
  }
}
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
function parameterDecorator(target: any, key: string, index: number) {
  console.log(target);
  console.log(key);
  console.log(index);
}

function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}

function logError(errMsg: string) {
  return function logError(
    target: any,
    key: string,
    desc: PropertyDescriptor
  ): void {
    const method = desc.value;
    desc.value = () => {
      try {
        method();
      } catch (error) {
        console.log(errMsg);
      }
    };
  };
}

// new Boat().pilot();
