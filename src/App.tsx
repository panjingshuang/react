import React ,{ FC } from 'react';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p className="text-3xl font-bold underline">Start editing to see some magic happen :)</p>
    </div>
  );
};
