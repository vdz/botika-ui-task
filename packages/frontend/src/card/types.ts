export interface CardProps {
    id: string;
    eta: string;
    imageUrl: string;
    resultImageUrl: string | null;
    status: string;
    title: string;
    mode?: string;
}