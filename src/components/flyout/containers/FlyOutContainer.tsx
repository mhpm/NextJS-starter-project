import React, { useState } from 'react';
import FlyOut from '..';
import Button from '../../button/button';

type Props = {
  isOpen: boolean;
};

const FlyOutContainer = ({ isOpen }: Props): JSX.Element => {
  const [open, setOpen] = useState(isOpen);

  return open ? (
    <FlyOut>
      <FlyOut.Header className="bg-reg-500">
        <h2>Title Modal</h2>
      </FlyOut.Header>
      <FlyOut.Body>
        <p className="text-neutral-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          quisquam consectetur quibusdam perspiciatis illum temporibus rem vitae
          distinctio officiis unde itaque modi reprehenderit optio odio eveniet
          recusandae sunt, laborum qui!
        </p>
      </FlyOut.Body>
      <FlyOut.Footer>
        <Button onClick={() => setOpen(!open)} className="mr-5">
          Cancel
        </Button>
        <Button variation="secondary">Accept</Button>
      </FlyOut.Footer>
    </FlyOut>
  ) : (
    <></>
  );
};

export default FlyOutContainer;
