import { styled } from "styled-components";
import downloadIcon from "./images/download-02.svg";
import timeIcon from "./images/clock.svg";
import infoIcon from "./images/info-circle.svg";
import checkIcon from "./images/check.svg";
import trashIcon from "./images/trash.svg";
import notSupportedIcon from "./images/no-supported.svg";

const CARD_SPACE = 8;

export const Select = styled('input')`
    appearance: none;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid #FCFCFD;
    background-color: #fff;
    position: absolute;
    top: ${CARD_SPACE*2}px;
    right: ${CARD_SPACE*2}px;
    z-index: 2;
    cursor: pointer;

    &:checked {
        background-color: #101828;
        background-image: url(${checkIcon});
        background-size: 14px;
        background-repeat: no-repeat;
        background-position: center;
        border-color: #101828;
    }
`;

export const Delete = styled('button')`
    position: absolute;
    top: ${CARD_SPACE*2}px;
    right: ${CARD_SPACE*2}px;
    z-index: 2;
    appearance: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    width: 34px;
    height: 34px;
    background-image: url(${trashIcon});
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    &:hover {
        background-color: #fff;
    }
`;

export const CardGalleryWrapper = styled('div')`
    display: flex;
    gap: ${CARD_SPACE}px;
    flex-wrap: wrap;
`;

export const CardImage = styled('img')`
    position: relative;
    object-fit: cover;
    max-width: 100%;
    height: 283px;
    border-radius: ${CARD_SPACE/2}px;
`;

export const Description = styled('div')`
    display: flex;
    flex-direction: row;
`;

export const Title = styled('p')`   
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    height: 24px;
    color: #101828;
    text-align: left;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    margin-right: ${CARD_SPACE}px;
`;

export const Download = styled('button')`
    appearance: none;
    border: none;
    background: none;
    display: flex;
    align-self: flex-end;
    background-image: url(${downloadIcon});
    background-size: 21px;
    background-repeat: no-repeat;
    background-position: center;
    width: 21px;
    height: 21px;
    cursor: pointer;
`;

export const Badge = styled('span')`
    position: absolute;
    top: ${CARD_SPACE*2}px;
    right: ${CARD_SPACE*2}px;
    z-index: 2;
    background-color: #EAECF0;
    border: 1px solid #D0D5DD;
    border-radius: 16px;
    width: fit-content;
    height: 24px;
    line-height: 22px;
    padding-left: 22px;
    padding-right: ${CARD_SPACE}px;
    color: #344054;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 22px;
    text-align: right;
    background-image: url(${timeIcon});
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: ${CARD_SPACE/2}px center;
    padding-left: 22px;

    &.fixing-badge {
        background-image: url(${infoIcon});
        padding-left: ${CARD_SPACE}px;
        background-size: 12px;
        padding-right: 20px;
        background-position: right ${CARD_SPACE/2}px center;
    }
`;

export const CardWrapper = styled('div')`
    display: flex;
    position: relative;
    width: 228px;
    height: 339px;

    gap: ${CARD_SPACE}px;
    flex-direction: column;
    background-color: #fff;
    border-radius: ${CARD_SPACE}px;
    outline: 1px solid #F2F4F7;
    padding: ${CARD_SPACE+2}px ${CARD_SPACE+2}px ${CARD_SPACE * 2+2}px;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

    &:hover {
        outline: 3px solid #000;
    }

    &.unsupported, &.processing {
        border-color: #F2F4F7;

        &:hover {
            outline-color: #F2F4F7;
        }

        &::after {
            content: '';
            position: absolute;
            z-index: 1;
            top: 0px;
            left: 0px;
            bottom: 0px;
            right: 0px;
            border-radius: ${CARD_SPACE/2}px;
            background-color: rgba(229, 229, 229, 0.7);
        }
    }

    &.unsupported {
        &::after {
            content: 'Image is not supported. Refund of 1 credit was returned to you';
            position: absolute;
            z-index: 3;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            padding-top: calc(50% + 35px);
            padding-left: 31px;
            padding-right: 31px;
            background-image: url(${notSupportedIcon});
            background-size: 14px;
            background-repeat: no-repeat;
            background-position: center calc(50% - 35px);
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            font-weight: 700;
            line-height: 18px;
            text-align: center;
            color: #475569;
        }
    }
`;


export const Tools = styled('div')`
    display: flex;
    width: 100%;
    gap: ${CARD_SPACE}px;
    flex-direction: row;
`;