import React from 'react';
import { IStore } from '@/interfaces';
import { CardStore } from '@/components';

export default function ListStoreContainer({ data }: { data: IStore[] }) {
  return (
    <>
      {data.map((store: IStore) => (
        <CardStore
          key={store.id}
          id={store.id}
          title={store.title}
          url={store.url}
          thumbnailUrl={store.thumbnailUrl}
        />
      ))}
    </>
  );
}
