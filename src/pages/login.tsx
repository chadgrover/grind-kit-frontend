import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();

  return (
    <>
      {session && session.accessToken ? (
        <>
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
          {session.accessToken && <pre>User has access token</pre>}
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
          <pre>{!session && "User is not logged in"}</pre>
        </>
      )}
    </>
  );
}
