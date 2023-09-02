import { myDatabaseA } from './module-a';

const myDatabaseB = myDatabaseA;

myDatabaseB.add({ name: 'Romildo', age: 25 });
myDatabaseB.add({ name: 'Romário', age: 23 });
myDatabaseB.add({ name: 'Reginald', age: 32 });
myDatabaseB.add({ name: 'Raenira', age: 2 });
myDatabaseB.show();

console.log(myDatabaseB === myDatabaseA);
