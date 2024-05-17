import { 
    Home, 
    LineChart, 
    Package, 
    Users2
} from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig =  {
    name: "Fashion Trend",
    description: "Venta de ropa y accesorios de moda para mujeres y hombres.",
    sidebarItems: [
        {
            title: "Inicio",
            href: "/panel",
            icon: Home,
        },
        {
            title: "Productos",
            href: "/panel/productos",
            icon: Package,
        },
        {
            title: "Clientes",
            href: "/panel/clientes",
            icon: Users2,
        },
        {
            title: "Análiticas",
            href: "/panel/analiticas",
            icon: LineChart,
        }
    ],
};