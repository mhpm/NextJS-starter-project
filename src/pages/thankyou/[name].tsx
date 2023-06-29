import { useRouter } from 'next/router';

export default function ThankYouPage() {
  const router = useRouter();
  console.log('router: ', router);

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <div
        role="alert"
        className="bg-green-100 py-5 px-6 text-base text-green-700 rounded"
      >
        Thanks {router.query?.name}, we will be in touch shortly
      </div>
    </div>
  );
}
