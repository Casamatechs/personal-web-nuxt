---
title: Typed state management with useReducer
author: Carlos Sanchez
date: '2023-06-10'
description: As the complexity of a component's state grows, it becomes more difficult to keep track of the different fields and their types. This post shows how to use TypeScript to type the state management of a React component using useReducer.
---

# Typed state management with useReducer

One of the fundamental features of React components (and many other web frameworks) is their out of the box state management capabilities. Managing a website's state can become really complex and there are many libraries that can help us with this task. However, in this post I am going to focus on the built-in hooks that React provides us with, starting with the most basic one: `useState`.

## State management with `useState`

For the seek of simplicity, we will start with a simple component that manages a single field of type `number`:

```ts [useState.tsx]
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0); // count: number

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

When this component is mounted, the `useState` hook will set up for us a constant named `count` of type `number` as it can be inferred from the initial value passed to the hook. It will also set up a function named `setCount` that will allow us to update the value of `count` by passing a new value of type `number` or composing a callback function that receives the current value of `count` and returns a new value of type `number`. For more details on how the `useState` hook works, you can check the [official documentation](https://react.dev/reference/react/useState).

## Growing the component's state

As we add more fields to our component's state, it can turn into a nightmare to keep track of the different fields and their possible values, even with the help of Typescript. Let's see an example:

```ts [growingState.tsx]
import { useState } from 'react';

type Role = 'user' | 'admin' | 'owner';
type Country = 'Spain' | 'Korea' | 'USA' | undefined;

function MyComponent() {
  const [count, setCount] = useState(0); // count: number
  const [role, setRole] = useState<Role>('user') // role: 'user' | 'admin' | 'owner'
  const [canUpdate, setCanUpdate] = useState(false); // canUpdate: boolean
  const [country, setCountry] = useState<Country>(); // country: 'Spain' | 'Korea' | 'USA' | undefined

  ...
}
```

Now we have 4 different dispatch functions that can be called with different types of arguments. Even though we can use Typescript to infer the type of function arguments, it can be difficult to keep track of all the different fields. The complexity can keep growing as we add more fields to our component's state or we increase the dimensionality of the fields (e.g. an array of objects). As the complexity of our component's state grows, we can start thinking about using a different hook to manage it. The [`useReducer` hook](https://react.dev/reference/react/useReducer) can help us with this task.

## State management with `useReducer`

The `useReducer` hook, as its own name suggests, is a hook that allows us to manage all the changes in the state of our component by using a single reducer function, that will control all the different actions that can be dispatched. Let's see how we can use it to manage the state of our component:

```ts [useReducer.tsx]
import { useReducer } from 'react';

type Role = 'user' | 'admin' | 'owner';
type Country = 'Spain' | 'Korea' | 'USA';

type State = {
  count: number;
  role: Role;
  canUpdate: boolean;
  country?: Country;
};

type ReducerAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setRole'; payload: Role }
  | { type: 'setCanUpdate'; payload: boolean }
  | { type: 'setCountry'; payload: Country };

function reducer(state: State, action: ReducerAction): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'setRole':
      return { ...state, role: action.payload };
    case 'setCanUpdate':
      return { ...state, canUpdate: action.payload };
    case 'setCountry':
      return { ...state, country: action.payload };
    default:
      return state;
  }
}

function MyComponent() {

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    role: 'user',
    canUpdate: false,
  }); // country: undefined

  ...
}
```

Now we only have a single state object and an associated dispatch function, but the whole idea of using the `useReducer` hook is to simplify our state management, not to move the complexity inside the reducer function. However, we can use Typescript's type system to help us simplify the reducer function in a way that it will be easier to maintain and extend. Let's see how we can do it.

## The magic of type inference

Typescript brings a lot of advatanges when it comes to DX (Developer Experience) and one of them is the ability to infer the type of a variable from its usage. In addition, Typescript comes with utility types that allows us to generate new types by combining or trimming existing ones. Let's see how we can use these features to simplify our reducer function.

```ts [typed-function.ts]
type Role = 'user' | 'admin' | 'owner';
type Country = 'Spain' | 'Korea' | 'USA';

type State = {
  id: string;
  count: number;
  role: Role;
  canUpdate: boolean;
  country?: Country;
};

type StateUpdatableFields = Exclude<keyof State, 'id' | 'count'>;

type StateUpdateData = {
  [K in StateUpdatableFields]: { field: K; value: State[K] };
}[StateUpdatableFields];

type ReducerAction =
  | { type: 'increment', payload: 1 }
  | { type: 'decrement', payload: -1 }
  | { type: StateUpdatableFields; payload: StateUpdateData };

function updateStateGenericField<K extends StateUpdatableFields>(
  state: State,
  type: K,
  payload: State[K]
): State {
  return { ...state, [type]: payload };
}

function reducer(state: State, action: ReducerAction): State {
  const { type, payload } = action;
  if (type === 'increment' || type === 'decrement') {
    return { ...state, count: state.count + payload };
  }
  const { field, value } = action.payload;
  return updateStateGenericField(state, field, value);
}

...

```

First of all, we added a field `id` that we don't want to modify. We defined a utility type `StateUpdatableFields` that excluded `id` and `count` from the list of keys of the `State` type. Then, we defined a utility type `StateUpdateData` that will generate a new type by iterating over the keys of `StateUpdatableFields` and creating an object with the following structure:

```ts
type StateUpdatableFields = Exclude<keyof State, 'id' | 'count'>;

/*
type StateUpdateData = {
    field: "role";
    value: Role;
} | {
    field: "canUpdate";
    value: boolean;
} | {
    field: "country";
    value: Country | undefined;
}
*/

type StateUpdateData = {
  [K in StateUpdatableFields]: { field: K; value: State[K] };
}[StateUpdatableFields];
```

You may be wandering why we also excluded `count` from the list of updatable fields. The reason is that we want to handle the `increment` and `decrement` actions in a different way. To do so, we explicitly included both actions in the `ReducerAction` type. This way, Typescript will be able to infer the type of the `payload` field of the action and we can use it to update the `count` field of our state.

```ts
type ReducerAction =
  | { type: 'increment'; payload: 1 }
  | { type: 'decrement'; payload: -1 }
  | { type: StateUpdatableFields; payload: StateUpdateData };
```

Finally, we defined a generic function `updateStateGenericField` that will receive the `field` and `value` of the `StateUpdateData` type and will update the state accordingly. This way, we can handle all the different actions in a single function and we can keep the reducer function simple and easy to maintain.

```ts
function updateStateGenericField<K extends StateUpdatableFields>(
  state: State,
  type: K,
  payload: State[K]
): State {
  return { ...state, [type]: payload };
}

function reducer(state: State, action: ReducerAction): State {
  const { type, payload } = action;
  if (type === 'increment' || type === 'decrement') {
    return { ...state, count: state.count + payload };
  }
  const { field, value } = payload;
  return updateStateGenericField(state, field, value);
}
```

From this point, we can keep adding new fields to our `State` type and if we don't need any special logic to handle the update of those fields, Typescript will take care of everything for us, keeping the reducer function simple and easy to maintain while maintaining type safety.
