import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useSignup } from "../features/useSignup";
import OAuth from "../components/OAuth";

function Signup() {
  const { signup, isPending } = useSignup();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ username, email, password }) {
    signup(
      { username, email, password },
      {
        onSettled: () => reset,
      }
    );
  }

  return (
    <div className="min-h-screen mt-20">
      <div className="flex gap-4 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <span className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Shayma&apos;s
            </span>
            Blog
          </span>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your username" />
              </div>
              <TextInput
                id="username"
                type="text"
                color={errors?.username?.message && "failure"}
                helperText={
                  errors?.username?.message && (
                    <span>{errors.username.message}</span>
                  )
                }
                {...register("username", {
                  required: "This field is required",
                })}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="text"
                placeholder="name@company.com"
                color={errors?.email?.message && "failure"}
                helperText={
                  errors?.email?.message && <span>{errors.email.message}</span>
                }
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                color={errors?.password?.message && "failure"}
                helperText={
                  errors?.password?.message && (
                    <span>{errors.password.message}</span>
                  )
                }
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "Password need a minumum of 6 characters",
                  },
                })}
              />
            </div>

            <Button
              type="submit"
              gradientDuoTone="purpleToPink"
              disabled={isPending}
            >
              {isPending ? <Spinner /> : "Sign Up"}
            </Button>
            <OAuth />
          </form>
          <div className="text-sm mt-5">
            <span>Have an account?</span>{" "}
            <Link to="/sign-in" className="text-blue-500">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
