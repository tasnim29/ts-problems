// 1
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

// 2
const getLength = (value: string | unknown[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

// 3
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

// 4

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
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

// 5
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

// 6
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

// 7
function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const oneArray = [...arr1, ...arr2];
  let noDuplicate: (string | number)[] = [];
  for (let i = 0; i < oneArray.length; i++) {
    if (!noDuplicate.includes(oneArray[i])) {
      noDuplicate.push(oneArray[i]);
    }
  }
  return noDuplicate;
}

// 8
type product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice (input:product[]):number{
    const TotalPrice = input.reduce((Total,product)=>{
        console.log(Total,product)
        return (Total) + (product.price *product.quantity)*(1-(product.discount??0)/100)
    },0)
   return TotalPrice
}

