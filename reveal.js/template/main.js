
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/solarized.css";
import "highlight.js/styles/vs2015.css";

import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight";
import Markdown from "reveal.js/plugin/markdown/markdown";

Reveal.initialize({
  hash: true,
  plugins: [ Markdown, Highlight ]
});
