import Appbar from "./Appbar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <>
        <Appbar />
        <main>
            {children}
        </main>
        </>
    );
    }