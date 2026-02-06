import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

interface MenuItem {
    label: string;
    href: string;
}
interface MenuProps {
    items?: MenuItem[];
    brandName?: string;
    className?: string;
}
declare function Menu({ items, brandName, className, }: MenuProps): react_jsx_runtime.JSX.Element;

type ButtonVariant = "forest" | "forest-outline" | "paper" | "paper-outline" | "primary" | "disabled" | "badge-forest" | "badge-error" | "badge-warning";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: ReactNode;
    icon?: ReactNode;
}
declare function Button({ variant, children, icon, className, disabled, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;
declare const BadgeIcon: () => react_jsx_runtime.JSX.Element;

type CheckboxVariant = "default" | "error" | "warning" | "disabled";
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    variant?: CheckboxVariant;
    label?: string;
}
declare function Checkbox({ variant, label, className, disabled, ...props }: CheckboxProps): react_jsx_runtime.JSX.Element;
type InputVariant = "default" | "error" | "warning" | "disabled";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: InputVariant;
}
declare function Input({ variant, className, disabled, ...props }: InputProps): react_jsx_runtime.JSX.Element;
type SelectVariant = "default" | "error" | "warning" | "disabled";
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    variant?: SelectVariant;
    options: {
        value: string;
        label: string;
    }[];
    placeholder?: string;
}
declare function Select({ variant, options, placeholder, className, disabled, ...props }: SelectProps): react_jsx_runtime.JSX.Element;
interface FormGroupProps {
    label?: string;
    helper?: string;
    error?: string;
    warning?: string;
    children: React.ReactNode;
    className?: string;
}
declare function FormGroup({ label, helper, error, warning, children, className, }: FormGroupProps): react_jsx_runtime.JSX.Element;

declare const hello: () => string;

export { BadgeIcon, Button, Checkbox, FormGroup, Input, Menu, Select, hello };
