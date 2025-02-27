import React, { useState } from 'react';
import HooksList from './HooksList';
import Hook from './Hook';

export const hookContext = React.createContext();

export default function MainHooksComponent() {
  const [hookName, setHookName] = useState();

  return (
    <main>
      <HooksList setHookName={setHookName} />
      <hr />
			
      {!hookName ? (
        <div>Choose a hook from the list above</div>
      ) : (
        <hookContext.Provider value={hookName}>
          <Hook />
        </hookContext.Provider>
      )}
    </main>
  );
}
