import React from "react";
import { Document, Page, Text, View, Font, Image } from "@react-pdf/renderer";
import cairoFont from "@/Fonts/Cairo-Regular.ttf";
import logo from "@/assets/images/logo.png";
import { styles } from "./style";
import { InvoicePDFProps } from "./types";
import { useTranslation } from "react-i18next";

// Register the Arabic font
Font.register({
  family: "Cairo",
  fonts: [{ src: cairoFont }],
});

const InvoicePDF: React.FC<InvoicePDFProps> = ({
  tableData,
  title,
  tableHeader,
}) => {
  const { t } = useTranslation();
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerBox}>
          <View style={styles.topHeader}>
            <Image src={logo} style={styles.logo} />
            <View style={styles.companyInfo}>
              {tableHeader.map((row, index) => (
                <Text key={index}>
                  <Text>{row.label}: </Text>
                  <Text> {String(row.value)}</Text>
                </Text>
              ))}
            </View>
          </View>
        </View>

        <Text style={styles.header}>{t(`Invoice.Titles.${title}`)}</Text>

        <View style={styles.table}>
          <View style={styles.table}>
            {tableData.map((row, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{String(row.value)}</Text>
                <Text style={styles.tableCellHeader}>{row.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
