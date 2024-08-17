import { Link } from '@inertiajs/react';
import { Button, Input, Label } from '@windmill/react-ui';

function ForgotPasswordForm() {
  return (
    <div className="w-full">
      <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Forgot password</h1>

      <Label>
        <span>Email</span>
        <Input className="mt-1" placeholder="Jane Doe" />
      </Label>

      <Button tag={Link} to="/login" block className="mt-4">
        Recover password
      </Button>
    </div>
  );
}

export default ForgotPasswordForm;
