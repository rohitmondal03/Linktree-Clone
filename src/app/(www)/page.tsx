import { Mountain } from "lucide-react";

import { getUserAuth } from "~/lib/auth/utils";


export default async function MainPage() {
  const session = await getUserAuth();

  return (
    <section>
      <Mountain />

      {session ? (
        <p>{session.user.name}</p>
      ) : (
        <pre>No Session</pre>
      )}
    </section>
  );
}