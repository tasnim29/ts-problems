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

(৩)
