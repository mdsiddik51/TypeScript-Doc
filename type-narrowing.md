# Type Narrowing in TypeScript

### What is Type Narrowing

Type Narrowing is a feature in TypeScript that allows developers to narrow down a variable from a broader type to a more specific type.

#### Why Do We Need Type Narrowing?

Imagine you have a variable that accepts both strings and numbers.

```typescript
const Print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value;
  } else {
    return value;
  }
};
```

like the example on the top we taking one paramitter with two tipe on is string but if we trying to make the value uppercase it giving me a error becose value type can be number or string if it number we cannot make it uppercase and type script giveig me a error so we can narrow the the type with `typeof` keyword to get the string type and make it uppercase .

### type Narrowing with instanceof

with instanceof we can narrow down the type more

```typescript
const showData = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }

  const date = new Date(x);
  console.log(date.toISOString());
};
```

In this example, we can see that with the `instanceof` keyword, we can determine whether the value of `x` was created using the `new Date()` constructor. If it was, the condition returns `true`; if not, it returns `false`. Using `instanceof`, we can narrow down the type to produce the desired output.

### Type Narrowing Using the `in` Operator

The `in` operator is used for Type Narrowing in TypeScript. It checks whether a specific property exists inside an object. Based on the result, TypeScript automatically narrows the object's type.

**Example:**

```typescript
// Using the "in" operator

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }

  animal.swim();
};
```

### Type Narrowing with truthiness

```typescript
//* truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggedInUser: User = {
  name: "siddik",
  address: {
    street: "ABC",
  },
};

const showAddress = (user: User) => {
  if (user && user.address) {
    console.log(user.address.street);
    return;
  }

  throw new Error("User not found");
};
```
In this example we can narrow down a object using some claver tric we have a function showAddress with the if keywork we can determent the paramiter user if user not have it's its thwow an error if the user have it chake the user address with the dot notation if the user and also user have the address the it's console log the users street name .


### Conclusion

Type Narrowing is an important feature of TypeScript that helps developers work safely with different types of values or data. By using `typeof`, `instanceof`, the `in` operator, and truthiness checking with `if` `else if` and `else`, we can identify the actual type of a value and perform the correct operations. It makes our code safer, easier to understand, and helps prevent common type-related errors and misticks.
