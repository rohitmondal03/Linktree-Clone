import classNames from "classnames";

import { getUserAuth } from "~/lib/auth/utils";
import { siteConfig } from "~/config/site";


export default async function MainPage() {
  const session = await getUserAuth();


  return (
    <section className={classNames({
      "py-20 px-28": true,
      "text-center": true,
      "space-y-10": true,
    })}>
      <div className="space-y-3">
        <h1 className={classNames({
          "text-5xl font-bold": true,
        })}>
          {siteConfig.title}
        </h1>

        <p className={classNames({
          "text-muted-foreground text-xl": true,
        })}>
          {siteConfig.description}
        </p>
      </div>


      <p className={classNames({
        "text-2xl font-bold": true,
        "w-[80%]": true,
        "mx-auto": true,
      })}>
        LinkStack is a platform where users can simply  share their links with others and discover new content. It&apos;s built on top of amazing open-source frameworks and libraries, Next.js for frontend, Prisma ORM for quering database, NextAuth.js for authetication and TailwindCSS for styling the contents. Apart from these, it also uses Stripe for handling payments and some other amazing npm packages.
      </p>
    </section>
  );
}