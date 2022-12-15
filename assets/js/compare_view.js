import * as compare_view from "compare_view/src/browser/compare_view.ts";

function addCompareView (id, images, config) {
  compare_view.load(images, id, config);
}

window.addCompareView = addCompareView;
