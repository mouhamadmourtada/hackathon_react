
export default function TextButton({ children, onClick, className = {} }) {
    return (
        <button
            className={` font-semibold  ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

