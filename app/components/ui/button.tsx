import { type ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    target?: string;
    rel?: string;
    variant?: 'primary' | 'outline';
};

export function Button({
    children,
    href,
    onClick,
    className = '',
    target,
    rel,
    variant = 'primary',
}: ButtonProps) {
    const baseStyles =
        'inline-flex h-12 items-center justify-center border px-8 font-mono text-xs tracking-widest uppercase transition-all cursor-pointer';

    const variants = {
        primary:
            'border-black/10 bg-black/5 hover:bg-foreground hover:text-background',
        outline:
            'border-black/10 bg-foreground text-background hover:bg-transparent hover:text-foreground',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={combinedClassName}
                target={target}
                rel={rel}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClassName} onClick={onClick} type="button">
            {children}
        </button>
    );
}
