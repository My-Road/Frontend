import { LoadingButton } from "@mui/lab";
import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";
import { Trans } from "react-i18next";
import { SearchButtonProp } from "./types";

const SearchButton: FC<SearchButtonProp> = ({ disabled, loading }) => {
  return (
    <LoadingButton
      type="submit"
      variant="outlined"
      color="primary"
      endIcon={<SearchIcon />}
      sx={{ minWidth: 100 }}
      disabled={disabled}
      loading={loading}
    >
      <Trans i18nKey="Buttons.search">Search</Trans>
    </LoadingButton>
  );
};

export default SearchButton;