import {
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    Badge,
    Button,
} from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { MdEdit } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
export const RoleTableDetales = ({ roles }: any) => {
    const { t } = useTranslation();
    return (
        <TableContainer className="mb-8">
            <Table>
                <TableHeader>
                    <tr>
                        <TableCell>{t("name")}</TableCell>
                        <TableCell>{t("actions")}</TableCell>
                    </tr>
                </TableHeader>
                <TableBody>
                    {roles.map((row: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Badge>{row.name}</Badge>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center space-x-4">
                                    <Button layout="link" aria-label="Edit">
                                        <MdEdit
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                        />
                                    </Button>
                                    <Button layout="link" aria-label="Delete">
                                        <BiTrash
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                        />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
