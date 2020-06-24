export interface IImageDimensions {
    height: number;
    width: number;
}

export interface IImageObj {
    image: IImageDimensions;
    size: number;
}

export interface IFile {
    contentType: string;
    details: IImageObj;
    fileName: string;
    url: string;
}

export interface IImage {
    file: IFile;
    title: string;
    description: string;
}
