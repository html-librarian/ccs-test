import { memo } from "react";
import { IconWrapper } from "../IconWrapper";

interface ISearchSearch {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}

export const SearchIcon = memo<ISearchSearch>(({width="24", height="24", fill="#9B9591", stroke="#9B9591"}) => (
  <IconWrapper>
    <svg width={width} height={height} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="21.354" y="20" width="11.8561" height="2" rx="1" transform="rotate(42.6122 21.354 20)" fill={fill} />
        <circle cx="12.5" cy="12.5" r="11.5"  strokeWidth="2" stroke={stroke} />
    </svg>
  </IconWrapper>
));