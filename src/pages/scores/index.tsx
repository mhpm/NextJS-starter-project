import { useCallback, useEffect, useReducer, useRef } from 'react';
import getPerson from '@/src/lib/getPerson';
import { Loading } from '@/src/components';
import Button from '@/src/components/button/button';

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

  useEffect(() => {
    getPerson().then(({ name }) => {
      dispatch({ type: 'initialize', name });
    });
  }, []);

  // useMemo helps improve the performance of function calls by memoizing their results and using the memoized value when the function is re-executed
  // const expensiveCalculation = useMemo(() => sillyExpensiveFunction(), []);

  const handleReset = useCallback(() => dispatch({ type: 'reset' }), []);

  if (loading) return <Loading />;

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div>
        <h3 className="text-center mb-7 text-xl">
          {name}: {score}
        </h3>
        {/* <p>{expensiveCalculation}</p> */}
        <Button size="large" onClick={() => dispatch({ type: 'increment' })}>
          +
        </Button>
        <Button
          size="small"
          onClick={() => {
            if (score > 0) dispatch({ type: 'decrement' });
          }}
          className="mx-3"
        >
          -
        </Button>
        <Button variation="secondary" label="Reset" onClick={handleReset} />
      </div>
    </div>
  );
};

export default Scores;
