import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { PaginationProps } from "@/types";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import GenericDataGrid from "@/components/GenericDataGrid";
import { User, SearchParams } from "../types";
import { useSearchUsersAPI } from "../hooks/useSearchUsersAPI";
import { useToggleUserStatusAPI } from "../hooks/useToggleUserStatusAPI";
import { useChangeUserRoleAPI } from "../hooks/useChangeUserRoleAPI";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import { useSnackBar } from "@/hooks/useSnackbar";
import getUsersGridColumns from "./getUsersGridColumns";
import { Roles } from "@/enums/Roles";

export default function UsersDataGrid({ searchParams }: { searchParams: Partial<SearchParams> }) {
  const { t } = useTranslation();
  const { showConfirmationDialog } = useConfirmationDialog();
  const { showErrorSnackbar } = useSnackBar();

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
    const user = data?.items.find((u) => u.id === userId);
    if (!user) return;

    if (user.role === Roles.FactoryOwner) {
      showErrorSnackbar({ message: t("cannotChangeFactoryOwner") });
      return;
    }

    showConfirmationDialog({
      title: t("Dialogs.Title.confirmRoleChange"),
      message: t("Dialogs.confirmRoleChangeMessage", {
        name: `${user.firstName} ${user.lastName}`,
        role: t(`Roles.${newRole}`),
      }),
      onConfirm: () => changeUserRole(userId, newRole),
    });
  };

  const columns = getUsersGridColumns({
    t,
    rolePending,
    handleRoleChange,
    handleToggleStatus,
    isPending,
  });

  return (
    <Box width="100%">
      <GenericDataGrid<User>
        rows={data?.items || []}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationChange={setPaginationModel}
        rowCount={data?.totalCount || 0}
        loading={isLoading}
        height="500px"
      />
    </Box>
  );
}