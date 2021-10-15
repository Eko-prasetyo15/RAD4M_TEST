// export interface Colors {
//     id: number;
//     colorName: string;
//     hexcode: string;
//     saturation: number;
//     category: string;
// }

export interface PropsColors {
    data: DataColors[];
}

export interface DataColors {
    colorName: string;
    hexcode: string;
    category: string;
}