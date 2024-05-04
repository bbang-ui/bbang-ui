import Code from '@/components/Code';

const meta = {
  title: 'Code',
  component: Code,
};

export default meta;

function Component() {
  return (
    <Code>{`return (
  <Wrapper color={color}>
    <InWrapper>
      <CodeText>{children}</CodeText>
      <CopyButton onClick={onCopy}>{isCopy ? '✅' : '📝'}</CopyButton>
    </InWrapper>
  </Wrapper>
);`}</Code>
  );
}

export const Code_ = { render: Component };
