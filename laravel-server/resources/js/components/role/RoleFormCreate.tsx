import { Button, Label } from "@windmill/react-ui";
import { FormContainer } from "../ui/forms/FormContainer";
import InputField from "../ui/input/InputField";
import { useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { FormEventHandler } from "react";
import { SpinnerButton } from "../ui/buttons/SpinnerButton";

function RoleFormCreate() {
    const { t } = useTranslation();
    const { data, setData, post, processing, errors, reset } = useForm({
        permissionsName: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post("/roles", {
            onSuccess: () => reset("permissionsName"),
            onError: (error) => console.error(error),
            onFinish: () => reset("permissionsName"),
        });
    };
    return (
        <FormContainer title={t("create")} submit={submit}>
            <div className="flex flex-col items-center">
                <Label className="w-full max-w-[50%]">
                    <span>{t("permession")}</span>
                    <InputField
                        name="permissionsName"
                        value={data.permissionsName}
                        isFocused={true}
                        isError={errors.permissionsName}
                        onChange={(e) =>
                            setData("permissionsName", e.target.value)
                        }
                    />
                </Label>
                {/* Buttons */}
                <div className="flex justify-center items-center m-6 gap-3 w-full max-w-[50%]">
                    <SpinnerButton
                        isLoading={processing}
                        disabled={!data.permissionsName || processing}
                        route="/roles"
                    />
                </div>
            </div>
        </FormContainer>
    );
}

export default RoleFormCreate;
