import React from "react";
import Head from "next/head";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const Layout: React.FC<Props> = ({ children, title = "" }) => {
  //const { registered } = useContext(GeneralContext);

  // useOutsideClick(
  //   burgerMenuRef,
  //   useCallback(() => setIsDrawerOpen(false), []),
  // );

  return (
    <>
      <Head>
        <title>Front-Door - {title}</title>
        <meta
          content="Front-Door WEB 3 Recruiting Platform"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="bg-primary dark:bg-slate-800 min-h-screen">
        <Header />
        <div className="container w-5/6 mx-auto">{children}</div>
      </main>
    </>
  );
};
