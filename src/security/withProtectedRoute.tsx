// https://www.dhiwise.com/post/implementing-next-js-protected-routes-a-step-by-step-guid

import { useRouter } from "next/router";
import React, { ReactElement, ReactNode, useEffect } from "react";
import { useAuth } from "./auth-provider";

const withProtectedRoute = (WrappedComponent: JSX.ElementType) => {
  return (props) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      // If the user is not authenticated, redirect to the login page
      if (!user) {
        router.push("/login");
      }
    }, [user, router]);

    // If the user is authenticated, render the WrappedComponent
    // Otherwise, render null while the redirection is in progress
    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withProtectedRoute;
