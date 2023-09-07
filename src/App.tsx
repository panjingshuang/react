import React ,{ FC } from 'react';
import { useNavigate } from 'react-router-dom'
export const App: FC<{ name: string }> = ({ name }) => {
  const nav = useNavigate()
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p className="text-3xl font-bold underline">Start editing to see some magic happen :)</p>
      <button onClick={()=>{nav('/home')}}>跳转到app下的某个页面中</button>
    </div>
  );
};
