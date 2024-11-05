export interface Plato {
    id: number;
    plato: string;
    categoria: string;
    descripcion: string;
    precio: number;
}

export interface Platos {
    products: Plato[];
}

export interface SidebarProps extends Platos {
    isSidebarOpened: boolean;
    setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavbarProps {
    toggleSidebar: () => void;
}

// type Dish = {
//     id: number;
//     plato: string;
//     descripcion: string;
// }

// type CreateDish = Omit<Dish, "plato" | "descripcion">