export default function Footer() {
    return (
        <footer className="border-t border-black/5 dark:border-white/5 py-8 text-center text-xs text-neutral-400 transition-colors mt-auto">
            <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p>
                    &copy; {new Date().getFullYear()} Samemaru. All rights
                    reserved.
                </p>
                <a
                    href="#"
                    className="hover:text-black dark:hover:text-white transition"
                >
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
}
