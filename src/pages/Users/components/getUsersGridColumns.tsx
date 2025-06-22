import { GridColDef } from "@mui/x-data-grid";
import { Select, MenuItem } from "@mui/material";
import { TFunction } from "i18next";
import { User } from "../types";
import { Roles } from "@/enums/Roles";
import CellUsersActionButton from "@/components/CellActionButton/CellUsersActionButton";
import { getGenericGridColumns } from "@/constants/gridColumns";

const getRoleLabel = (role: number) => {
  switch (role) {
    case Roles.Admin:
      return "Admin";
    case Roles.Manager:
      return "Manager";
    default:
      return "";
  }
};

type GetUsersGridColumnsProps = {
  t: TFunction;
  handleRoleChange: (userId: number, newRole: number) => void;
  handleToggleStatus: (user: User) => void;
  isPending: boolean;
  rolePending: boolean;
};

const getUsersGridColumns = ({
  t,
  handleRoleChange,
  handleToggleStatus,
  isPending,
  rolePending,
}: GetUsersGridColumnsProps): GridColDef<User>[] => [
  getGenericGridColumns(t).id(),
  getGenericGridColumns(t).firstName(),
  getGenericGridColumns(t).lastName(),
  getGenericGridColumns(t).email(),
  getGenericGridColumns(t).phoneNumber(),
  {
    field: "role",
    headerName: t("Tables.Headers.Role"),
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => (
      <Select
        value={row.role ?? ""}
        onChange={(e) => {
          const role = Number(e.target.value);
          handleRoleChange(row.id, role);
        }}
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
    minWidth: 120,
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

export default getUsersGridColumns;
