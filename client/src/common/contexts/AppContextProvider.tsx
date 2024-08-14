/* eslint-disable @typescript-eslint/no-explicit-any */

import { theme } from 'antd'
import  { createContext, ReactNode, useState } from 'react'
type AppContextProviderProps = {
    children: ReactNode
}
export const AppContext = createContext<any>(null)
const AppContextProvider = ({children}:AppContextProviderProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <AppContext.Provider value={{collapsed,setCollapsed,colorBgContainer,borderRadiusLG}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider