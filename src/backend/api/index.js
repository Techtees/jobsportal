import React, {createContext, useEffect, useState} from 'react'

const AppContext = createContext();


export const AppProvider = ({children}) => {
    
    const [allJob, setAllJob] = useState ()
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        fetchJob()
    }, [])
    
    const fetchJob = async () => {
        
        const response = await fetch('https://nendu.syonagency.com/api/v1/applications')
        
        const data = await response.json()
        setAllJob(data)
    }
    
    return <AppContext.Provider value={{allJob}}>
        {children}
    </AppContext.Provider>
}


export default AppContext;
