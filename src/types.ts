
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
    categoryName: string;
}

export interface Dishes {
    dishes: Dish[];
}

export interface CartUser extends Dish {
    cantidad: number;
    comentario?: string;
}

export interface FullCart {
    items: CartUser[];
    hotelRegistryNumber: number | null;
}

export interface SidebarProps extends Dishes {
    isSidebarOpened: boolean;
    setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
    theme: string;
}

export interface Question {
    id: number;
    statement: string;
    answerOptions: string[];
    required: boolean;
}

export type Answers = {
    questionId: number;
    answer: string;
}

export interface DeliveryPoint {
    establishmentId: number;
    roomNumber: string | null;
}

export type Theme = {
    theme: string;
}

export type ThemeAndHQ = {
    theme: string;
    hq: string;
}

export type CartSummaryProps = {
    theme: string;
    cantidad: number;
}

export type DishDetailProps = {
    dish: Dish | null;
    loadDish: boolean;
    onDishErr: string | null;
    isDishDetailOpened: boolean;
    setIsDishDetailOpened: React.Dispatch<React.SetStateAction<boolean>>;
    handleAddToCart: (dish: Dish, cant: number, comment: string, addMore: boolean) => void;
    disableButton: boolean;
    theme: string;
}

export type LoaderMaskProps = {
    loaderMsj: string;
}