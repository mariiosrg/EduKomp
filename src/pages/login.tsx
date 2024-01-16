import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { getCsrfToken } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function SignIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Please enter your username"),
      password: Yup.string().required("Please enter your password"),
    }),

    onSubmit: async (data) => {
      if (formik.isValid) {
        toast.loading("Logging you in...", { duration: 1000 });

        const loginData = {
          username: data.username,
          password: data.password,
          callbackUrl: "/",
          redirect: false,
        };

        const login = await signIn("credentials", loginData);
        console.log(login);

        if (login?.ok) {
          toast.success("Successfully Logged in! Redirecting...");
          router.push("/");
        } else {
          toast.error("Login failed.");
        }
      }
    },
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center pt-40">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.submitForm();
          }}
          className="form"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label className="block font-bold my-5">
            Username
            <input
              className="w-full px-3 py-2 rounded-md border border-slate-400 dark:text-white dark:bg-gray-700"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="error">{formik.errors.username}</p>
            ) : null}
          </label>
          <label className="block font-bold my-5">
            Password
            <input
              className="w-full px-3 py-2 rounded-md border border-slate-400 dark:text-white dark:bg-gray-700"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="error">{formik.errors.password}</p>
            ) : null}
          </label>
          <div className="flex flex-col items-center">
            <button type="submit" className="button">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <hr />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  return {
    props: {
      providers: providers ?? [],
      csrfToken,
    },
  };
}
