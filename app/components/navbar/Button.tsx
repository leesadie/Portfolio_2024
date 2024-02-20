'use client';

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className="transition hover:-translate-y-1 hover:opacity-50 text-neutral-900 focus:text-secondary"
        >
            {label}
        </button>
    );
}

export default Button;