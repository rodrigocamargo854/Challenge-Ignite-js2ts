import { ReactNode } from "react";

export interface Food { 
  id?: number;
  name: string;
  description: string;
  price: string;
  available?: boolean;
  image: string;
}


export interface FoodProps{
  handleEditFood: (food: Food) => void;
  handleDelete: (id?: number) => Promise<void>;
  food: Food;
  id?: number;

}

export interface HeaderProps{
  openModal: () => void;
}

export interface InputProps{
  name : string;
  icon? : any;
  placeholder: string;
}

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface ModalAddFoodProps {
  isOpen: boolean;
  onRequestClose: () => void;
  handleAddFood: (data: Food) => Promise<void>;  
  handleUpdateFood: (data: Food) => Promise<void>;
  editingFood: Food;
}

