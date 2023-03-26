import { Id } from "./id";

describe("id", () => {
  it("should not allow special characters", () => {
    expect(() => Id.create(" .asd")).toThrow("Invalid characters");
  });
});

export {};
