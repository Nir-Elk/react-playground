import React from 'react'

const PlaygroundContext = React.createContext({});
export const PlaygroundContextProvider = PlaygroundContext.Provider;
export const PlaygroundContextConsumer = PlaygroundContext.Consumer;
export default  PlaygroundContext;