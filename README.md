# Entity State

Simple but broad types for working with Entity State.

## Installation

```bash
pnpm install -D @onsetsoftware/entity-state
```

## Usage

```ts
import type { EntityState, HasId } from '@onsetsoftware/entity-state';

export function addEntity<TEntity extends HasId<TEntity>>(
  state: EntityState<TEntity>,
  entity: TEntity,
) {
  state.ids.push(entity.id);
  state.entities[entity.id] = entity;

  return state;
}
```
