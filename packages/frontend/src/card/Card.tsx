import classNames from "classnames";
import { CardProps } from "./types.ts";
import { CardImage, Description, Download, Title, Badge, Select, Delete } from "./Card.styled.tsx";
import { CardWrapper } from "./Card.styled.tsx";

export const Card: React.FC<CardProps> = ({ 
    eta, 
    imageUrl, 
    resultImageUrl, 
    status, 
    title,
    mode
}) => {

    //  TODO: when unsupported is defined: uncomment
    const isUnsupported = false; //(resultImageUrl === null); 
    const isFixing = getIsFixing(resultImageUrl);

    const classes = classNames({
        processing: status.toLowerCase() === 'processing',
        unsupported: isUnsupported
    });

  return (
        <CardWrapper className={classes}>
            {getBadge()}
            {getTools()}
            <CardImage src={imageUrl} alt={title} />
            <Description>
                <Title>{title}</Title>
                {getCTA()}
            </Description>
        </CardWrapper>
  );

  function getCTA(): JSX.Element | null {
    if (!resultImageUrl) return null;
    return <Download />;
  }

  function getIsFixing(resultImageUrl: string | null): boolean {
    if (!resultImageUrl) return false;
    return !resultImageUrl.includes('lock=');
  }

  function getBadge(): JSX.Element | null {
    if (mode || isUnsupported) return null;
    if (isFixing) return (
        <Badge className='fixing-badge'>Fixing in progress</Badge>
    );

    if (status === 'COMPLETED') return null;
    let text = 'In progress';
    
    const dueInH = getDeltaHours(eta);
    if (dueInH < 24) {
        text = `Due in ${dueInH} hours`;
    }
    
    return (
        <Badge>{text}</Badge>
    );
  }

  function getDeltaHours(eta: string): number {
    const dueDate = new Date(eta);
    const now = new Date();
    return Math.round((dueDate.getTime() - now.getTime()) / 3600000);
  }

  function getTools(): JSX.Element | null {
    if (!mode) return null;
    if (mode === 'select') return <Select type="checkbox" />;
    return <Delete />;
  }
};
