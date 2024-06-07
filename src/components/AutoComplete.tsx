import { Options, SelectProps } from '@/types/autoComplete';
import styled from '@emotion/styled';
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

const EMPTY_VALUE = [{ index: '404', value: 'No Options.' }];

function AutoComplete(props: SelectProps) {
  const [item, setItem] = useState<Options>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [prevSelectedIndex, setPrevSelectedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [, setIsElementAtTop] = useState(false);
  const [isElementAtBottom, setIsElementAtBottom] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const { value, options, onChange } = props;

  if (listRef.current !== null && item[0].value === '404') {
    listRef.current.style.pointerEvents = 'none';
  }

  /**
   * @name  handleOpen
   * @description 옵션을 오픈하는 함수
   */
  const handleOpen = (e: MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
    if (isOpen === false && inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  /**
   * @name  handleBlur
   * @description 값을 선택하지 않을 때 옵션을 닫는 함수
   */
  const handleBlur = () => {
    if (onChange) {
      onChange('');
      setIsOpen(false);
    }
    if (Array.isArray(options)) {
      const optionsList = options.map((val) => val);
      setItem(optionsList);
    }
  };

  /**
   * @name  handleSelect
   * @param label 문자열
   * @param index 숫자
   * @param e li 태그 마우스 이벤트
   * @description 아이템 선택 함수
   */
  const handleSelect = (
    label: string,
    index: number,
    e?: MouseEvent<HTMLLIElement>,
  ) => {
    e?.preventDefault();
    if (onChange) {
      onChange(label);
      setSelectedIndex(index);
      setIsOpen(false);
    }
  };

  /**
   * @name  searchItem
   * @param e input태그 Change 이벤트
   * @description 아이템을 검색하는 함수
   */

  const searchItem = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value);

    if (Array.isArray(options)) {
      const filterItem = options.filter((val) =>
        val.value.toLowerCase().includes(e.target.value.toLowerCase()),
      );
      if (!filterItem.length) return setItem(EMPTY_VALUE);
      setItem(filterItem);
      setIsOpen(true);
    }
  };

  /**
   * @name  handleKeyDown
   * @param e - input태그 키보드 이벤트
   * @description 키보드 입력을 인지하는 함수
   */
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setIsOpen(true);
        if (selectedIndex < item.length - 1) {
          setSelectedIndex((prevIndex) => prevIndex + 1);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        setIsOpen(true);
        if (selectedIndex > 0) {
          setSelectedIndex((prevIndex) => prevIndex - 1);
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex !== -1 && item) {
          handleSelect(item[selectedIndex].value, selectedIndex);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  /**
   * @name  getTextWidth
   * @param text 문자열
   * @returns 문자열 width 길이
   * @description 문자열 길이 측정하는 함수
   */
  const getTextWidth = (text: string) => {
    const element = document.createElement('canvas');
    const context = element.getContext('2d');

    if (!context) return 0;

    // measureText : 글자의 넓이를 반환
    const metrics = context.measureText(text);

    return metrics.width;
  };

  /**
   * @name  getLongestTextWidth
   * @param options 배열
   * @returns 가장 큰 문자열 길이 + 46
   * @description 문자열에서 가장 긴 문자열을 찾는 함수, +46을 한 이유는 CSS 요소적인걸로 길이가 길어져서
   * 추가적으로 더함.
   */
  const getLongestTextWidth = useCallback((options: Options) => {
    let maxWidth = 0;
    for (let option of options) {
      const textWidth = getTextWidth(option.value);
      maxWidth = Math.max(maxWidth, textWidth);
    }
    return Math.ceil(maxWidth) + 46;
  }, []);

  // 처음 렌더링 되면 데이터 세팅
  useEffect(() => {
    if (Array.isArray(options)) {
      const optionsList = options.map((val) => val);
      setItem(optionsList);
    }
  }, [options]);

  // 입력 값이 없을 때, item index 초기화
  useEffect(() => {
    if (value === '') {
      setSelectedIndex(-1);
      setPrevSelectedIndex(-1);
    }
    if (value) setPrevSelectedIndex(selectedIndex);
  }, [value]);

  // 선택한 아이템 스크롤 찾아가는 로직
  useEffect(() => {
    if (listRef.current && selectedIndex !== -1) {
      const selectedElement = listRef.current.childNodes[
        selectedIndex
      ] as HTMLLIElement;

      if (selectedElement) {
        const scrollContainer = listRef.current;
        const elementTop = selectedElement.offsetTop;
        const elementBottom = elementTop + selectedElement.offsetHeight;
        const containerTop = scrollContainer.scrollTop;
        const containerBottom = containerTop + scrollContainer.offsetHeight;

        if (elementTop < containerTop) scrollContainer.scrollTop = elementTop;

        if (elementBottom > containerBottom) {
          scrollContainer.scrollTop =
            elementBottom - scrollContainer.offsetHeight;
        }
      }
    }
  }, [selectedIndex, isOpen]);

  // 텍스트의 길이에 따라 Select 컴포넌트의 길이 자동으로 조절
  useEffect(() => {
    if (containerRef.current !== null && item) {
      containerRef.current.style.width = `${getLongestTextWidth(item)}px`;
    }
  }, [getLongestTextWidth, item]);

  // ul태그 브라우저에서 가려지면 위치 변경
  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        const { top, bottom } = listRef.current.getBoundingClientRect();

        const isAtTop = top <= 0;
        const isAtBottom = bottom >= window.innerHeight;

        if (isAtTop) {
          setIsElementAtTop(isAtTop);
          setIsElementAtBottom(false);
        }
        if (isAtBottom) {
          setIsElementAtTop(false);
          setIsElementAtBottom(isAtBottom);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper ref={containerRef}>
      <Input
        ref={inputRef}
        value={value || ''}
        onChange={searchItem}
        onBlur={handleBlur}
        onMouseDown={(e) => handleOpen(e)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
        placeholder='Select Movie'
      />
      <Button isOpen={isOpen} onMouseDown={(e) => handleOpen(e)} />
      {item && isOpen && (
        <Items ref={listRef} isElementAtBottom={isElementAtBottom}>
          {item.map((val, index) => (
            <Item
              key={val.value}
              index={index}
              selectedIndex={selectedIndex}
              prevSelectedIndex={prevSelectedIndex}
              onMouseDown={(e) => handleSelect(val.value, index, e)}
            >
              {val.value}
            </Item>
          ))}
        </Items>
      )}
    </Wrapper>
  );
}

export default AutoComplete;

const Wrapper = styled.div`
  position: relative;
  transition: all 1s ease-in-out;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 5px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  font-size: 1rem;
  overflow: auto;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #000;
  }

  &:focus {
    border-color: #2e8b57;
  }
`;

const Button = styled.button<{ isOpen: boolean }>`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 5px;
  bottom: 8px;

  background-image: url('../icons/ArrowDropdown.svg');
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;
  transform: ${({ isOpen }) =>
    isOpen ? `scale(1, -1)` : `transform: scale(-1, 1);`};
  transition: all 0.3s ease-in-out;

  &:hover {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Items = styled.ul<{ isElementAtBottom: boolean }>`
  width: 100%;
  height: fit-content;
  max-height: 200px;
  position: absolute;
  top: ${({ isElementAtBottom }) => (isElementAtBottom ? `auto` : `32px`)};
  bottom: ${({ isElementAtBottom }) => (isElementAtBottom ? '32px' : '')};

  border: 1px solid #2e8b57;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;

const Item = styled.li<{
  index: number;
  selectedIndex: number;
  prevSelectedIndex: number;
}>`
  cursor: pointer;
  padding: 5px;

  background-color: ${({ index, selectedIndex, prevSelectedIndex }) => {
    if (index === selectedIndex) return `rgba(0, 0, 0, 0.1)`;
    else if (index === prevSelectedIndex) return `#2e8b5696`;
    else return 'transparent';
  }};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
