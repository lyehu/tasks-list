import { Deadline } from "./deadline";

describe("filter", () => {
  it("should return if a date is today", () => {
    expect(new Deadline("2023-03-26").isToday()).toBe(true);
  });
});

export {};
