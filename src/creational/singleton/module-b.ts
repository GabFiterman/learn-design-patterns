import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as DbmoduleA } from './module-a';

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: 'Romildo', age: 25 });
myDatabaseClassic.add({ name: 'Romário', age: 23 });
myDatabaseClassic.add({ name: 'Reginald', age: 32 });
myDatabaseClassic.add({ name: 'Raenira', age: 2 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === DbmoduleA);
