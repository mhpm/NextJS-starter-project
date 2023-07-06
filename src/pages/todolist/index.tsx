import { ReactNode, useState } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { useChecked } from './useChecked';
import IdValue from './types';

// props spreading pattern

type CheckListProps<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
  renderItem?: (item: Data) => ReactNode;
  checkedIds?: IdValue[];
  onCheckedIdsChange?: (checkedIds: IdValue[]) => void;
} & ComponentPropsWithoutRef<'ul'>;

function ChecklistComponent<Data>({
  data,
  id,
  primary,
  secondary,
  renderItem,
  checkedIds,
  onCheckedIdsChange,
  ...ulProps
}: CheckListProps<Data>) {
  const { resolvedCheckedIds, handleCheckChange } = useChecked({
    checkedIds,
    onCheckedIdsChange,
  });

  return (
    <ul className="bg-gray-300 rounded p-10" {...ulProps}>
      {data.map((item) => {
        if (renderItem) {
          return renderItem(item);
        }

        const idValue = item[id] as unknown;
        if (typeof idValue !== 'string' && typeof idValue !== 'number') {
          return null;
        }

        const primaryText = item[primary] as unknown;
        if (typeof primaryText !== 'string') {
          return null;
        }

        const secondaryText = item[secondary] as unknown;
        return (
          <li
            key={idValue}
            className="bg-white p-6 shadow rounded mb-4 last:mb-0 hover:scale-[1.02] transition ease-in-out duration-300 overflow-hidden relative"
          >
            <label className="flex items-center justify-between cursor-pointer">
              <div className="ml-2">
                <div className="text-xl text-gray-800 pb-1">{primaryText}</div>
                {typeof secondaryText === 'string' && (
                  <div className="text-sm text-gray-500">{secondaryText}</div>
                )}
              </div>

              <input
                type="checkbox"
                checked={resolvedCheckedIds.includes(idValue)}
                onChange={handleCheckChange(idValue)}
                className="w-6 h-6 accent-blue-500"
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
}

const CheckListContainer = () => {
  const [checkedId, setCheckedId] = useState<IdValue | null>(null);

  function handleCheckedIdsChange(newCheckedIds: IdValue[]) {
    const newCheckedIdArr = newCheckedIds.filter((id) => id !== checkedId);
    if (newCheckedIdArr.length === 1) {
      setCheckedId(newCheckedIdArr[0]);
    } else {
      setCheckedId(null);
    }
  }

  return (
    <div className="p-10">
      <ChecklistComponent
        data={[
          { id: 1, name: 'John', role: 'Manager' },
          { id: 2, name: 'Joseph', role: 'Paradigm' },
          { id: 3, name: 'Luis', role: 'Business' },
          { id: 4, name: 'Michael', role: 'Coach' },
          { id: 5, name: 'Joaquin', role: 'Front-End' },
          { id: 6, name: 'Ricardo', role: 'Front-End' },
          { id: 7, name: 'Michelle', role: 'Front-End' },
          { id: 8, name: 'Brian', role: 'Back-End' },
          { id: 9, name: 'Victor', role: 'Back-End' },
          { id: 10, name: 'Evan', role: 'UI/UX' },
          { id: 11, name: 'Ranjani', role: 'QA' },
          { id: 12, name: 'Sharaka', role: 'QA' },
        ]}
        id="id"
        primary="name"
        secondary="role"
        // checkedIds={checkedId === null ? [] : [checkedId]}
        // onCheckedIdsChange={handleCheckedIdsChange}
        // renderItem={(item) => (
        //   <li key={item.id} className="bg-white p-4 border-b-2 rounded">
        //     <div className="text-xl text-slate-800 pb-1">{item.name}</div>
        //     <div className="text-slate-500">{item.role}</div>
        //   </li>
        // )}
      />
    </div>
  );
};

// rest props patter
type Props = {
  label: string;
  labelProps: ComponentPropsWithoutRef<'label'>;
} & ComponentPropsWithoutRef<'input'>;
const Field = ({ label, labelProps, ...inputProps }: Props) => {
  return (
    <>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} />
    </>
  );
};

export default CheckListContainer;
