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

export interface UserCart extends Plato {
    cantidad: number;
    comentario: string;
}

// type Dish = {
//     id: number;
//     plato: string;
//     descripcion: string;
// }

// type CreateDish = Omit<Dish, "plato" | "descripcion">