import catego from "../static/data/catego.ts";
import { useEffect, useState } from "preact/hooks";
type localState = { corecte: string[]; gresite: string[] };

export function Chose() {
  const [state, setState] = useState<localState>({ corecte: [], gresite: [] });

  useEffect(() => {
    const localState = localStorage.getItem("state");
    if (localState) setState(JSON.parse(localState));
  }, []);
  return (
    <section class="bg-lime-500 p-11 rounded-lg my-10">
      <h1 class="text-stone-100 font-bold mb-10 text-2xl text-center">
        Chose your starter
      </h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {Object.keys(catego).map((c) => {
          const corecteCount = state.corecte.filter((q) =>
            q.includes(c)
          ).length;
          const gresiteCount =
            state.gresite.filter((q) => q.includes(c)).length;
          const totalCount = corecteCount + gresiteCount;

          return (
            <a
              class="p-5 rounded-md bg-slate-50"
              href={`/categoria/${c}/${totalCount}`}
            >
              {c.toUpperCase()}
              <progress
                className="w-full"
                title={`Categoria ${c} - Corecte: ${corecteCount} Gresite : ${gresiteCount}`}
                value={totalCount}
                max={catego[c].length}
              >
                {`Categoria ${c} - Corecte: ${corecteCount} Gresite : ${gresiteCount}`}
              </progress>
            </a>
          );
        })}

        <button
          class="p-5 rounded-md bg-slate-50"
          onClick={() => {
            localStorage.clear();
            setState({ corecte: [], gresite: [] });
          }}
        >
          RESET
        </button>
      </div>
    </section>
  );
}
