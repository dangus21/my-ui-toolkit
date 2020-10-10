import React from 'react';
import { mut_spacer_mapper } from './styles.module.scss';

export type IProps = {
    width?: number,
    height?: number,
};

export type IPropsMapper = IProps & {
    children: React.ReactNode,
};

export const MUTSpacer = (props: IProps) => {
    return (
        <div style={{ width: props.width, height: props.height }} />
    );
};

export const MUTSpacerMapper = (props: IPropsMapper) => {
    const len = React.Children.count(props.children);
    let current = 0;
    return (
        <div className={mut_spacer_mapper}>
            {
                React.Children.map(props.children, child => {
                    current = current + 1;
                    return (
                        <>
                            {child}
                            {len !== current && <MUTSpacer width={props.width} height={props.height} />}
                        </>
                    )
                })
            }
        </div>
    )
};


MUTSpacer.defaultProps = {
    placeholder: 'Insert Text',
    radius: 'basic',
    password: false,
    showText: false,
    fluid: false,
    wrapperProps: {},
    inputProps: {},
    iconProps: {},
};
