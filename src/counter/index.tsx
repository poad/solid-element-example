import { createSignal } from 'solid-js';

import { register, compose } from 'component-register';
import { withSolid } from 'solid-element';

import style from './index.css';

compose(
  register('solid-counter'),
  withSolid,
)(() => {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <style>{style}</style>
      <button
        onClick={() => setCount((prev) => (prev > 0 ? count() - 1 : prev))}
      >
        -
      </button>
      <span>{count()}</span>
      <button onClick={() => setCount(count() + 1)}>+</button>
    </div>
  );
});
