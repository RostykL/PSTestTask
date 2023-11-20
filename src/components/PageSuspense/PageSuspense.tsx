import React from "react";
import { Await } from "react-router-dom";
import { TrackedPromise } from "@remix-run/router";
import { AwaitResolveRenderFunction } from "react-router/dist/lib/components";

interface PageSuspenseProps {
  resolve: TrackedPromise | any;
  children: React.ReactNode | AwaitResolveRenderFunction;
}

const PageSuspense = ({ resolve, children }: PageSuspenseProps) => {
  return (
    <React.Suspense fallback={<p>Loading user information...</p>}>
      <Await
        resolve={resolve}
        errorElement={<p>Error loading user information!</p>}
      >
        {children}
      </Await>
    </React.Suspense>
  );
};

export default PageSuspense;
