import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <main>
            <header>
            </header>
            <article>{children}</article>
        </main>
    );
}
