import React, { useState } from 'react';
import HooksList from './HooksList';
import Hook from './Hook';

export const hookContext = React.createContext();
export const hookType = React.createContext();

export default function MainHooksComponent() {
  const [hookName, setHookName] = useState();
  const [isCustomHook, setIsCustomHook] = useState();

  return (
    <main>
      <HooksList setHookName={setHookName} setIsCustomHook={setIsCustomHook}/>
      <hr />
			
      {!hookName ? (
        <div>Choose a hook from the list above</div>
      ) : (
        <hookContext.Provider value={{hookName, isCustomHook}}>
          <Hook />
        </hookContext.Provider>
      )}
    </main>
  );
}
