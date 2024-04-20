import { Children, isValidElement } from 'react';

/**
 * Function : getChildren
 *
 * [Description]
 * children 값에서 element만 반환해주는 함수
 *
 * @param children
 * @returns children
 */
function getChildren(children: React.ReactNode) {
  return Children.toArray(children).filter((child) =>
    isValidElement(child),
  ) as React.ReactElement[];
}

export default getChildren;
