---
title: Test blog post
author: Carlos Sanchez
date: '2023-06-04'
---

# Hello content

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

This is a sample code snippet

```ts [typed-function.ts]
type MyObject = {
  id: string;
  updatable?: 'Yes' | 'No' | 'Maybe';
  anotherField?: number;
};

type UpdatableFields = Exclude<keyof MyObject, 'id'>;

type UpdateData = {
  [K in UpdatableFields]: { type: K; payload: MyObject[K] };
}[UpdatableFields];

const objectArray: MyObject[] = [
  {
    id: 'id-123',
    updatable: 'Yes',
    anotherField: 123,
  },
];

function updateField(object: MyObject[], index: number, data: UpdateData) {
  function updateFunction<K extends UpdatableFields>(
    object: MyObject[],
    index: number,
    type: K,
    payload: MyObject[K]
  ) {
    object[index]![type] = payload;
  }
  const { type, payload } = data;
  return updateFunction(object, index, type, payload);
}

updateField(objectArray, 0, { type: 'updatable', payload: 'No' });
updateField(objectArray, 0, { type: 'anotherField', payload: 456 });
```

This is supposed to be displayed correctly
