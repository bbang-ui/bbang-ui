type Options = Array<{ index: string; value: string }>;

type SelectProps = {
  value?: string | null;
  options: Options;
  onChange?: (value: string) => void;
};

export type { Options, SelectProps };
