// import { useRef, RefObject, useReducer, ChangeEvent } from "react";

// // Definindo o tipo para o estado do formulário
// interface FormData {
//   [key: string]: string;
// }

// // Definindo a ação para atualização do estado do formulário
// interface UpdateAction {
//   type: "update";
//   name: string;
//   value: string;
// }

// // Definindo uma nova interface que estende os elementos HTML com as propriedades name e value
// interface HTMLInput extends HTMLInputElement {
//   name: string;
//   value: string;
// }

// // Definindo o tipo para as refs dos inputs
// type InputRef<T> = RefObject<T>;

// // Definindo o tipo para o hook useFormReducer
// const useFormReducer = <T extends HTMLInput>(refs: InputRef<T>[]) => {
//   // Inicializando o estado com um objeto vazio
//   const initialState: FormData = refs.reduce((acc, ref) => {
//     acc[ref.current?.name || ""] = ref.current?.value || "";
//     return acc;
//   }, {});

//   // Criando o reducer com o estado inicial
//   const [formData, dispatch] = useReducer(
//     (state: FormData, action: UpdateAction) => {
//       switch (action.type) {
//         case "update":
//           return {
//             ...state,
//             [action.name]: action.value,
//           };
//         default:
//           return state;
//       }
//     },
//     initialState
//   );

//   // Função para lidar com as mudanças nos inputs
//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//       type: "update",
//       name: event.target.name,
//       value: event.target.value,
//     });
//   };

//   // Retorna o estado do formulário e a função para lidar com as mudanças nos inputs
//   return {
//     formData,
//     handleChange,
//   };
// };

// export default useFormReducer;
