import {ColorType} from "./color.model";

export type ColorsContextModel = {
    colors: ColorType[];
    changeRate: (id: string, rate: number) => void;
    deleteColor: (id: string) => void;
    saveColorsHandler: () => void;
    handleAddColor: (title: string, color: string) => void;
}
