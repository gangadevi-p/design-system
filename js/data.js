/* ============================================================
   Design System — Content
   Everything the documentation shows, in one place.
   ============================================================ */
(function (global) {
  "use strict";

  /* ================= ICONS ================= */
  function icon(paths, filled) {
    return '<svg viewBox="0 0 24 24" fill="' + (filled ? "currentColor" : "none") + '" stroke="' + (filled ? "none" : "currentColor") +
      '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
  }
  var ICONS = {
    edit: icon('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>'),
    arrowUpRight: icon('<path d="M7 17 17 7M8 7h9v9"/>'),
    bookmark: icon('<path d="M7 4h10v16l-5-4-5 4z"/>'),
    plus: icon('<path d="M12 5v14M5 12h14"/>'),
    arrowRight: icon('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    chevronDown: icon('<path d="M6 9l6 6 6-6"/>'),
    chevronRight: icon('<path d="M9 6l6 6-6 6"/>'),
    download: icon('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>'),
    trash: icon('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'),
    heart: icon('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>'),
    heartFilled: icon('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>', true),
    check: icon('<path d="M5 12l5 5 9-10"/>'),
    x: icon('<path d="M6 6l12 12M18 6L6 18"/>'),
    search: icon('<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>'),
    info: icon('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
    checkCircle: icon('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/>'),
    alertTriangle: icon('<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>'),
    alertCircle: icon('<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>'),
    replay: icon('<path d="M4 12a8 8 0 1 0 2.3-5.6"/><path d="M4 4v4h4"/>'),
    bell: icon('<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>'),
    copy: icon('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/>'),
    sun: icon('<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>'),
    moon: icon('<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>'),
    monitor: icon('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'),
    layers: icon('<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 8l9 5 9-5"/>'),
    grid: icon('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>')
  };

  /* ================= SECTIONS ================= */
  var SECTIONS = [
    { id: "components", group: "Sections", name: "Components",
      intro: "Basic styles and states. All in one place." },
    { id: "animations", group: "Sections", name: "Animations",
      intro: "Auto-playing UI motion patterns." },
    { id: "buttons", group: "Sections", name: "Buttons",
      intro: "Variants, states and sizes." },
    { id: "colors", group: "Sections", name: "Colors",
      intro: "Black, white and grey only: a mono accent, a neutral scale, status tones and contrast." },
    { id: "typography", group: "Sections", name: "Typography",
      intro: "Type scale, weights and responsive sizes." },
    { id: "variables", group: "Sections", name: "Variables",
      intro: "Reusable tokens for light and dark, including motion." },
    { id: "principles", group: "Sections", name: "Principles",
      intro: "UX, UI and design principles." },
    { id: "saved", group: "Sections", name: "Saved",
      intro: "Everything you saved from the sidebar." }
  ];

  /* ================= TYPOGRAPHY ================= */
  var TYPEFACE = {
    name: "Poppins",
    weights: [
      { value: 400, name: "Regular" },
      { value: 500, name: "Medium" },
      { value: 600, name: "SemiBold" },
      { value: 700, name: "Bold" }
    ]
  };

  // web / mobile: [size, line height] in px. tracking in %.
  var TYPE_STYLES = [
    { name: "Display", weight: 700, tracking: -1, web: [48, 56], mobile: [34, 40],
      use: "Hero and marketing headlines. One per screen.", sample: "Design that moves" },
    { name: "Heading 1", weight: 700, tracking: -0.5, web: [36, 44], mobile: [28, 34],
      use: "Page titles.", sample: "Design with clarity" },
    { name: "Heading 2", weight: 600, tracking: -0.5, web: [28, 36], mobile: [24, 30],
      use: "Section titles.", sample: "Every component has a role" },
    { name: "Heading 3", weight: 600, tracking: 0, web: [22, 30], mobile: [20, 26],
      use: "Card and dialog titles.", sample: "Component variants" },
    { name: "Title", weight: 600, tracking: 0, web: [18, 26], mobile: [17, 24],
      use: "List headers, nav bar titles, emphasised lines.", sample: "Project settings" },
    { name: "Body Large", weight: 400, tracking: 0, web: [16, 26], mobile: [17, 26],
      use: "Intro paragraphs and long reading.", sample: "A clear system helps every screen feel connected." },
    { name: "Body", weight: 400, tracking: 0, web: [14, 22], mobile: [16, 24],
      use: "Default interface text and input values.", sample: "Use named styles and component variants consistently." },
    { name: "Label", weight: 600, tracking: 0, web: [13, 18], mobile: [15, 20],
      use: "Buttons, tabs, form labels, menu items.", sample: "Save changes" },
    { name: "Caption", weight: 500, tracking: 0, web: [12, 16], mobile: [13, 18],
      use: "Helper text, metadata, timestamps.", sample: "Edited 2 minutes ago" },
    { name: "Overline", weight: 600, tracking: 8, upper: true, web: [11, 16], mobile: [12, 16],
      use: "Eyebrows above headings, small section labels.", sample: "Foundations" }
  ];

  var PLATFORMS = {
    web: {
      name: "Web",
      frame: "design.system",
      notes: [
        "Body is 14px — dense, pointer-driven screens read at arm's length.",
        "Headlines run large (Display 48px) because wide screens have room for them.",
        "Use these styles on any screen 640px wide and up."
      ]
    },
    mobile: {
      name: "Mobile",
      frame: "9:41",
      notes: [
        "Body is 16px. Text fields smaller than 16px make iPhones zoom the whole page.",
        "12px is the smallest text on mobile — nothing smaller stays readable in hand.",
        "Headlines are up to 29% smaller so a title fits in two lines on a 360px screen.",
        "Use these styles below 640px wide."
      ]
    }
  };

  /* ================= COLOURS ================= */
  var ACCENT = {
    name: "Mono",
    light: { step: 900, name: "Mono 900", hex: "#171717" },
    dark: { step: 100, name: "Mono 100", hex: "#F3F3F3" }
  };

  var ACCENT_SCALE = [
    { step: 50, name: "Mono 50", hex: "#FAFAFA" }, { step: 100, name: "Mono 100", hex: "#F3F3F3" }, { step: 200, name: "Mono 200", hex: "#E5E5E5" },
    { step: 300, name: "Mono 300", hex: "#D1D1D1" }, { step: 400, name: "Mono 400", hex: "#A3A3A3" }, { step: 500, name: "Mono 500", hex: "#737373" },
    { step: 600, name: "Mono 600", hex: "#525252" }, { step: 700, name: "Mono 700", hex: "#404040" }, { step: 800, name: "Mono 800", hex: "#262626" },
    { step: 900, name: "Mono 900", hex: "#171717" }, { step: 950, name: "Mono 950", hex: "#0A0A0A" }
  ];

  var NEUTRAL_SCALE = [
    { step: 0, name: "White", hex: "#FFFFFF" }, { step: 50, name: "Cloud", hex: "#FAFAFA" }, { step: 100, name: "Pale gray", hex: "#F3F3F3" },
    { step: 200, name: "Light gray", hex: "#E5E5E5" }, { step: 300, name: "Soft gray", hex: "#D1D1D1" }, { step: 400, name: "Mid gray", hex: "#A3A3A3" },
    { step: 500, name: "Gray", hex: "#737373" }, { step: 600, name: "Dark gray", hex: "#525252" }, { step: 700, name: "Charcoal", hex: "#404040" },
    { step: 800, name: "Deep charcoal", hex: "#262626" }, { step: 900, name: "Ink", hex: "#171717" }, { step: 950, name: "Near black", hex: "#0A0A0A" },
    { step: 1000, name: "Black", hex: "#000000" }
  ];

  var ACCENT_USES = [
    { name: "Fill", variable: "accent/default", demo: "fill", note: "Primary buttons, checked controls, progress." },
    { name: "Hover", variable: "accent/hover", demo: "hover", note: "One step darker in light mode, one step lighter in dark." },
    { name: "Pressed", variable: "accent/pressed", demo: "pressed", note: "Two steps from default, only while held." },
    { name: "Tint", variable: "accent/tint", demo: "tint", note: "Selected chips, rows and toggles. A background, never text." },
    { name: "Text & links", variable: "accent/text", demo: "text", note: "A darker step than the fill so text passes contrast." },
    { name: "Focus ring", variable: "focus/ring", demo: "focus", note: "2px outline, 2px away. Keyboard focus only." },
    { name: "On accent", variable: "text/on-accent", demo: "on", note: "Text and icons placed on an accent fill." }
  ];

  var STATUS = [
    { name: "Success", light: "#404040", dark: "#D1D1D1", badge: "success", icon: "checkCircle",
      use: "Completed actions, valid input, positive change. Told apart by its icon and label, since the palette has no hue." },
    { name: "Warning", light: "#737373", dark: "#A3A3A3", badge: "warning", icon: "alertTriangle",
      use: "Needs attention soon. Nothing is broken yet." },
    { name: "Danger", light: "#525252", dark: "#A3A3A3", badge: "danger", icon: "alertCircle",
      use: "Errors, failed states and destructive actions." }
  ];

  // [label, css colour] per mode
  var COLOR_VARIABLES = [
    { name: "bg/page", light: ["Pale gray", "#F3F3F3"], dark: ["Near black", "#0A0A0A"], use: "Page background" },
    { name: "bg/surface", light: ["White", "#FFFFFF"], dark: ["Ink", "#171717"], use: "Cards, inputs, menus" },
    { name: "bg/sunken", light: ["Pale gray", "#F3F3F3"], dark: ["Black", "#000000"], use: "Wells and tracks inside a surface" },
    { name: "bg/hover", light: ["Light gray", "#E5E5E5"], dark: ["Deep charcoal", "#262626"], use: "Hover fill on neutral controls" },
    { name: "bg/pressed", light: ["Soft gray", "#D1D1D1"], dark: ["Charcoal", "#404040"], use: "Pressed fill on neutral controls" },
    { name: "text/primary", light: ["Ink", "#171717"], dark: ["Pale gray", "#F3F3F3"], use: "Headings and body" },
    { name: "text/secondary", light: ["Dark gray", "#525252"], dark: ["Soft gray", "#D1D1D1"], use: "Supporting text" },
    { name: "text/tertiary", light: ["Gray", "#737373"], dark: ["Mid gray", "#A3A3A3"], use: "Captions and placeholders" },
    { name: "text/on-accent", light: ["White", "#FFFFFF"], dark: ["Black", "#000000"], use: "Text on accent fills" },
    { name: "border/default", light: ["Black · 12% opacity", "rgba(0,0,0,.12)"], dark: ["White · 10% opacity", "rgba(255,255,255,.10)"], use: "Card edges and dividers" },
    { name: "border/strong", light: ["Black · 24% opacity", "rgba(0,0,0,.24)"], dark: ["White · 22% opacity", "rgba(255,255,255,.22)"], use: "Input and button outlines" },
    { name: "accent/default", light: ["Mono 900", "#171717"], dark: ["Mono 100", "#F3F3F3"], use: "The primary action" },
    { name: "accent/hover", light: ["Mono 800", "#262626"], dark: ["White", "#FFFFFF"], use: "Action while hovered" },
    { name: "accent/pressed", light: ["Mono 950", "#0A0A0A"], dark: ["Mono 300", "#D1D1D1"], use: "Action while pressed" },
    { name: "accent/tint", light: ["Mono 200", "#E5E5E5"], dark: ["White · 14% opacity", "rgba(255,255,255,.14)"], use: "Selected backgrounds" },
    { name: "accent/tint-strong", light: ["Mono 300", "#D1D1D1"], dark: ["White · 24% opacity", "rgba(255,255,255,.24)"], use: "Pressed selected backgrounds" },
    { name: "accent/text", light: ["Mono 900", "#171717"], dark: ["Mono 100", "#F3F3F3"], use: "Links and action labels" },
    { name: "focus/ring", light: ["Mono 900", "#171717"], dark: ["Mono 300", "#D1D1D1"], use: "Keyboard focus outline" },
    { name: "status/success", light: ["Charcoal", "#404040"], dark: ["Soft gray", "#D1D1D1"], use: "Success text, icons and fills — paired with a check icon" },
    { name: "status/warning", light: ["Gray", "#737373"], dark: ["Mid gray", "#A3A3A3"], use: "Warning text, icons and fills — paired with a warning icon" },
    { name: "status/danger", light: ["Dark gray", "#525252"], dark: ["Mid gray", "#A3A3A3"], use: "Error text, icons and danger buttons" },
    { name: "status/danger-hover", light: ["Charcoal", "#404040"], dark: ["Soft gray", "#D1D1D1"], use: "Danger button while hovered" },
    { name: "state/disabled-bg", light: ["Light gray", "#E5E5E5"], dark: ["Deep charcoal", "#262626"], use: "Disabled fills" },
    { name: "state/disabled-text", light: ["Mid gray", "#A3A3A3"], dark: ["Dark gray", "#525252"], use: "Disabled text and icons" },
    { name: "inverse/surface", light: ["Ink", "#171717"], dark: ["Pale gray", "#F3F3F3"], use: "Toasts and tooltips" },
    { name: "inverse/text", light: ["Pale gray", "#F3F3F3"], dark: ["Ink", "#171717"], use: "Text on inverse surfaces" },
    { name: "overlay/scrim", light: ["Black · 48% opacity", "rgba(0,0,0,.48)"], dark: ["Black · 60% opacity", "rgba(0,0,0,.60)"], use: "Behind dialogs and sheets" }
  ];

  // Checked against the surface they actually sit on.
  var CONTRAST_PAIRS = [
    { fg: "text/primary", bg: "bg/page", use: "Body text on the page" },
    { fg: "text/secondary", bg: "bg/surface", use: "Supporting text on cards" },
    { fg: "text/tertiary", bg: "bg/surface", use: "Captions on cards" },
    { fg: "text/on-accent", bg: "accent/default", use: "Primary button label" },
    { fg: "accent/text", bg: "bg/surface", use: "Links on cards" },
    { fg: "accent/text", bg: "accent/tint", use: "Selected chip label", over: "bg/surface" },
    { fg: "status/danger", bg: "bg/surface", use: "Error message" },
    { fg: "inverse/text", bg: "inverse/surface", use: "Toast text" }
  ];

  /* ================= VARIABLES ================= */
  var VARIABLE_COLLECTIONS = [
    { id: "spacing", name: "Spacing", unit: "px", desc: "A 4px base. Most layouts only need 8, 16, 24 and 32.", rows: [
      ["space/1", 4, "Icon to label, tight inline gaps"],
      ["space/2", 8, "Gaps inside controls and between related items"],
      ["space/3", 12, "Padding in compact components"],
      ["space/4", 16, "Default component padding, mobile margins"],
      ["space/5", 20, "Card padding"],
      ["space/6", 24, "Gaps between cards, tablet margins"],
      ["space/8", 32, "Section spacing within a page, desktop margins"],
      ["space/10", 40, "Between page sections"],
      ["space/12", 48, "Large section breaks"],
      ["space/16", 64, "Hero and page-level spacing"]
    ] },
    { id: "radius", name: "Radius", unit: "px", desc: "Corners grow with the size of the thing they round.", rows: [
      ["radius/none", 0, "Tables and full-bleed media"],
      ["radius/xs", 4, "Checkboxes and small tags"],
      ["radius/sm", 6, "Small buttons and tooltips"],
      ["radius/md", 8, "Buttons, inputs and menus"],
      ["radius/lg", 12, "Cards and large buttons"],
      ["radius/xl", 16, "Dialogs and popovers"],
      ["radius/2xl", 24, "Bottom sheets and hero media"],
      ["radius/full", 999, "Pills, avatars and switches"]
    ] },
    { id: "sizing", name: "Sizing", unit: "px", desc: "Control heights sit on an 8px rhythm. Icons come in four sizes.", rows: [
      ["size/control-sm", 32, "Small buttons, compact inputs, chips"],
      ["size/control-md", 40, "Default buttons, inputs and tabs"],
      ["size/control-lg", 48, "Large buttons — the default on touch screens"],
      ["size/touch-min", 44, "Smallest tap area on mobile, even when the visual is smaller"],
      ["size/icon-xs", 14, "Icons in small buttons and chips"],
      ["size/icon-sm", 16, "Icons in default buttons and inputs"],
      ["size/icon-md", 20, "Icons in large buttons, alerts and lists"],
      ["size/icon-lg", 24, "Navigation and standalone icons"]
    ] },
    { id: "border", name: "Border", unit: "px", desc: "One weight for edges, a heavier one for focus and selection.", rows: [
      ["border/width", 1, "All outlines and dividers"],
      ["border/width-strong", 2, "Focus rings and the selected-tab indicator"],
      ["border/focus-offset", 2, "Gap between an element and its focus ring"]
    ] },
    { id: "elevation", name: "Elevation", desc: "Shadows get larger and softer as a surface rises.", rows: [
      ["elevation/0", "None", "Flat — part of the page", 0],
      ["elevation/1", "Y 1 · Blur 2 · 8%", "Cards at rest", 1],
      ["elevation/2", "Y 2 · Blur 6 · 8%", "Raised cards and sticky headers", 2],
      ["elevation/3", "Y 8 · Blur 20 · 10%", "Menus, popovers and toasts", 3],
      ["elevation/4", "Y 20 · Blur 48 · 16%", "Dialogs and sheets", 4]
    ] },
    { id: "opacity", name: "Opacity", unit: "%", desc: "For overlays and disabled imagery. Text never uses opacity — use a colour variable instead.", rows: [
      ["opacity/hover", 8, "Dark overlay on images and coloured fills when hovered"],
      ["opacity/pressed", 12, "Dark overlay while pressed"],
      ["opacity/disabled", 40, "Icons and images inside disabled controls"],
      ["opacity/scrim", 48, "Backdrop behind dialogs in light mode"]
    ] },
    { id: "duration", name: "Duration", unit: "ms", desc: "Smaller things move faster. Nothing in the interface takes longer than 600ms.", rows: [
      ["duration/instant", 100, "Colour and opacity changes on hover"],
      ["duration/fast", 150, "Tooltips, checkboxes, switches"],
      ["duration/base", 250, "Menus, tabs, cards — most transitions"],
      ["duration/slow", 400, "Dialogs, drawers and sheets"],
      ["duration/slower", 600, "Full-screen and page transitions"]
    ] },
    { id: "easing", name: "Easing", desc: "Five curves cover every transition. Values paste straight into a custom bezier field.", easing: true, rows: [
      ["easing/standard", [0.2, 0, 0, 1], "Elements moving within the screen"],
      ["easing/enter", [0.05, 0.7, 0.1, 1], "Elements arriving — decelerate into place"],
      ["easing/exit", [0.3, 0, 0.8, 0.15], "Elements leaving — accelerate away"],
      ["easing/spring", [0.34, 1.56, 0.64, 1], "Playful confirmations; overshoots then settles"],
      ["easing/linear", [0, 0, 1, 1], "Spinners, progress bars and loops only"]
    ] },
    { id: "type", name: "Typography", desc: "Styles live on the Typography page; these are the values they are built from.", rows: [
      ["font/family", "Poppins", "Every style on every platform", 400],
      ["font/weight/regular", "400", "Body Large, Body", 400],
      ["font/weight/medium", "500", "Caption", 500],
      ["font/weight/semibold", "600", "Heading 2, Heading 3, Title, Label, Overline", 600],
      ["font/weight/bold", "700", "Display, Heading 1", 700]
    ] },
    { id: "breakpoints", name: "Breakpoints & grid", desc: "Layouts switch at these widths. Mobile type styles apply below 640px.", grid: true, rows: [
      ["breakpoint/mobile", "0 – 639", "4 columns · 16 margin · 16 gutter", 4],
      ["breakpoint/tablet", "640 – 1023", "8 columns · 24 margin · 24 gutter", 8],
      ["breakpoint/desktop", "1024 – 1439", "12 columns · 32 margin · 24 gutter", 12],
      ["breakpoint/wide", "1440 +", "12 columns · 1280 max width · 24 gutter", 12]
    ] }
  ];

  /* ================= BUTTONS ================= */
  var BUTTON_VARIANTS = [
    { id: "primary", name: "Primary", label: "Save changes",
      use: "The main action on a screen — Save, Continue, Create.", avoid: "More than one on the same surface." },
    { id: "secondary", name: "Secondary", label: "Cancel",
      use: "Actions beside a primary — Cancel, Back, Edit.", avoid: "Using it for the main action to look calmer." },
    { id: "outline", name: "Outline", label: "Preview",
      use: "An alternative that still needs emphasis — Preview, Share.", avoid: "Next to a primary of equal importance." },
    { id: "ghost", name: "Ghost", label: "Skip",
      use: "Low-priority actions in toolbars, card footers and lists.", avoid: "On its own with nothing around it — it gets lost." },
    { id: "danger", name: "Danger", label: "Delete project",
      use: "Destructive actions — Delete, Remove, Revoke. Confirm first.", avoid: "Warnings that aren't destructive." },
    { id: "link", name: "Link", label: "Learn more",
      use: "Navigation inside text or a row — Learn more, View all.", avoid: "Actions that change or save data." }
  ];

  var BUTTON_STATES = [
    { id: "default", name: "Default", cls: "" },
    { id: "hover", name: "Hover", cls: "is-hover" },
    { id: "pressed", name: "Pressed", cls: "is-pressed" },
    { id: "focus", name: "Focused", cls: "is-focus" },
    { id: "selected", name: "Selected", cls: "is-selected" },
    { id: "disabled", name: "Disabled", disabled: true },
    { id: "loading", name: "Loading", cls: "is-loading" }
  ];

  var STATE_RULES = [
    { name: "Hover", timing: "Variant",
      rule: "Fill moves one step — accent/hover on accent buttons, bg/hover on neutral ones." },
    { name: "Pressed", timing: "Variant",
      rule: "Fill moves two steps — accent/pressed or bg/pressed — and the button drops 1px while held." },
    { name: "Focused", timing: "Variant",
      rule: "A 2px focus/ring outline, 2px outside the button. Keyboard only, never on click." },
    { name: "Selected", timing: "Variant",
      rule: "For toggles and groups. Neutral buttons take accent/tint with an accent border and label; filled buttons stay pressed; outline fills in." },
    { name: "Disabled", timing: "Static variant",
      rule: "state/disabled-bg fill and state/disabled-text label, no border, no hover. Say why nearby when you can." },
    { name: "Loading", timing: "Static variant",
      rule: "A progress indicator replaces the label and icon. The button keeps its width and ignores taps." }
  ];

  var BUTTON_SIZES = [
    { id: "sm", name: "Small", cls: "btn--sm", height: 32, padding: 12, radius: 6, label: "Caption · SemiBold", icon: 14, gap: 6,
      use: "Tables, toolbars and dense cards." },
    { id: "md", name: "Medium", cls: "", height: 40, padding: 16, radius: 8, label: "Label · SemiBold", icon: 16, gap: 8,
      use: "The default for forms, dialogs and pages." },
    { id: "lg", name: "Large", cls: "btn--lg", height: 48, padding: 20, radius: 12, label: "Body Large · SemiBold", icon: 20, gap: 10,
      use: "Hero actions, and the default size on touch screens." }
  ];

  var ANATOMY = [
    { part: "Container", desc: "Fill, 1px border and radius. Height comes from the size, never from the label." },
    { part: "Leading icon", desc: "Optional. Names what the action creates or affects." },
    { part: "Label", desc: "Label style, SemiBold. A verb, two words at most." },
    { part: "Trailing icon", desc: "Optional. An arrow for forward navigation or a chevron for menus." },
    { part: "Focus ring", desc: "2px, 2px away. Appears only for keyboard focus." }
  ];

  global.DESIGN_SYSTEM = {
    ICONS: ICONS,
    SECTIONS: SECTIONS,
    TYPEFACE: TYPEFACE,
    TYPE_STYLES: TYPE_STYLES,
    PLATFORMS: PLATFORMS,
    ACCENT: ACCENT,
    ACCENT_SCALE: ACCENT_SCALE,
    NEUTRAL_SCALE: NEUTRAL_SCALE,
    ACCENT_USES: ACCENT_USES,
    STATUS: STATUS,
    COLOR_VARIABLES: COLOR_VARIABLES,
    CONTRAST_PAIRS: CONTRAST_PAIRS,
    VARIABLE_COLLECTIONS: VARIABLE_COLLECTIONS,
    BUTTON_VARIANTS: BUTTON_VARIANTS,
    BUTTON_STATES: BUTTON_STATES,
    STATE_RULES: STATE_RULES,
    BUTTON_SIZES: BUTTON_SIZES,
    ANATOMY: ANATOMY
  };
})(window);
