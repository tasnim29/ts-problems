1.What are some differences between interfaces and types in TypeScript?

আমাদের কাছে টাইপস্ক্রিপট এ টাইপ ডিফাইন করার দুটি উপায় আছে,type এবং interface. TypeScript এ খুবই সাধারণ একটি প্রশ্ন হলো আমরা কোনটা ব্যবহার করব,interface নাকি type? এর উত্তর হলো: নির্ভর করে. কিছু ক্ষেত্রে type ভালো কাজ করে, আবার কিছু ক্ষেত্রে interface বেশি উপযোগী

Type মূলত একটি type alias,অর্থাৎ কোনো টাইপকে নতুন নামে ব্যবহার করার সুযোগ দেয়. এটি কোনো নতুন টাইপ তৈরি করে না,শুধু present কোনো টাইপকে একটি নতুন নাম দেয় Type alias তৈরি করা যায় type কীওয়ার্ড ব্যবহার করে

অন্যদিকে interface মূলত একটি অবজেক্টের স্ট্রাকচার নির্ধারণ করে। এটি সাধারণত অবজেক্টের শেইপ বা ক্লাসের গঠন নির্দিষ্ট করার জন্য ব্যবহার হয়.Interface তৈরি করা যায় interface কীওয়ার্ড ব্যবহার করে

কিছু ক্ষেত্রে type এবং interface দুটোই ব্যবহার করা যায়, কিন্তু কিছু নির্দিষ্ট পরিস্থিতিতে type ব্যবহার করলে interface এর তুলনায় আলাদা behave পাওয়া যায়

নীচে type এবং interface এর গুরুত্বপূর্ণ পার্থক্য ও মিলগুলো তুলে ধরা হলো:

(১) Primitive টাইপ যেমন string, number, null, boolean
আমরা primitive টাইপকে এভাবে type alias দিতে পারি:
type myNum = number;

কিন্তু আমরা interface ব্যবহার করে primitive টাইপকে alias দিতে পারি না, কারণ interface শুধুমাত্র object type এর জন্য ব্যবহার করা হয়.

(২)union type আমাদের একটা টাইপ এর মধ্যে এটা নাইলে ওটা এভাবে ব্যবাহার করার সুযোগ দেয় বাট
interface এ কোনো union type নেই.এখানে দুইবার interface initiation করা লাগে সেইম নামে

(৩)function type এর ক্ষেত্রে type এবং interface উভয় ক্ষেত্রেই একটা ফাংশনের টাইপ ডিফাইন করা যায়..
যেমন type alias বযবহার করে পারামিটার গুলার টাইপ এবং রিটার্ন টাইপ ডিফাইন করা যায়:
type Add = (num1:number, num2:number)=>number ;

সেইমভাবে interface ও ফাংশন টাইপ রিপ্রেজেন্ট করতে কাজে লাগে
interface IAdd {
(num1:number, num2:number):number
}
কিন্তু কমপ্লেক্স ফাংশনের ক্ষেত্রে type ব্যবহার করা বেশি feasible

(৪) declaration merging এর ক্ষেত্রে interface ই এপ্লিকেবল.একটা interface কে একাধিক বার ডিফাইন করলে টাইপস্ক্রিপট কমপাইলার মারজ করে ফেলে..
বাট সেইম জিনিস টাইপ দিয়ে করতে গেলে এরর দিবে

(৫)interface বর্ধিত হতে মাল্টিপল interface এ.extends keyword ব্যবহার করে একটা নতুন interface পুরাতন interface এর সব প্রোপার্টি ব্যাবহার করতে পারে এবং নতুন যোগ ও করতে পারে..যেমন:
interface Goat extends footballer {
world_cup:number
}
বাট type এর ক্ষেত্রে সেইম রেসাল্ট লাভ করতে হলে অবশ্যয় intersection ব্যবহার করা লাগবে.যেমন:
type Goat = footballer & {world_cup:number}

আমরা আগে type alias এবং interface এবং তাদের পার্থক্য নিয়ে আলোচনা করেছি.. যদিও কিছু পরিস্থিতিতে একটি অন্যটির তুলনায় বেশি উপযোগী, বেশিরভাগ ক্ষেত্রে এগুলোর মধ্যে নির্বাচন মূলত ব্যক্তিগত পছন্দের ওপর নির্ভর করে..

2.What is the use of the keyof keyword in TypeScript? Provide an example.

KeyOf টাইপস্ক্রিপটের একটি শক্তিশালী ফিচার.এটা object type এর প্রোপার্টি গুলারে টাইপ হিসাবে ব্যবহার করার সুবিধা করে দেয়.keyof operator একটা object. টাইপ নেয় এবং তার সব key গুলারে union type করে দেয়.
যেমন:
type Point = { x: number; y: number };
type P = keyof Point; // "x" | "y"

let key: P;

key = "x"; // right
key = "y"; // right
key = "z"; // wrong

অন্য আরেকটা ভাবে keyof এর ব্যবহার রয়েছে.কিছু object এ নির্দিষ্ট key থাকেনা.যেমন:
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // number

তাই keyof এর মেইন ব্যবাহার বলতে বলা যায় type safe access..object এর key ব্যবহারের সময় ভুল key দিলে typescript error দেয়..যেমন:

type User = {
id:number,
name:string,
address :{
city:string,
"post-code":number
}
}

const user:User={
id:123,
name:"Tasnim Mahmud",
address:{
city:"Cox",
"post-code":1204
}
}
type p = keyof User

const getPropertyFromObj = (obj:User,key:p)=>{
return obj[key]
}
console.log(getPropertyFromObj(user,"address"))

এখানে keyof point নিশ্চিত করে id or name or address ছাডা অন্য key ব্যবহার করা যাবেনা
