import { memo } from 'react';

type Props = {
  onClick: () => void;
};

export const ResetButton = memo(({ onClick }: Props) => {
  console.log('render Reset');
  return (
    <button className="bg-stone-500 px-5 py-2 rounded mr-2" onClick={onClick}>
      Reset
    </button>
  );
});

ResetButton.displayName = 'ResetButton';
