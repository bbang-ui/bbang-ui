import useClipBoard from '@/hooks/useClipBoard';
import { COLORS } from '@/styles/color';
import { PropsWithChildren } from '@/types/default';

import styled from '@emotion/styled';

function Code({ children }: PropsWithChildren) {
  const { isCopy, onCopy } = useClipBoard(String(children));

  return (
    <Wrapper>
      <InWrapper>
        <CodeText>
          <pre>
            <code>{children}</code>
          </pre>
        </CodeText>
        <CopyButton onClick={onCopy}>{isCopy ? '✅' : '📝'}</CopyButton>
      </InWrapper>
    </Wrapper>
  );
}

export default Code;

const Wrapper = styled.div<PropsWithChildren>`
  position: relative;
  width: fit-content;
  padding: 8px;
  padding-left: 10px;
  padding-right: 70px;
  border-radius: 5px;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${COLORS.WHITE};
`;

const InWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CodeText = styled.div`
  white-space: pre-line;
  line-height: 25px;
`;

const CopyButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 8px;
`;
