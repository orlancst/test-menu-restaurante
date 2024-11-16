export interface Establishment {
    id: number;
    fuullname: string;
    branch: string;
    hq: string;
    code: string;
}

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

// export interface SidebarProps extends Platos {
//     isSidebarOpened: boolean;
//     setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
// }

export interface NavbarProps {
    toggleSidebar: () => void;
    theme: string;
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

export interface Dish {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    categoryName: string;
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
}

export interface OrderCheckCredentials {
    roomNumber: string;
    roomCode: string;
}