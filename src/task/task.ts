import { Deadline } from "../deadline/deadline";
import { Id } from "../id/id";

export class Task {
  private readonly deadline: Deadline;
  private readonly id: Id;

  constructor(id: string, deadline?: string) {
    this.id = Id.create(id);
    this.deadline = new Deadline(deadline);
  }

  getId() {
    return this.id;
  }

  getDeadline() {
    return this.deadline;
  }
}
