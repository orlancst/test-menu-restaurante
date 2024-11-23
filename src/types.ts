
export interface NavbarProps {
    toggleSidebar: () => void;
    theme: string;
}

// type Dish = {
//     id: number;
//     plato: string;
//     descripcion: string;
// }

// type CreateDish = Omit<Dish, "plato" | "descripcion">

export interface Dish {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    category: {
        id: number;
        name: string;
        sortOrder: number;
    };
}

export interface Dishes {
    dishes: Dish[];
}

export interface CartUser extends Dish {
    cantidad: number;
    comentario?: string;
}

export interface SidebarProps extends Dishes {
    isSidebarOpened: boolean;
    setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
    theme: string;
}
