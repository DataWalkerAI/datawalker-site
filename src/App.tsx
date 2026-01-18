import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'DataWalker – AI Development & Consulting';
  }, []);

  return (
    <div>
      <h1>Welcome to DataWalker</h1>
      <p>Your partner in AI development and consulting.</p>
    </div>
  );
}
