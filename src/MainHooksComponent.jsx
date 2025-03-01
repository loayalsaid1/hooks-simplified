import React, { useState } from 'react';
import HooksList from './HooksList';
import Hook from './Hook';

export const hookContext = React.createContext();
export const hookType = React.createContext();

export default function MainHooksComponent() {
  const [hookName, setHookName] = useState();
  const [hookData, setHookData] = useState();

  return (
    <main>
      <HooksList setHookName={setHookName} setHookData={setHookData}/>
      <hr />
			
      {!hookName ? (
        <div>Choose a hook from the list above</div>
      ) : (
        <hookContext.Provider value={{hookName, ...hookData}}>
          <Hook />
        </hookContext.Provider>
      )}
    </main>
  );
}
