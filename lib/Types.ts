import { ClassNamesArg } from '@emotion/react';
import { CSSProperties, PropsWithChildren } from 'react';

// Use as const Components = (props: PropsWithChild) => {};
// Implement with "{{...props.style}}"
export type PropsWithChild = PropsWithChildren<{ style?: CSSProperties, className?: ClassNamesArg }>;
