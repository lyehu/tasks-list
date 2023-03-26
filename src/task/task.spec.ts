import { Task } from "./task";

describe("Task", () => {
  it("creates a task with an ID that is combination of numbers and letters", () => {
    const validId = "1q2w3e";
    expect(new Task(validId).getId().getValue()).toBe(validId);
  });

  it("throws an error if the provided id has invalid chars", () => {
    const invalidId = " 1q2w3e";
    expect(() => new Task(invalidId)).toThrow("Invalid characters");
  });

  it("creates a task with a deadline", () => {
    const deadline = "2023-05-20";
    const taskWithDeadline = new Task("qa", deadline);
    const expectedDeadline = new Date(deadline);
    expect(taskWithDeadline.getDeadline().getDate()).toStrictEqual(
      expectedDeadline
    );
  });
});

export {};
