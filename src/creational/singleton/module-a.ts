// import { MyDatabaseClassic as MyDatabase } from './db/my-database-classic';
import { myDatabaseModule as MyDatabase } from './db/my-database-module';
const myDatabaseA = MyDatabase;

myDatabaseA.add({ name: 'Gabriel', age: 25 });
myDatabaseA.add({ name: 'Karol', age: 23 });
myDatabaseA.add({ name: 'Estranho', age: 32 });
myDatabaseA.add({ name: 'Jody', age: 2 });
myDatabaseA.remove(2);
// myDatabaseA.show();

export { myDatabaseA };
