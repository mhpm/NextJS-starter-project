import { IStore } from '@/src/interfaces';
import { CardStore } from '@/src/components';

export default function ListStoreContainer({ data }: { data: IStore[] }) {
  return (
    <>
      {data.map((store: IStore) => (
        <CardStore
          key={store.id}
          id={store.id}
          title={store.title}
          imageUrl={store.imageUrl}
          description={store.description}
          color={store.color}
        />
      ))}
    </>
  );
}
