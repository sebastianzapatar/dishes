import TheMostCalidosoMenu from "../components/Menu";
export default function DishLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="bg-slate-100 overflow-y-auto">
            <div className="flex">
                <TheMostCalidosoMenu />
            </div>
            <div className="w-full text-slate-900 mt-20" >
                
                {children}
            </div>
        </div>

    );
}
