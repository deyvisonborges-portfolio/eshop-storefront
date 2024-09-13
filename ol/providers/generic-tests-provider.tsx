// import { createGenericContext } from "./generic-provider";

// import React from "react";
// // Criando um contexto específico para um exemplo de usuário
// interface User {
//   name: string;
//   age: number;
// }

// const userMethods = (
//   state: User,
//   setState: React.Dispatch<React.SetStateAction<User>>
// ) => ({
//   updateName: (name: string) =>
//     setState((prevState) => ({ ...prevState, name })),
//   incrementAge: () =>
//     setState((prevState) => ({ ...prevState, age: prevState.age + 1 })),
// });

// const [useUserContext, UserProvider] = createGenericContext<
//   User,
//   ReturnType<typeof userMethods>
// >(userMethods);

// const App: React.FC = () => {
//   return (
//     <UserProvider defaultValue={{ name: "John Doe", age: 30 }}>
//       <UserComponent />
//     </UserProvider>
//   );
// };

// const UserComponent: React.FC = () => {
//   const { state, updateName, incrementAge } = useUserContext();

//   return (
//     <div>
//       <p>Name: {state.name}</p>
//       <p>Age: {state.age}</p>
//       <button onClick={() => updateName("Jane Doe")}>Update Name</button>
//       <button onClick={incrementAge}>Increment Age</button>
//     </div>
//   );
// };

// export default App;
