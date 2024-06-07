import { COLORS } from '@/styles/color';
import { Points, Position, useTooltipsProps } from '@/types/tooltip';
import { useEffect, useRef, useState } from 'react';

function useTooltip(props: useTooltipsProps) {
  const [isShow, setIsShow] = useState(false);
  const [points, setPoints] = useState<Points>({ top: 0, left: 0 });
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const toolTipElement = document.getElementById('toolTip') as HTMLElement;

  const {
    content = 'Tooltip box',
    position = 'top',
    delay,
    delayTime = 500,
    disabled,
    customStyles,
  } = props;

  const pointsOffset = { top: points.top, left: points.left };

  const customBackgroundColor = customStyles?.backgroundColor || COLORS.BLACK;

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    if (delay === 'enter') {
      const id = setTimeout(() => {
        setIsShow(true);
      }, delayTime);
      setTimeoutId(id);
    } else {
      setIsShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    if (delay === 'leave' || typeof content === 'object') {
      const id = setTimeout(() => {
        setIsShow(false);
      }, delayTime);
      setTimeoutId(id);
    } else {
      setIsShow(false);
    }
  };

  const getTooltipPosition = (
    wrapperRect: DOMRect,
    tooltipRect: DOMRect,
    position: Position,
  ): Points => {
    const positions = {
      top: {
        top: wrapperRect.top - tooltipRect.height - 8,
        left: wrapperRect.left + wrapperRect.width / 2 - tooltipRect.width / 2,
      },
      topLeft: {
        top: wrapperRect.top - tooltipRect.height - 8,
        left: wrapperRect.left,
      },
      topRight: {
        top: wrapperRect.top - tooltipRect.height - 8,
        left: wrapperRect.left + wrapperRect.width - tooltipRect.width,
      },
      left: {
        top: wrapperRect.top + wrapperRect.height / 2 - tooltipRect.height / 2,
        left: wrapperRect.left - tooltipRect.width - 8,
      },
      leftTop: {
        top: wrapperRect.top,
        left: wrapperRect.left - tooltipRect.width - 8,
      },
      leftBottom: {
        top: wrapperRect.top + wrapperRect.height - tooltipRect.height,
        left: wrapperRect.left - tooltipRect.width - 8,
      },
      bottom: {
        top: wrapperRect.top + wrapperRect.height + 8,
        left: wrapperRect.left + wrapperRect.width / 2 - tooltipRect.width / 2,
      },
      bottomLeft: {
        top: wrapperRect.top + wrapperRect.height + 8,
        left: wrapperRect.left,
      },
      bottomRight: {
        top: wrapperRect.top + wrapperRect.height + 8,
        left: wrapperRect.left + wrapperRect.width - tooltipRect.width,
      },
      right: {
        top: wrapperRect.top + wrapperRect.height / 2 - tooltipRect.height / 2,
        left: wrapperRect.left + wrapperRect.width + 8,
      },
      rightTop: {
        top: wrapperRect.top,
        left: wrapperRect.left + wrapperRect.width + 8,
      },
      rightBottom: {
        top: wrapperRect.top + wrapperRect.height - tooltipRect.height,
        left: wrapperRect.left + wrapperRect.width + 8,
      },
    };

    return positions[position];
  };

  useEffect(() => {
    if (isShow && wrapperRef.current && tooltipRef.current) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const positions = getTooltipPosition(wrapperRect, tooltipRect, position);
      setPoints(positions);
    }
  }, [isShow, position]);

  return {
    content,
    position,
    wrapperRef,
    handleMouseEnter,
    handleMouseLeave,
    disabled,
    isShow,
    tooltipRef,
    pointsOffset,
    toolTipElement,
    customBackgroundColor,
    customStyles,
  };
}

export { useTooltip };
