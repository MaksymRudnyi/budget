import data from './data.json';
import {addItem } from '../indexdb';



export const addData = () => data.forEach((item) => addItem(item));