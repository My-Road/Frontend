import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import { PaginationProps } from "@/types";
import { User, SearchParams } from "../types";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import GenericDataGrid from "@/components/GenericDataGrid";
import CellUsersActionButton from "@/components/CellActionButton/CellUsersActionButton";
import { useSearchUsersAPI } from "../hooks/useSearchUsersAPI";
import { useToggleUserStatusAPI } from "../hooks/useToggleUserStatusAPI";
import { useChangeUserRoleAPI } from "../hooks/useChangeUserRoleAPI";
import { getGenericGridColumns } from "@/constants/gridColumns";
import { Roles } from "@/enums/Roles";

const getRoleLabel = (role: number) => {
  switch (role) {
    case Roles.FactoryOwner:
      return "FactoryOwner";
    case Roles.Admin:
      return "Admin";
    case Roles.Manager:
      return "Manager";
    default:
      return "";
  }
};

export default function UsersDataGrid({ searchParams }: { searchParams: Partial<SearchParams> }) {
  const { t } = useTranslation();
  const { showConfirmationDialog } = useConfirmationDialog();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(DEFAULT_PAGINATION_PROPS);

  
  const effectiveParams: SearchParams = useMemo(() => ({
    ...searchParams,
    page: paginationModel.page + 1, 
    pageSize: paginationModel.pageSize,
  }), [searchParams, paginationModel]);

  const { data, isLoading } = useSearchUsersAPI(effectiveParams);
  const { toggleUserStatus, isPending } = useToggleUserStatusAPI();
  const { changeUserRole, isPending: rolePending } = useChangeUserRoleAPI();

  const handleToggleStatus = (user: User) => {
    showConfirmationDialog({
      title: user.isActive
        ? t("Dialogs.Title.confirmDeactivate")
        : t("Dialogs.Title.confirmActivate"),
      message: t("Dialogs.confirmUserToggle", {
        name: `${user.firstName} ${user.lastName}`,
      }),
      onConfirm: () => toggleUserStatus(user.id, user.isActive),
    });
  };

  const handleRoleChange = (userId: number, newRole: number) => {
    changeUserRole(userId, newRole);
  };

  const columns: GridColDef<User>[] = [
    getGenericGridColumns(t).id(),
    getGenericGridColumns(t).firstName(),
    getGenericGridColumns(t).lastName(),
    getGenericGridColumns(t).email(),
    getGenericGridColumns(t).phoneNumber(),
    {
      field: "role",
      headerName: t("Tables.Headers.Role"),
      flex: 1,
      renderCell: ({ row }) => (
        <Select
          value={row.role ?? ""}
          onChange={(e) => handleRoleChange(row.id, Number(e.target.value))}
          size="small"
          fullWidth
          disabled={rolePending}
        >
          {Object.values(Roles)
            .filter((v) => typeof v === "number")
            .map((value) => (
              <MenuItem key={value} value={value}>
                {getRoleLabel(value as number)}
              </MenuItem>
            ))}
        </Select>
      ),
    },
    {
      ...getGenericGridColumns(t).actions(),
      renderCell: ({ row }) => (
        <CellUsersActionButton
          row={row}
          isActive={row.isActive}
          onActivate={() => handleToggleStatus(row)}
          onDeactivate={() => handleToggleStatus(row)}
          isPending={isPending}
        />
      ),
    },
  ];

  return (
    <Box width="100%">
      <GenericDataGrid<User>
        rows={data?.items || []}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationChange={setPaginationModel}
        rowCount={data?.totalCount || 0}
        loading={isLoading}
      />
    </Box>
  );
}



