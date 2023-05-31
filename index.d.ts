export type HasId<T> = { id: GetIdType<T> };

export type GetIdType<EntityType> = EntityType extends {
  id: infer TIdKey extends PropertyKey;
}
  ? TIdKey
  : never;

export type EntityState<TEntity extends HasId<TEntity>> = {
  ids: GetIdType<TEntity>[];
  entities: Record<GetIdType<TEntity>, TEntity>;
};
