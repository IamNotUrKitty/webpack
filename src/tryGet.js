import get from "lodash/get";

var object = { 'a': [{ 'b': { 'c': 3 } }] };


export const abc = () => {
  console.log(get(object, 'a[0].b.c'));
};