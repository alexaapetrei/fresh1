import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-orange-500">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/bear2023.svg"
            width="128"
            height="128"
            alt="Dang Bear"
          />
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4">
            Not here bro
          </p>
          <a href="/" class="underline">Go home</a>
        </div>
      </div>
    </>
  );
}
