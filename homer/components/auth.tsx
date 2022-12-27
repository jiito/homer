import { useAuth } from "../utils/hooks/auth";
import { Login } from "./login";
import { Logout } from "./logout";

export const Auth = () => {
  const { signIn, session, signout } = useAuth();
  return (
    <>{!session ? <Login signIn={signIn} /> : <Logout signOut={signout} />}</>
  );
};
