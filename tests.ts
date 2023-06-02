import { EntityState, GetIdType, PropType } from ".";

type Expect<T extends true> = T;
type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type TestPropTypesCanBeDetected = Expect<
  Equal<PropType<{ id: number }, "id">, number>
>;

type TestIdTypeCanBeDetected = Expect<Equal<GetIdType<{ id: number }>, number>>;

type TestBadIdTypesReturnNever = Expect<
  Equal<GetIdType<{ id: { bad: "key type" }; name: string }>, never>
>;

type User = {
  id: string;
  name: string;
};

type EntityStatePassesWithValidEntity = EntityState<User>;

// @ts-expect-error
type EntityStateFailsWithInvalidEntity = EntityState<{ name: string }>;
