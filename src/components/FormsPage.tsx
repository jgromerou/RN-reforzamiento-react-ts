import { useForm } from "react-hook-form";

type formInputs = {
  email: string;
  password: string;
};
export const FormsPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<formInputs>({
    defaultValues: {
      email: "gerardo@correo.com",
      password: "Abc1234",
    },
  });

  const onSubmit = (myForm: formInputs) => {
    console.log({ myForm });
  };

  console.log(watch('email'))

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ margin: "20px" }}>Formulario</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            margin: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}

          />
          <input
            type="text"
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <button type="submit">Ingresar</button>
        </div>
      </form>

      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  );
};
