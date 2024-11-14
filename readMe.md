# pick:
    Pick allows you to create a new type by selecting a set of properties
    from the exisiting type.

Eg: [pick.ts](./src/pick.ts)

# Partial:
    Partial makes all properties of a type optimal, creating a type with same properties, but each marked as optional.
    Specifically useful when you want to do updates. 
Eg: [partial.ts](./src/partial.ts)

# Readonly:
    When you have a configuration object that should not be altered after initialization,making it Readonly ensures its properties cannot be changed.
Eg: [readOnly.ts](./src/readOnly.ts)

# Record and Map:
    Record and maps let's you give a cleaner type to objects.
Eg: [record.ts](./src/record.ts)

    Map gives you an even fancier way to deal with objects. very similar to c++.
eg: [map.ts](./src/map.ts)

# Exclude:
    In a function that can accept several types of inputs but you want to exclude specific types from besing passed to it.
 eg: [exclude.ts](./src/exclude.ts)

# type inferance in zod.
   [zod.ts](./src/zod.ts)

