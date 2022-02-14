"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const numbersCollection_1 = require("./numbersCollection");
const numbersCollection = new numbersCollection_1.NumbersCollection([50, 3, -5, 0]);
const sorter = new sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
