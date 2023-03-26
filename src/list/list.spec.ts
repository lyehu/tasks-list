import { Task } from "../task/task";
import { List } from "./list";

describe("list", () => {
  it("returns a list due today", () => {
    const todayTask = new Task("asd", "2023-03-26");
    const list = new List([new Task("1q"), todayTask]);
    expect(list.getDueToday()).toStrictEqual([todayTask]);
  });

  it("deletes one element of the list", () => {
    const targetId = "1qs";
    const list = new List([new Task("1q"), new Task(targetId)]);
    expect(list.delete(targetId)).toStrictEqual(
      new List([new Task("1q")]).getAll()
    );
  });
});

export {};
