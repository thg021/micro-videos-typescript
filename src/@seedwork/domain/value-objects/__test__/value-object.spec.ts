import ValueObject from "../value-object";

class StubValueObject extends ValueObject {}

describe("ValueObject Unit Test", () => {
  it("should set value", () => {
    let vo = new StubValueObject("string value");
    expect(vo.value).toBe("string value");

    vo = new StubValueObject({ prop1: "value1" });
    expect(vo.value).toStrictEqual({ prop1: "value1" });
  });

  it("should convert to a string", () => {
    const date = new Date();
    const arrange = [
      { received: null, expected: "null" },
      { received: undefined, expected: "undefined" },
      { received: "", expected: "" },
      {
        received: { prop1: "test" },
        expected: JSON.stringify({ prop1: "test" }),
      },
      { received: date, expected: date.toString() },
      { received: true, expected: "true" },
      { received: false, expected: "false" },
      { received: "string", expected: "string" },
      { received: 2, expected: "2" },
    ];

    arrange.forEach((type) => {
      const vo = new StubValueObject(type.received);
      expect(vo + "").toBe(type.expected);
    });
  });
});
