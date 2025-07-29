import {authClient} from "@/lib/auth-client";

export async function signInUsingGithub() {
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
    errorCallbackURL: "/login",
    newUserCallbackURL: "/dashboard",
  })
}
