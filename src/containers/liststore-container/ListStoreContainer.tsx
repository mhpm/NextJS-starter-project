import { IStore } from '@/src/interfaces';
import { CardStore } from '@/src/components';

export default function ListStoreContainer({ data }: { data: IStore[] }) {
  return (
    <>
      {data.map((store: IStore) => (
        <CardStore key={store.id} id={store.id} imageUrl={store.imageUrl}>
          <CardStore.Content>
            <div className='text-sm font-bold p-1 text-primary'>
              {store.title}
            </div>
            <div>{store.description}</div>
          </CardStore.Content>
        </CardStore>
      ))}
    </>
  );
}
