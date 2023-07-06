import { FormEvent } from 'react';
import { ActionFunctionArgs } from 'react-router-dom';
import { useRouter } from 'next/router';

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export async function contactPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const contact = {
    name: formData.get('name'),
    email: formData.get('email'),
    reason: formData.get('reason'),
    notes: formData.get('notes'),
  } as Contact;

  console.log('Submitted details:', contact);
}

const Forms = (props: Contact) => {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const contact = {
      name: formData.get('name'),
      email: formData.get('email'),
      reason: formData.get('reason'),
      notes: formData.get('notes'),
    } as Contact;

    console.log('Submitted details:', contact);
    router.push(`/thankyou/${formData.get('name')}`);
  }

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">
        If you enter your details we ll get back to you as soon as we can.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            className="rounded text-stone-700"
            name="name"
            pattern="[a-z0-9]{1,15}"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded text-stone-700"
            pattern="\S+@\S+\.\S+"
            required
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="reason">Reason you need to contact us</label>
          <select id="reason" className="rounded text-stone-700" name="reason">
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="notes">Additional notes</label>
          <textarea
            id="notes"
            className="rounded text-stone-700"
            name="notes"
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 h-12 px-6 font-semibold bg-stone-700 hover:bg-stone-900 rounded text-white w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
