import { Link } from '@inertiajs/react';
import { Button, Label } from '@windmill/react-ui';
import InputField from '../ui/input/InputField';

function ForgotPasswordForm() {
    return (
        <div className="w-full">
            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Forgot password</h1>

            <Label>
                <span>Email</span>
                <InputField
                    type="email"
                    name="email"
                    // value={data.email}
                    // isFocused={true}
                    // isError={errors.email}
                    // onChange={(e) => setData('email', e.target.value)}
                />
            </Label>

            <Link href='/login'>
                <Button block className="mt-4">
                    Recover password
                </Button>
            </Link>
        </div>
    );
}

export default ForgotPasswordForm;
