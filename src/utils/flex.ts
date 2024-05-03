import { AlignItemsToken, JustifyContentToken } from '@/types/flex';

const FlexJustifyContentMap = (property: JustifyContentToken) => {
  switch (property) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    case 'evenly':
      return 'space-evenly';
    case 'stretch':
      return 'stretch';
    default:
      return 'normal';
  }
};

const FlexAlignItemsMap = (property: AlignItemsToken) => {
  switch (property) {
    case 'baseline':
      return 'baseline';
    case 'center':
      return 'center';
    case 'end':
      return 'flex-end';
    case 'start':
      return 'flex-start';
    case 'stretch':
      return 'stretch';
    default:
      return 'normal';
  }
};

export { FlexJustifyContentMap, FlexAlignItemsMap };
