export default function StoreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 sm:py-0">
            {children}
        </main>
    )
}