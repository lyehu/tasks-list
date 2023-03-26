export class Deadline {
  private readonly date: Date | undefined;

  constructor(date?: string) {
    this.date = date ? new Date(date) : undefined;
  }

  getDate() {
    return this.date;
  }

  isEmpty() {
    return this.date === undefined;
  }

  isToday() {
    if (this.date) {
      const today = new Date();
      return (
        this.date.getDate() === today.getDate() &&
        this.date.getMonth() === today.getMonth() &&
        this.date.getFullYear() === today.getFullYear()
      );
    }

    return false;
  }
}
