import { MyDatabaseClassic } from './db/my-database-classic';
const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: 'Gabriel', age: 25 });
myDatabaseClassic.add({ name: 'Karol', age: 23 });
myDatabaseClassic.add({ name: 'Estranho', age: 32 });
myDatabaseClassic.add({ name: 'Jody', age: 2 });
myDatabaseClassic.remove(2);
// myDatabaseClassic.show();

export { myDatabaseClassic };
