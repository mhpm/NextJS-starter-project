import { Banner } from '@/src/components';
import { ListStoreContainer } from '@/src/containers';

// https://jsonplaceholder.typicode.com/photos
import source from '@/data/data.json';

// can only be exported from a page file
// only runs on server side rendering
export async function getStaticProps(context: any) {
  // fetching data here
  console.log('server side');

  return {
    props: {
      source,
    }, // will be passed to the page component as props
  };
}

//client side code
export default function Home(props: any) {
  return (
    <>
      <main>
        <div className='flex min-h-screen flex-col items-center justify-center p-24'>
          <Banner />
          <div className='w-full xl:w-2/3 mt-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
              <ListStoreContainer data={props.source} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
