"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo/logo.svg";

import { useFormStatus } from "react-dom";
import { signIn } from "next-auth/react";

import { signInFormAction } from "@/actions/signInAction";
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
      {pending ? "Loading..." : "Sign In"}
    </button>
  );
}

function SignIn() {
  const [formState, formAction] = useActionState(signInFormAction, initialStat);
  const [formStateType, setFormStateType] = useState<any>({});
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  useEffect(() => {
    setFormStateType(formState);
  }, [formState]);

  const onChangHandler = () => {
    setFormStateType({});
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsGoogleLoading(true);
      await signIn('google');
    } catch (error) {
      console.error('Google sign in error:', error);
    } finally {
      setIsGoogleLoading(false);
    }
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
                  <Image
                    src={logo}
                    alt="Alpha Herb"
                    width={35}
                    loading="lazy"
                  />
                  <span className="self-center text-2xl font-bold whitespace-nowrap">
                    Alpha Herb
                  </span>
                </Link>
              </div>

              {/* Google Sign In Button */}
              <div className="mb-6">
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isGoogleLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGoogleLoading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-primary" />
                  ) : (
                    <Image
                      src="/icons/google.svg"
                      alt="Google"
                      width={20}
                      height={20}
                    />
                  )}
                  {isGoogleLoading ? 'Loading...' : 'Continue with Google'}
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or</span>
                </div>
              </div>

              <form action={formAction} onChange={onChangHandler}>
                <InputField
                  type="email"
                  name="email"
                  placeholder="Email"
                  error={formStateType?.errors?.email}
                />

                <InputField
                  type="password"
                  name="password"
                  placeholder="Password"
                  error={formStateType?.errors?.password}
                />

                <div className="mb-10">
                  <SubmitButton />
                </div>

                <p className="text-base">
                  <span className="pr-0.5">Don&apos;t have an account?</span>
                  <Link
                    href="/sign-up"
                    className="text-primary font-bold text-nowrap"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
              {/* <Link
                href="#"
                className="mb-2 inline-block text-base text-secondary hover:text-primary"
              >
                Forget Password?
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;

function InputField({
  type,
  name,
  placeholder,
  error,
}: {
  type: string;
  name: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <div className="relative mb-6">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded-lg border bg-transparent px-5 py-3 text-base outline-none transition
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
          }
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 absolute left-0">{error}</p>
      )}
    </div>
  );
}
