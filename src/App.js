import React, { useState, useContext } from 'react'

import { store } from './state'

function App() {
  let { state } = useContext(store)

  return (
    <main>
      Binance
    </main>
  );
}

export default App
