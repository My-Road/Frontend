import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    fontFamily: "Cairo",
    fontSize: 12,
    padding: 30,
    direction: "rtl"
  },
  headerBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    backgroundColor: "#f8f8f8",
    padding: 10,
    marginBottom: 20,
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  companyInfo: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  table: {
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCellHeader: {
    width: "50%",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#000",
    padding: 6,
    fontWeight: "bold",
    backgroundColor: "#eee",
    textAlign: "right",
  },
  tableCell: {
    width: "50%",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#000",
    padding: 6,
    textAlign: "right",
  },
});
