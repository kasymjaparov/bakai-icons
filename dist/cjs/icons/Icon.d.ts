import React from 'react';
import { TIconType } from '../types';
export interface IconProps {
    type: TIconType;
    width?: string | number;
    height?: string | number;
    className?: string;
    onClick?: (e: React.MouseEvent<SVGElement>) => void;
    style?: React.CSSProperties;
}
export declare const Icon: React.FC<IconProps>;
