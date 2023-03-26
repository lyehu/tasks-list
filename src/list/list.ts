import { Task } from "../task/task";

type ListType = {
  [key: string]: Task;
};

export class List {
  private readonly list: ListType = {};

  constructor(tasks: Task[]) {
    let result: ListType = {};

    tasks.forEach((task) => {
      result[task.getId().getValue()] = task;
    });

    this.list = result;
  }

  getAll() {
    return Object.values(this.list);
  }

  getDueToday() {
    return Object.values(this.list).filter((task) =>
      task.getDeadline().isToday()
    );
  }

  delete(id: string) {
    delete this.list[id];
    return Object.values(this.list);
  }
}
