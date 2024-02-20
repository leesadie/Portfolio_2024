'use client';

interface ButtonProps {
    label: string;
    outline?: boolean;
}

const AccentButton: React.FC<ButtonProps> = ({
    label,
    outline
}) => {
    return (
        <button
            className={`rounded-full px-4 py-1 
                        ${outline ? 'bg-gray-200': 'bg-secondary'}
                        ${outline ? 'text-neutral-900': 'text-white'}`}
        >
            {label}
        </button>
    );
}

export default AccentButton;