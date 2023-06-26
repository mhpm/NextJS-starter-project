import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import { getPerson } from './getPerson';
import { ResetButton } from './ResetButton';
import { Loading } from '@/src/components';

function sillyExpensiveFunction() {
  console.log('Executing silly function');
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | {
      type: 'initialize';
      name: string;
    }
  | {
      type: 'increment';
    }
  | {
      type: 'decrement';
    }
  | {
      type: 'reset';
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'initialize':
      return { name: action.name, score: 0, loading: false };
    case 'increment':
      return { ...state, score: state.score + 1 };
    case 'decrement':
      return { ...state, score: state.score - 1 };
    case 'reset':
      return { ...state, score: 0 };
    default:
      return state;
  }
}

const Scores = () => {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });
  const addButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    getPerson().then(({ name }) => {
      dispatch({ type: 'initialize', name });
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

  // useMemo helps improve the performance of function calls by memoizing their results and using the memoized value when the function is re-executed
  const expensiveCalculation = useMemo(() => sillyExpensiveFunction(), []);

  const handleReset = useCallback(() => dispatch({ type: 'reset' }), []);

  if (loading) return <Loading />;

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div>
        <h3 className="text-center mb-7 text-xl">
          {name}: {score}
        </h3>
        <p>{expensiveCalculation}</p>
        <button
          ref={addButtonRef}
          onClick={() => dispatch({ type: 'increment' })}
          className="bg-teal-500 focus:bg-teal-400 px-5 py-2 rounded mr-2 font-bold"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement' })}
          className="bg-teal-500 px-5 py-2 rounded mr-2 font-bold"
        >
          -
        </button>
        <ResetButton onClick={handleReset} />
      </div>
    </div>
  );
};

export default Scores;