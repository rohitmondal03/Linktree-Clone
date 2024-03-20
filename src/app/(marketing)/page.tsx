import classNames from "classnames";
import Logo from "~/components/logo";


export default async function MainPage() {
  return (
    <section className={classNames({
      "py-20 px-28": true,
      "text-center": true,
      "space-y-20": true,
      "h-[200vh]": true,
    })}>
      <h1 className={classNames({
        "text-3xl font-bold text-white dark:text-black": true,
        "w-fit": true,
        "py-2 px-10": true,
        "mx-auto": true,
        "bg-black dark:bg-white": true,
        "rounded-full": true,
      })}>
        Kloutly
      </h1>


      <p className={classNames({
        "text-6xl font-bold text-pink-500 dark:text-pink-500": true,
        "space-y-3": true,
      })}>
        Don't blend in, {" "}
        <span className="text-amber-400 underline underline-offset-4 decoration-wavy decoration-amber-400 decoration-2">Kloutly</span> {" "}
        out!
      </p>


      <div className={classNames({
        "space-y-3": true,
        "text-4xl font-bold": true,
        "w-[70vw]": true,
        "mx-auto": true,
      })}>
        <p className={classNames({})}>
          Your online presence
        </p>
        <p>
          One powerful link, endless possibilities
        </p>
      </div>
    </section>
  );
}