export function Button({ children, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className="w-full flex items-center justify-center gap-2 bg-[#f25c19] text-white py-3.5 px-4 rounded-xl font-bold text-[16px] hover:bg-[#d94e12] active:scale-[0.98] transition-all shadow-lg shadow-orange-500/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#f25c19]"
        >
            {children}
        </button>
    );
}