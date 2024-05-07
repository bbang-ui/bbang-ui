import useMediaQuery from '@/hooks/useMediaQuery';

const MD = 1200;
const SM = 767;

function useDeviceType() {
  const isTablet = useMediaQuery(
    `(min-width: ${SM + 1}px) and (max-width: ${MD}px)`,
  );

  const isMobile = useMediaQuery(`(max-width: ${SM}px)`);
  return { isTablet, isMobile };
}

export default useDeviceType;
