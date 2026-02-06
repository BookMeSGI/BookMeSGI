// src/atoms/Menu/Menu.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Menu({
  items = [
    { label: "ACCUEIL", href: "#" },
    { label: "COLLECTIONS", href: "#" },
    { label: "CONTACT", href: "#" }
  ],
  brandName = "LIBRAIRIE",
  className = ""
}) {
  const hasContent = items.length > 0 || brandName;
  return /* @__PURE__ */ jsxs("nav", { className: `menu ${!hasContent ? "menu-empty" : ""} ${className}`, children: [
    brandName && /* @__PURE__ */ jsx("div", { className: "menu-brand", children: /* @__PURE__ */ jsxs("span", { className: "menu-logo", children: [
      /* @__PURE__ */ jsx("span", { className: "menu-logo-icon", children: "L" }),
      brandName.slice(1)
    ] }) }),
    items.length > 0 && /* @__PURE__ */ jsx("ul", { className: "menu-nav", children: items.map((item, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: item.href, className: "menu-link font-heading text-paper", children: item.label }) }, index)) })
  ] });
}

// src/atoms/Button/Button.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Button({
  variant = "forest",
  children,
  icon,
  className = "",
  disabled,
  ...props
}) {
  const isBadge = variant.startsWith("badge-");
  const variantClass = disabled ? "btn-disabled" : `btn-${variant}`;
  const badgeClass = isBadge ? "btn-badge" : "";
  return /* @__PURE__ */ jsxs2(
    "button",
    {
      className: `btn ${variantClass} ${badgeClass} ${className}`.trim(),
      disabled,
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx2("span", { className: "btn-badge-icon", children: icon }),
        children
      ]
    }
  );
}
var BadgeIcon = () => /* @__PURE__ */ jsx2("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx2("path", { d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" }) });

// src/atoms/Form/Form.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Checkbox({
  variant = "default",
  label,
  className = "",
  disabled,
  ...props
}) {
  const variantClass = disabled ? "checkbox-disabled" : variant !== "default" ? `checkbox-${variant}` : "";
  return /* @__PURE__ */ jsxs3("label", { className: `checkbox ${variantClass} ${className}`.trim(), children: [
    /* @__PURE__ */ jsx3(
      "input",
      {
        type: "checkbox",
        className: "checkbox-input",
        disabled,
        ...props
      }
    ),
    /* @__PURE__ */ jsx3("span", { className: "checkbox-box", children: /* @__PURE__ */ jsx3("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx3("polyline", { points: "20 6 9 17 4 12" }) }) }),
    label && /* @__PURE__ */ jsx3("span", { className: "checkbox-label", children: label })
  ] });
}
function Input({
  variant = "default",
  className = "",
  disabled,
  ...props
}) {
  const variantClass = disabled ? "input-disabled" : variant !== "default" ? `input-${variant}` : "";
  return /* @__PURE__ */ jsx3(
    "input",
    {
      className: `input ${variantClass} ${className}`.trim(),
      disabled,
      ...props
    }
  );
}
function Select({
  variant = "default",
  options,
  placeholder,
  className = "",
  disabled,
  ...props
}) {
  const variantClass = disabled ? "select-disabled" : variant !== "default" ? `select-${variant}` : "";
  const wrapperVariantClass = disabled ? "select-wrapper-disabled" : variant !== "default" ? `select-wrapper-${variant}` : "";
  return /* @__PURE__ */ jsx3("div", { className: `select-wrapper ${wrapperVariantClass}`.trim(), children: /* @__PURE__ */ jsxs3(
    "select",
    {
      className: `select ${variantClass} ${className}`.trim(),
      disabled,
      ...props,
      children: [
        placeholder && /* @__PURE__ */ jsx3("option", { value: "", children: placeholder }),
        options.map((option) => /* @__PURE__ */ jsx3("option", { value: option.value, children: option.label }, option.value))
      ]
    }
  ) });
}
function FormGroup({
  label,
  helper,
  error,
  warning,
  children,
  className = ""
}) {
  const helperText = error || warning || helper;
  const helperClass = error ? "form-helper-error" : warning ? "form-helper-warning" : "";
  return /* @__PURE__ */ jsxs3("div", { className: `form-group ${className}`.trim(), children: [
    label && /* @__PURE__ */ jsx3("label", { className: "form-label", children: label }),
    children,
    helperText && /* @__PURE__ */ jsx3("span", { className: `form-helper ${helperClass}`.trim(), children: helperText })
  ] });
}

// src/index.ts
var hello = () => "Hello, World!";
export {
  BadgeIcon,
  Button,
  Checkbox,
  FormGroup,
  Input,
  Menu,
  Select,
  hello
};
//# sourceMappingURL=index.js.map