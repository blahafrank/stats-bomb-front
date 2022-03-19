COMPONENT_NAME=$1
COMPONENT_PROPS_NAME="$1Props"
COMPONENT_STYLES_NAME="styles.$1"


cat  << EOF
import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';

interface $COMPONENT_PROPS_NAME {}

export const $COMPONENT_NAME: FunctionComponent<$COMPONENT_PROPS_NAME> = ({}) => {
    return <div className={$COMPONENT_STYLES_NAME} />;
};
EOF
