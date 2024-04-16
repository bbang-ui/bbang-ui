import compact from '@/utils/compact';
import { Children, ReactNode, cloneElement, isValidElement } from 'react';

/**
 * Function : childrenWithProps
 *
 * [Description]
 * 부모 컴포넌트 -> props.children으로 props를 넘겨줄 때 사용하는 함수입니다.
 *
 * [With Function]
 * compact
 *
 * @param children
 * @param props
 * @returns child
 */

function childrenWithProps(children: ReactNode, props: Object) {
  return Children.map(children, function (child) {
    if (isValidElement(child)) {
      return cloneElement(child, compact(props));
    }
    return child;
  });
}

export default childrenWithProps;
