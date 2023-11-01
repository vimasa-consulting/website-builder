"use client";

import React, { useEffect } from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import {
  Authenticator as AmplifyAuthenticator,
  CheckboxField,
  TextField,
  useAuthenticator as useAmplifyAuthenticator,
} from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider, Theme } from "@aws-amplify/ui-react";
import { Inter } from "next/font/google";

import styles from "@/styles/authenticator.module.css";
import awsExports from "../../../aws-exports";
import { ROUTES } from "@/services/NavigationService";
import { postSignInActions } from "@/services/AuthService";

const font = Inter({ subsets: ["latin"] });
Amplify.configure({ ...awsExports, ssr: true });

type AuthenticatorProps = {
  initialState: "signUp" | "signIn";
  children: React.ReactNode;
};

function AmplifyAuthenticatorWrapper(
  authenticatorProps: AuthenticatorProps
): React.JSX.Element {
  const router = useRouter();

  // TODO: use authStatus from context instead of following listeners

  // Register hub listener for post sign in actions
  useEffect(() => {
    const authListener = Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload?.event === "signIn") {
        // TODO: route to sign in redirection source
        postSignInActions().then(() => {
          router.replace(ROUTES.PROJECTS);
        });
      }
    });
    return () => {
      authListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle if already signed in
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        postSignInActions().then(() => {
          router.replace(ROUTES.PROJECTS);
        });
      })
      .catch(() => {
        // ignore
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const components = {
    SignUp: {
      Header() {
        return (
          <div className="flex items-center justify-center flex-col pt-6">
            <h2 className="text-3xl">Create an account</h2>
            <div className="text-base mt-4">
              Already have an account?{" "}
              <Link href={ROUTES.SIGN_IN} className={styles.actionLink}>
                Sign in
              </Link>
            </div>
          </div>
        );
      },
      Footer() {
        return <></>;
      },
      FormFields() {
        const { validationErrors } = useAmplifyAuthenticator();
        return (
          <>
            <div className="md:flex gap-4">
              <TextField
                name="given_name"
                label="First name"
                className="md:w-1/2"
              />
              <TextField
                name="family_name"
                label="Last name"
                className="md:w-1/2"
              />
            </div>
            <AmplifyAuthenticator.SignUp.FormFields />
            {/* Append & require Terms & Conditions field to sign up  */}
            <CheckboxField
              marginTop={"2rem"}
              marginBottom={"0.5rem"}
              errorMessage={validationErrors.acknowledgement as string}
              hasError={!!validationErrors.acknowledgement}
              name="acknowledgement"
              value="yes"
              label="I agree to the Terms of Use and Privacy Policy."
              required={true}
            />
          </>
        );
      },
    },
    // ConfirmSignUp: {
    //   Header() {
    //     return <>Confirm Signup Header</>;
    //   },
    //   Footer() {
    //     return <>Confirm Signup Footer</>;
    //   },
    // },
    // SetupTOTP: {
    //   Header() {
    //     return <>SetupTOTP Header</>;
    //   },
    //   Footer() {
    //     return <>SetupTOTP Footer</>;
    //   },
    // },
    SignIn: {
      Header() {
        return (
          <div className="flex items-center justify-center flex-col pt-6">
            <h2 className="text-3xl">Welcome back!</h2>
            <div className="text-base mt-4">
              Don&apos;t have an account?{" "}
              <Link href={ROUTES.SIGN_UP} className={styles.actionLink}>
                Sign up
              </Link>
            </div>
          </div>
        );
      },
      Footer() {
        const { toResetPassword } = useAmplifyAuthenticator();
        return (
          <div className="flex flex-col items-center pb-4">
            <button onClick={toResetPassword} className={styles.actionLink}>
              Forgot password?
            </button>
          </div>
        );
      },
    },
    // ConfirmSignIn: {
    //   Header() {
    //     return (
    //       <>Confirm Sign In Header</>
    //     );
    //   },
    //   Footer() {
    //     return <>Confirm Sign In Footer</>;
    //   },
    // },
    // ResetPassword: {
    //   Header() {
    //     return (
    //       <>Reset Password Header</>
    //     );
    //   },
    //   Footer() {
    //     return <>Reset Password Footer</>;
    //   },
    // },
    // ConfirmResetPassword: {
    //   Header() {
    //     return (
    //       <>
    //         Confirm Reset Password Header
    //       </>
    //     );
    //   },
    //   Footer() {
    //     return <>Confirm Reset Password Footer</>;
    //   },
    // },
  };

  const formFields = {
    signUp: {
      email: {
        placeholder: "example@company.com",
      },
    },
    signIn: {
      username: {
        placeholder: "example@company.com",
      },
    },
  };

  const services = {
    async validateCustomSignUp(formData: any, touchData: any) {
      if (!formData.acknowledgement && touchData.acknowledgement) {
        return {
          acknowledgement:
            "You must agree to the Terms of Use and Privacy Policy.",
        };
      }
    },
  };

  return (
    <AmplifyAuthenticator
      className={`${styles.authenticator} text-black`}
      initialState={authenticatorProps.initialState}
      variation="default"
      components={components}
      formFields={formFields}
      services={services}
    >
      {authenticatorProps.children}
    </AmplifyAuthenticator>
  );
}

export default function Authenticator(
  authenticatorProps: AuthenticatorProps
): React.JSX.Element {
  const theme: Theme = {
    name: "amplify-theme",
    tokens: {
      colors: {
        brand: {
          primary: {
            "10": "{colors.purple.10.value}",
            "20": "{colors.purple.20.value}",
            "40": "{colors.purple.40.value}",
            "60": "{colors.purple.60.value}",
            "80": "{colors.purple.80.value}",
            "90": "{colors.purple.90.value}",
            "100": "{colors.purple.100.value}",
          },
        },
      },
      fonts: {
        default: {
          variable: { value: font.style.fontFamily },
        },
      },
    },
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AmplifyAuthenticator.Provider>
          <AmplifyAuthenticatorWrapper
            initialState={authenticatorProps.initialState}
          >
            {authenticatorProps.children}
          </AmplifyAuthenticatorWrapper>
        </AmplifyAuthenticator.Provider>
      </ThemeProvider>
    </div>
  );
}
