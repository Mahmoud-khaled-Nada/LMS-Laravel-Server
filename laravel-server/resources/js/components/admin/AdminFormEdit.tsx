import { Label } from "@windmill/react-ui";
import { FormContainer } from "../ui/forms/FormContainer";
import InputField from "../ui/input/InputField";
import { router, useForm, usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { FormEventHandler } from "react";
import SingleSelect from "../ui/input/SingleSelect";
import { toast } from "react-toastify";
import { SpinnerButton } from "../ui/buttons/SpinnerButton";
import { AdminParams } from "@/types";

function AdminFormEdit({ adminData }: any) {
    const { t } = useTranslation();
    const { roles } = usePage().props as any;
    const { data, setData, put, processing, errors, reset } =
        useForm<AdminParams>(adminData);

    const submit: FormEventHandler = (e) => {
        if (!adminData.id) return;
        e.preventDefault();
        put(`/admins/update/${adminData.id}`, {
            onSuccess: () => {
                toast.success("Admin updated successfully");
                router.get("/admins");
            },
            onError: () => toast.error("Error updating admin"),
            onFinish: () => reset("name", "email", "password", "role_id"),
        });
    };

    return (
        <FormContainer title={t("create")} submit={submit}>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Label className="mt-4">
                    <span>{t("name")}</span>
                    <InputField
                        name="name"
                        value={data.name}
                        isFocused={true}
                        isError={errors.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </Label>
                <Label className="mt-4">
                    <span>{t("email")}</span>
                    <InputField
                        type="email"
                        name="email"
                        value={data.email}
                        isFocused={true}
                        isError={errors.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                </Label>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Label className="mt-4">
                    <span>{t("roles")}</span>
                    <SingleSelect
                        options={roles}
                        placeholder="Select an option..."
                        onChange={(value) =>
                            setData("role_id", value.toString())
                        }
                    />
                </Label>
                <Label className="mt-4">
                    <span>{t("password")}</span>
                    <InputField
                        type="password"
                        name="password"
                        value={data.password}
                        isFocused={true}
                        isError={errors.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                </Label>
            </div>
            <div className="flex justify-end items-center m-6 gap-3 ">
                <SpinnerButton
                    isLoading={processing}
                    disabled={!data.name || processing}
                    route="/admins"
                />
            </div>
        </FormContainer>
    );
}

export default AdminFormEdit;
