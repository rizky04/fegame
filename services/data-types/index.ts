export interface CategoryTypes {
    _id : string;
    name: string;
    _v : number;
}
export interface GameItemTypes {
    _id : string;
    name: string;
    status : string;
    thumbnail: string;
    category: CategoryTypes;
}

export interface BanksTypes{
    _id: string;
    name: string;
    bankName: string;
    noRekening: string;
}

export interface PaymentType{
    _id: string;
    type: string;
    status: string;
    banks: BanksTypes[];
}

export interface NominalsTypes {
    _id: string;
    coinQuantity: number;
    coinName: string;
    price: number;
}

export interface signUpTypes {
    image: string;
    email: string;
    password: string;
    phoneNumber: string;
    username: string;
    name: string;
    role: string;
    status: string;
    favorite:string;
}

export interface loginTypes {
    email: string;
    password: string;
}

export interface UserTypes {
    id : string;
    username: string;
    email: string;
    name: string;
    avatar: string;
}

export interface JWTPayloadTypes {
    player : UserTypes;
    iat: number;
}

export interface NominalItemProps {
    _id: string;
    cointQuantity: number;
    coinName: string;
    price: number;
    onChange: () => void;
  }