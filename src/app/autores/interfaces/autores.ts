export interface ObrasAutor {
    title:     string;
    authors: Autor;
    lines:     string[];
    linecount: number;
}

export interface Autor {
    authors: string[];
}
