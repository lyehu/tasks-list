export class Id {
  private readonly value: string;

  constructor(id: string) {
    this.value = id;
  }

  static create(id: string) {
    const validChars = /^[a-zA-Z0-9]+$/;

    if (validChars.test(id)) {
      return new Id(id);
    } else {
      throw new Error("Invalid characters");
    }
  }

  getValue() {
    return this.value;
  }
}
