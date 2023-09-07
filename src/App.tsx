import { FC } from 'react';
import '../css/index.css';
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p className="text-8xl font-bold underline">字体没有变化</p>
    </div>
  );
};
