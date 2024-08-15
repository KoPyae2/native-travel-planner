import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface MyContextType {
    tripsData: object;
    setTripsData: (tripsData: object) => void;
}

// Create the context with a default value
export const CreateTripContex = createContext<MyContextType | null>(null);

// Create a provider component
export const CreateTripContexProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tripsData, setTripsData] = useState<object>({});

    return (
        <CreateTripContex.Provider value={{ tripsData, setTripsData }}>
            {children}
        </CreateTripContex.Provider>
    );
};
