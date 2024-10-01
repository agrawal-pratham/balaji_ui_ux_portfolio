import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <section
        id="content"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl text-white">Section 1</h1>
      </section>
      <section
        id="content-2"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl text-white">Section 2</h1>
      </section>
    </>
  );
}
