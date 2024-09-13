"use client";

import { FormEvent, useId, useState } from "react";
import { SignInSchemaValidation } from "./sign-in.validation";
import { ZodError } from "zod";
import { handleZodValidation, ValidationError } from "./handleZodValidation";

const fields = [
  {
    name: "email",
    label: "email",
    placeholder: "Informe seu e-mail",
    type: "email",
  },
  {
    name: "password",
    label: "password",
    placeholder: "Informe sua senha",
    type: "password",
  },
];

export function SignInPage() {
  const [errors, setErrors] = useState<
    ValidationError<typeof SignInSchemaValidation>
  >({});
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    /** conversion of the input from FormData to an object */
    const data = Object.fromEntries(new FormData(e.currentTarget));

    handleZodValidation({
      onError: setErrors,
      data: data,
      onSuccess: (res) => {
        /**
         * res is of type:
         * { fullName: string; username: string; email: string; password: string; }
         */
        console.log(res);
      },
      schema: SignInSchemaValidation,
    });
  };

  // const [errors, setErrors] = useState<ZodError | null>(null);

  // const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const data = Object.fromEntries(formData.entries());

  //   console.log("received data", data);

  //   try {
  //     const res = SignInSchemaValidation.parse(data);
  //     console.log(res);
  //     setErrors(null); // Limpar os erros se a validação for bem-sucedida
  //   } catch (error: unknown) {
  //     if (error instanceof ZodError) {
  //       setErrors(error); // Definir os erros de validação
  //       console.log(error.errors, `errors`); // Mensagens de erro detalhadas
  //     } else {
  //       console.error("Erro inesperado", error);
  //     }
  //   }
  // };

  const renderFields = () =>
    fields.map(({ name, placeholder, type }) => (
      <input
        key={useId()}
        name={name}
        placeholder={placeholder}
        type={type ?? "text"}
        id={name}
      />
    ));

  return (
    <section>
      <form name="sign-form" onSubmit={handleSubmit}>
        {renderFields()}
        <button type="submit">Criar conta</button>
      </form>
      {JSON.stringify(errors)}
    </section>
  );
}
