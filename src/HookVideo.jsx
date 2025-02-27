import React, { useContext } from 'react';
import { hookContext } from './MainHooksComponent';

export default function HookVideo() {
  const hookName = useContext(hookContext);

  return (
    <section>
      <h5  className='subtitle'>📺 Hook Vidoe</h5>
      <p>
        Here should go either the link to teh video tutorial for{' '}
        <strong>{hookName}</strong> or the video itself
      </p>
    </section>
  );
}
