/**
 * Subject catalogue. Each entry maps to one of the JSON question banks in
 * /public/JSON. `color` / `tint` drive the colourful category cards on the
 * dashboard, echoing the five accent colours from the reference design
 * (purple, blue, pink, orange, green) cycling for any additional subjects.
 */
const PALETTE = [
  { color: "#626BFF", tint: "rgba(98,107,255,0.18)" },
  { color: "#626BFF", tint: "rgba(98,107,255,0.18)" },
  { color: "#626BFF", tint: "rgba(98,107,255,0.18)" },
  { color: "#626BFF", tint: "rgba(98,107,255,0.18)" },
  { color: "#626BFF", tint: "rgba(98,107,255,0.18)" },
  { color: "#626BFF", tint: "rgba(98,107,255,0.18)" },
  { color: "#626BFF", tint: "rgba(98,107,255,0.18)" },
  { color: "#626BFF", tint: "rgba(98,107,255,0.18)" },
];

const RAW_SUBJECTS = [
  {
    id: 1,
    subject: "HTML",
    tagline: "Structure every page with semantic, accessible markup.",
    jsonPath: "/JSON/Html.json",
  },
  {
    id: 2,
    subject: "CSS",
    tagline: "Style, layout, and bring motion to the page.",
    jsonPath: "/JSON/CSS.json",
  },
  {
    id: 3,
    subject: "JavaScript",
    tagline: "Make the page interactive, end to end.",
    jsonPath: "/JSON/JavaScript.json",
  },
  {
    id: 4,
    subject: "Java",
    tagline: "Object-oriented fundamentals you'll use everywhere.",
    jsonPath: "/JSON/Java.json",
  },
  {
    id: 5,
    subject: "Python",
    tagline: "Readable syntax, powerful results.",
    jsonPath: "/JSON/Python.json",
  },
  {
    id: 6,
    subject: "PHP",
    tagline: "Server-side scripting for the modern web.",
    jsonPath: "/JSON/PHP.json",
  },
  {
    id: 7,
    subject: "SQL",
    tagline: "Query and shape relational data with confidence.",
    jsonPath: "/JSON/SQL.json",
  },
  {
    id: 8,
    subject: "MongoDB",
    tagline: "Document-oriented databases at scale.",
    jsonPath: "/JSON/MongoDB.json",
  },
];

export const SUBJECTS = RAW_SUBJECTS.map((item, index) => ({
  ...item,
  ...PALETTE[index % PALETTE.length],
}));
