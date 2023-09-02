import { User } from '../interface/user';
export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;
  private constructor() {}
  private users: User[] = [];

  static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic.instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
