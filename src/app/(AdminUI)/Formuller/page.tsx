"use client";
import { Grid, MenuItem } from "@mui/material";
import { useState } from "react";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import Formuller from "@/app/components/Formuller/Formuller";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import FormullerOzkaynak from "@/app/components/Formuller/FormullerOzkaynak";

const BCrumb = [
  {
    to: "/Anasayfa",
    title: "Admin Menü",
  },
  {
    to: "/Formuller",
    title: "Formüller",
  },
];

const Page = () => {
  const [denetimTuru, setDenetimTuru] = useState("Bobi");

  const handleChangeDenetimTuru = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDenetimTuru(event.target.value);
  };

  const [finansalTabloAdi, setFinansalTabloAdi] = useState("finansaldurum");

  const handleChangeTabloAdi = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFinansalTabloAdi(event.target.value);
  };

  return (
    <PageContainer title="Formüller" description="this is Formüller">
      <Breadcrumb title="Formüller" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <CustomSelect
            labelId="denetimTuru"
            id="denetimTuru"
            size="small"
            height={"36px"}
            sx={{ marginRight: 2 }}
            value={denetimTuru}
            onChange={handleChangeDenetimTuru}
          >
            <MenuItem value={"Bobi"}>Denetim Türü: Bobi</MenuItem>
            <MenuItem value={"BobiEnflasyon"}>
              Denetim Türü: Bobi Enflasyon
            </MenuItem>
            <MenuItem value={"Tfrs"}>Denetim Türü: Tfrs</MenuItem>
            <MenuItem value={"TfrsEnflasyon"}>
              Denetim Türü: Tfrs Enflasyon
            </MenuItem>
            <MenuItem value={"Kumi"}>Denetim Türü: Kümi</MenuItem>
            <MenuItem value={"KumiEnflasyon"}>
              Denetim Türü: Kümi Enflasyon
            </MenuItem>
            <MenuItem value={"BobiKonsolide"}>
              Denetim Türü: Konsolide Bobi
            </MenuItem>
            <MenuItem value={"BobiKonsolideEnflasyon"}>
              Denetim Türü: Konsolide Bobi Enflasyon
            </MenuItem>
            <MenuItem value={"TfrsKonsolide"}>
              Denetim Türü: Konsolide Tfrs
            </MenuItem>
            <MenuItem value={"TfrsKonsolideEnflasyon"}>
              Denetim Türü: Konsolide Tfrs Enflasyon
            </MenuItem>
          </CustomSelect>
          <CustomSelect
            labelId="finansalTabloAdi"
            id="finansalTabloAdi"
            size="small"
            value={finansalTabloAdi}
            onChange={handleChangeTabloAdi}
            height={"36px"}
          >
            <MenuItem value={"finansaldurum"}>
              Tablo Adı: Finansal Durum
            </MenuItem>
            <MenuItem value={"karzarar"}>Tablo Adı: Kar Zarar</MenuItem>
            <MenuItem value={"nakitakisdogrudan"}>
              Tablo Adı: Nakit Akış Doğrudan Yöntem
            </MenuItem>
            <MenuItem value={"nakitakisdolayli"}>
              Tablo Adı: Nakit Akış Dolaylı Yöntem
            </MenuItem>
            <MenuItem value={"ozkaynak"}>Tablo Adı: Özkaynak</MenuItem>
          </CustomSelect>
        </Grid>
        <Grid item xs={12} lg={12}>
          {finansalTabloAdi == "ozkaynak" ? (
            <FormullerOzkaynak denetimTuru={denetimTuru} />
          ) : (
            <Formuller
              denetimTuru={denetimTuru}
              finansalTabloAdi={finansalTabloAdi}
            />
          )}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Page;
