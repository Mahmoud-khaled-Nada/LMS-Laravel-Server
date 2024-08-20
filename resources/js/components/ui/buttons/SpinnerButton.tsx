import { Button } from '@windmill/react-ui';
import { useTranslation } from 'react-i18next';
import { Spinners } from '../icons/Spinners';
import { router } from '@inertiajs/react';

type Props = {
  isLoading: boolean;
  disabled?: boolean;
  route: string;
};
export const SpinnerButton = ({ isLoading, disabled, route }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <Button type="submit" iconRight={isLoading ? Spinners : ''} disabled={disabled}>
        {t('save')}
      </Button>
      <Button onClick={() => router.get(route)} layout="outline">
        {t('back')}
      </Button>
    </>
  );
};
