
const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return value;
};


const getLength = (value: string | unknown[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};


class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}



type item = {
  title: string;
  rating: number;
};
function filterByRating(input: item[]): item[] {
  let moreThanFourRated: item[] = [];
  for (let i = 0; i < input.length; i++) {
    const item = input[i];

    if (item.rating < 0 || item.rating > 5) {
      throw new Error(`Invalid rating for '${item.title}': ${item.rating}`);
     
    }

    if (item.rating >= 4  ) {
      moreThanFourRated.push(item);
    }
  }
  return moreThanFourRated;
}



type user = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
function filterActiveUsers(input: user[]): user[] {
  let activatedArray: user[] = [];
  for (let i = 0; i < input.length; i++) {
    const User = input[i];

    if (User.isActive) {
      activatedArray.push(User);
    }
  }
  return activatedArray;
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(input: Book): void {
  const { title, author, publishedYear, isAvailable } = input;

  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
}


function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  
  const oneArray: (string | number)[] = [];
  let noDuplicate: (string | number)[] = [];

  for(let i=0; i<arr1.length; i++){
    oneArray[oneArray.length] = arr1[i]
  }
  for(let i=0; i<arr2.length; i++){
    oneArray[oneArray.length] = arr2[i]
  }
  for (let i=0; i<oneArray.length; i++){
    let found=false;
    for(let j=0; j<noDuplicate.length; j++){
      if(oneArray[i]===noDuplicate[j]){
         found = true;
        break;
      }
    }
    if(!found){
      noDuplicate[noDuplicate.length] = oneArray[i]
    }
  
  }
  return noDuplicate;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));


type product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice (input:product[]):number{
    const TotalPrice = input.reduce((Total,product)=>{
      
        return (Total) + (product.price *product.quantity)*(1-(product.discount??0)/100)
    },0)
   return TotalPrice
}

