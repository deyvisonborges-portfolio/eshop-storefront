// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface ContextProviderProps<T> {
//   children: ReactNode;
//   defaultValue: T;
// }

// export function createGenericContext<T, M>(
//   methods: (state: T, setState: React.Dispatch<React.SetStateAction<T>>) => M
// ) {
//   type ContextType = {
//     state: T;
//     setState: React.Dispatch<React.SetStateAction<T>>;
//   } & M;

//   const GenericContext = createContext<ContextType | undefined>(undefined);

//   const useGenericContext = () => {
//     const context = useContext(GenericContext);
//     if (context === undefined) {
//       throw new Error(
//         "useGenericContext must be used within a GenericProvider"
//       );
//     }
//     return context;
//   };

//   const GenericProvider = ({
//     children,
//     defaultValue,
//   }: ContextProviderProps<T>) => {
//     const [state, setState] = useState<T>(defaultValue);
//     const customMethods = methods(state, setState);

//     return (
//       <GenericContext.Provider value={{ state, setState, ...customMethods }}>
//         {children}
//       </GenericContext.Provider>
//     );
//   };

//   return [useGenericContext, GenericProvider] as const;
// }
