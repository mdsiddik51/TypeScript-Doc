# TypeScript :  Type Aliases vs. Interfaces in TypeScript

## What Is a Type Alias in TypeScript?

Type Alias is a way of defining a type it's allows you to create a new, reusable name for any existing type. It acts like a variable, but instead of storing a value, it stores a type definition

```typescript
type ID = string;
const id: ID = "3122";
```

with the union oprator we can use multipal types in a single type in type alias union (|) oprator behave like or it's meen we can use any of one type

### Union Type with Type Alias

**Example: with Single union**

```typescript
type ID = string | number;

let userId: ID = "123";
let orderId: ID = 98765;
```

**Example: with Multipul union**

```typescript
type Status = "success" | "error" | "loading";
let currentStatus: Status = "success";
```

## & Symbol in type alias

With the & symbol we can combine two defrent type alias to create a new type , that is called an Intersection Type , when using the new type in a object that object suld have all the properties from every type it's combined with the & oprator You can read the & symbol simply as "AND".

## & Example

```typescript
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Worker = Person & Employee;

const employee: Worker = {
  name: "Miraz",
  salary: 50000,
};
```

# What Is an Interface in TypeScript?

An Interface is another way to define the structure of an object in TypeScript , it's descrive how what a propaty , method , and object shuld have

To creat a interface we use interface keyword

We can think a interface a blueprint of a object that driscript what values the object shuld have
In TypeScript interfaces, properties are separated by semicolons (;) or commas (,) althow standerd pratcis is to use semicolons

**Example**

```typescript
interface User {
  name: string;
  email: string;
  age: number;
}

const user1: User = {
  name: "Miraz",
  email: "example@gmail.com",
  age: 25,
};
```

## Core Differences Between Type Aliases and Interfaces

both the type alies and the interface can describe objects there are some inportent deference

### let's lern it with some example

### 1 . Defining Object Structures

Using Type Alias:

```typescript
type User = {
  name: string;
  age: number;
};
```

Using Interface:

```typescript
interface User {
  name: string;
  age: number;
}
```

Both of the structure produce same kind of result There is no major difference when defining a simple object.

### 2: Union Types

a union types allows a variable to accept multipal types or values
type alius support union types directly but interface cannot directly support union types

**Example**

```typescript
type Status = "success" | "error" | "loading";
let currentStatus: Status = "success";
```

### 3: Extending and Combining Types

Interfaces use the extends keyword to inherit properties from another interface.

```typescript
interface User {
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

Type aliases use the intersection operator (&) to combine multiple types.


```typescript
interface User {
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

### 4: Working with Primitive Types
Type aliases can represent primitive types such as strings, numbers, and booleans.

```typescript
type ID = number;
typ Email = string;
type IsActive = boolean;
```

Interfaces cannot directly create primitive types.

### When Should You Choose Type Alias?

You should choose a type alias when you need more flexibility and you use defining different kinds of types.
1 . if yoru variable have multiput values use type alies 
2 . Use a type alias to create reusable names for strings, numbers, and booleans.
3 . Use type alias when you need to combine multipul types with the intersection (&) operator.

### When Should You Choose Interface?

You should choose an interface when your main goal is to define the structure of a objects.
1 . Interfaces are easy to read and understand.
2 . Use extends to reuse properties from other interfaces.
3 . interface combine multipal interface with the same name \


### Conclusion

**According to the official TypeScript documentation, use interface by default, and reach for type when you need specific features that interfaces cannot provide.**
