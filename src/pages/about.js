import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className="relative">
        <section
          id="section1"
          className="sticky top-0 h-screen flex items-center justify-center bg-blue-500"
        >
          <h1 className="text-white text-3xl">Section 1</h1>
        </section>

        <section
          id="section2"
          className="sticky top-0 h-screen flex items-center justify-center bg-green-500"
        >
          <h1 className="text-white text-3xl">Section 2</h1>
        </section>

        <section
          id="section3"
          className="sticky top-0 h-screen flex items-center justify-center bg-red-500"
        >
          <h1 className="text-white text-3xl">Section 3</h1>
        </section>
      </div>
      {/* <section id="main">
        <div className="h-screen pt-16">About</div>
      </section> */}
    </>
  );
}
