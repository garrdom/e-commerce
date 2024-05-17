'use client';
import { Button } from '@mui/material';

// --------------------------------------------------------------------

type Props = {
  error: Error;
  onReset: () => void
};

// --------------------------------------------------------------------

export default function ErrorBoundary(props: Props) {
  const { error, onReset } = props;

  return (
    <div>
      {error.message} <Button onClick={onReset}>Try again</Button>
    </div>
  );
}
