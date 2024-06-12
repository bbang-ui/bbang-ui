import {
  BOTTOM,
  BOTTOM_10,
  LEFT,
  LEFT_10,
  LEFT_50,
  RIGHT,
  RIGHT_10,
  TOP,
  TOP_10,
  TOP_50,
  TRANSLATE_X,
  TRANSLATE_Y,
  TRANSLATE_Y_M10,
  TRANSLATE_Y_P10,
} from '@/constants/Position';
import { Position } from '@/types/tooltip';

function getPositionStyles(placement: Position) {
  switch (placement) {
    case 'top':
      return `
        ${TOP}
        ${LEFT_50}
        ${TRANSLATE_X}
      `;
    case 'topLeft':
      return `
        ${TOP}
        ${LEFT_10}
      `;
    case 'topRight':
      return `
        ${TOP}
        ${RIGHT_10}
      `;
    case 'bottom':
      return `
        ${BOTTOM}
        ${LEFT_50}
        ${TRANSLATE_X}
      `;
    case 'bottomLeft':
      return `
        ${BOTTOM}
        ${LEFT_10}
      `;
    case 'bottomRight':
      return `
        ${BOTTOM}
        ${RIGHT_10}
      `;
    case 'left':
      return `
        ${LEFT}
        ${TOP_50}
        ${TRANSLATE_Y}
      `;
    case 'leftTop':
      return `
        ${LEFT}
        ${TOP_10}
        ${TRANSLATE_Y_M10}
      `;
    case 'leftBottom':
      return `
        ${LEFT}
        ${BOTTOM_10}
        ${TRANSLATE_Y_P10}
      `;
    case 'right':
      return `
        ${RIGHT}
        ${TOP_50}
        ${TRANSLATE_Y}
      `;
    case 'rightTop':
      return `
        ${RIGHT}
        ${TOP_10}
        ${TRANSLATE_Y_M10}
      `;
    case 'rightBottom':
      return `
        ${RIGHT}
        ${BOTTOM_10}
        ${TRANSLATE_Y_P10}
      `;
    default:
      return '';
  }
}

function getArrowStyles(placement: Position, backgroundColor: string) {
  switch (placement) {
    case 'top':
      return `border-color: ${backgroundColor} transparent transparent transparent;`;
    case 'topLeft':
    case 'topRight':
      return `border-color: ${backgroundColor} transparent transparent transparent;`;
    case 'bottom':
      return `border-color: transparent transparent ${backgroundColor} transparent;`;
    case 'bottomLeft':
    case 'bottomRight':
      return `border-color: transparent transparent ${backgroundColor} transparent;`;
    case 'left':
    case 'leftTop':
    case 'leftBottom':
      return `border-color: transparent transparent transparent ${backgroundColor};`;
    case 'right':
    case 'rightTop':
    case 'rightBottom':
      return `border-color: transparent ${backgroundColor} transparent transparent;`;
    default:
      return '';
  }
}

function ArrowConvert(placement: Position, backgroundColor: string) {
  const positionStyles = getPositionStyles(placement);
  const arrowStyles = getArrowStyles(placement, backgroundColor);

  return `
    ${positionStyles}
    ${arrowStyles}
  `;
}

export { ArrowConvert };
