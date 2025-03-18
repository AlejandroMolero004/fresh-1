// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $episodio from "./routes/episodio.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $personaje_id_ from "./routes/personaje/[id].tsx";
import * as $saludar from "./routes/saludar.tsx";
import * as $saludarDB from "./routes/saludarDB.tsx";
import * as $saludarRM from "./routes/saludarRM.tsx";
import * as $saludarSW from "./routes/saludarSW.tsx";
import * as $test_layout from "./routes/test/_layout.tsx";
import * as $test_page1 from "./routes/test/page1.tsx";
import * as $test_page4 from "./routes/test/page4.tsx";
import * as $test_subtest_layout from "./routes/test/subtest/_layout.tsx";
import * as $test_subtest_page2 from "./routes/test/subtest/page2.tsx";
import * as $test_subtest_page3 from "./routes/test/subtest/page3.tsx";
import * as $test_subtest_subsubtest_layout from "./routes/test/subtest/subsubtest/_layout.tsx";
import * as $test_subtest_subsubtest_page5 from "./routes/test/subtest/subsubtest/page5.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $form from "./islands/form.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/episodio.tsx": $episodio,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/personaje/[id].tsx": $personaje_id_,
    "./routes/saludar.tsx": $saludar,
    "./routes/saludarDB.tsx": $saludarDB,
    "./routes/saludarRM.tsx": $saludarRM,
    "./routes/saludarSW.tsx": $saludarSW,
    "./routes/test/_layout.tsx": $test_layout,
    "./routes/test/page1.tsx": $test_page1,
    "./routes/test/page4.tsx": $test_page4,
    "./routes/test/subtest/_layout.tsx": $test_subtest_layout,
    "./routes/test/subtest/page2.tsx": $test_subtest_page2,
    "./routes/test/subtest/page3.tsx": $test_subtest_page3,
    "./routes/test/subtest/subsubtest/_layout.tsx":
      $test_subtest_subsubtest_layout,
    "./routes/test/subtest/subsubtest/page5.tsx":
      $test_subtest_subsubtest_page5,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/form.tsx": $form,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
