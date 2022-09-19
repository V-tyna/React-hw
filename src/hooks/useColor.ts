import {useEffect, useState,createContext} from "react";
import {ColorType} from "../models/color.model";
import {ColorsContextModel} from "../models/colorsContext.model";

export const useColor = (initColors: ColorType[], formStatus: (status: boolean) => void): ColorsContextModel => {
    const [colors, setColors] = useState(initColors);

    useEffect(() => {
        localStorage.setItem('colors', JSON.stringify(colors));
    }, [colors]);

    const changeRate = (id: string, rate: number) => {
        const updatedColors = colors.concat().map((color: ColorType) => {
            if (color.id === id) {
                color.rating = rate;
            }
            return color;
        });
        setColors(updatedColors);
    }

    const deleteColor = (id: string) => {
        const updatedColors = colors.concat().filter((color: ColorType) => color.id !== id);
        setColors(updatedColors);
    }

    const saveColorsHandler = () => {
        localStorage.setItem('colors', JSON.stringify(colors));
    }

    const handleAddColor = (title: string, color: string) => {
        setColors((prevValue) => prevValue.concat({ id: Math.random().toString(), title, color, rating: 1 }));
        return formStatus(false);
    };

    return {
        colors,
        changeRate,
        deleteColor,
        saveColorsHandler,
        handleAddColor
    };
}
