try {
  import { merge } from "./actions/merge/merge";
  (function () {
    let btn__merge = document.querySelector(".btn__merge");
    btn__merge.addEventListener("click", merge);
  })();
} catch (err) {
  alert(err);
  process.exit(-1);
}
