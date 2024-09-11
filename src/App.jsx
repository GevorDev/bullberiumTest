import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Initialize the Telegram Web App when the component mounts
    const tg = window.Telegram.WebApp;
    
    // Expand the app to the full screen
    tg.expand();
    
    // Setup event listeners if needed
    tg.onEvent('mainButtonClicked', () => {
      console.log('Main button clicked!');
    });

    // Setting up the main button
    tg.MainButton.text = "Click Me!";
    tg.MainButton.show();
    
    return () => {
      tg.offEvent('mainButtonClicked');
    };
  }, []);

  return (
    <div>
      <h1>Welcome to Telegram Web App</h1>
      <h1>COMING SOON</h1>
    </div>
  );
}

export default App;
