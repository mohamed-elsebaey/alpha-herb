"use client";

import Link from "next/link";
import Image from "next/image";

import { useFormStatus } from "react-dom";

import logo from "@/public/logo/logo.svg";

import { signUpFormAction } from "@/actions/signUpAction";
import { useActionState, useEffect, useState } from "react";

const initialStat = {
  errors: {
    email: undefined,
    password: undefined,
  },
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
      type="submit"
      disabled={pending}
    >
      {pending ? "Loading..." : "Create an Account"}
    </button>
  );
}

function SignUp() {
  const [formState, formAction] = useActionState(signUpFormAction, initialStat);
  const [formStateType, setFormStateType] = useState<any>({});

  useEffect(() => {
    setFormStateType(formState);
  }, [formState]);

  const onChangHandler = () => {
    setFormStateType({});
  };

  return (
    <section className=" bg-gradient-to-r from-primary/10 to-primary2/10 py-28 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center sm:px-12 md:px-[60px]-2">
              {/* Logo image */}
              <div className="mb-10 text-center md:mb-16">
                <Link
                  href="/"
                  className="flex flex-col items-center justify-center gap-2 text-primary font-mono"
                >
                  <Image src={logo} alt="Alpha Herb" width={35} loading="lazy"/>
                  <span className="self-center text-2xl font-bold whitespace-nowrap">
                    Alpha Herb
                  </span>
                </Link>
              </div>
              {/* *** Form Start *** */}
              <form action={formAction} onChange={onChangHandler}>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`relative w-full rounded-md border ${
                      formStateType?.errors?.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/50"
                        : "border-gray-300 focus:border-primary focus:ring-primary/50"
                    } px-4 py-2 focus:outline-none focus:ring-1`}
                  />
                  {formStateType?.errors?.email && (
                    <h1 className="text-red-500 absolute">
                      {formStateType.errors["email"]}
                    </h1>
                  )}
                </div>
                <div className="mb-8">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`relative w-full rounded-md border ${
                      formStateType?.errors?.password
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/50"
                        : "border-gray-300 focus:border-primary focus:ring-primary/50"
                    } px-4 py-2 focus:outline-none focus:ring-1`}
                  />
                  {formStateType?.errors?.password && (
                    <h1 className="text-red-500 absolute">
                      {formStateType?.errors["password"]}
                    </h1>
                  )}
                </div>
                <div className={"mb-10"}>
                  <SubmitButton />
                </div>
              </form>
              {/* *** Form Emd *** */}

              <p className="text-base">
                <span className="pr-0.5">You have an account?</span>
                <Link
                  href="/sign-in"
                  className="text-primary font-bold text-nowrap"
                >
                  Sign In
                </Link>
              </p>
              {formStateType?.message && (
                <h1 className="text-orange-600 text-center">
                  {formStateType.message}
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
