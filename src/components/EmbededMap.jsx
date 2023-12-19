import { Box } from "@mui/material";
import { useEffect } from "react";

const EmbededMap = () => {
  useEffect(() => {
    // this is the fatmapscript
    (() => {
      let t = [
        "imagery",
        "lat",
        "lon",
        "animation",
        "radius",
        "publisher",
        "units",
        "screen",
        "target",
      ];
      document.querySelectorAll(".fatmap-embed-placeholder").forEach((e) => {
        if (!(e instanceof HTMLElement)) return;
        let { type: a, id: i } = e.dataset,
          r = e.getAttribute("height"),
          l = e.getAttribute("width"),
          s = document.createElement("iframe");
        s.setAttribute("frameborder", "0"),
          s.setAttribute("loading", "lazy"),
          s.setAttribute("allow", "clipboard-write"),
          s.setAttribute("title", "FATMAP 3D Map Embed"), // default width to 100% of container
          (s.style.width = "100%"), // default to 1 / 1 aspect ratio - this will only apply if height is not otherwise set
          (s.style.aspectRatio = "1 / 1"), // min height of 480px; lifted from Figma designs - minimum vertical height to support designs
          (s.style.minHeight = "480px"), // min width of 340px; required to allow the map controls to display on mobile
          (s.style.minWidth = "340px"),
          r && (s.style.height = r),
          l && (s.style.maxWidth = l);
        let d = new URL(i ? `${a}/${i}` : `${a}`, "https://embeds.fatmap.com"); // loop over possible data attributes and append
        t.forEach((t) => {
          let a = e.dataset[t];
          a && d.searchParams.append(t, a);
        }),
          s.setAttribute("src", d.toString()),
          e.replaceWith(s);
      });
    })();
  });
  return (
    <Box sx={{width:"100%"}} className="mapContainer">
      <div
        className="fatmap-embed-placeholder"
        data-type="adventure"
        height="480"
        data-id="3543093"
        data-units="metric"
      ></div>
    </Box>
  );
};

export default EmbededMap;
