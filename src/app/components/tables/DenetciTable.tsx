import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  Chip,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import BlankCard from "../shared/BlankCard";
import {
  IconCash,
  IconDotsVertical,
  IconEdit,
  IconEye,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import {
  deleteDenetciById,
  getDenetciler,
} from "@/api/DenetciIslemleri/DenetciIslemleri";
import { useRouter } from "next/navigation";

const DenetciTable = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };
  const router = useRouter();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOdemeBilgileri = () => {
    handleClose();
    router.push(`/DenetciFirmaIslemleri/DenetciOdemeBilgileri`);
  };

  const handleKullaniciEkle = () => {
    handleClose();
    router.push(`/DenetciFirmaIslemleri/KullaniciEkle/${selectedId}`);
  };

  const handleDuzenle = () => {
    handleClose();
    router.push(`/DenetciFirmaIslemleri/DenetciDuzenle/${selectedId}`);
  };

  const handleDetay = () => {
    handleClose();
    router.push(`/DenetciFirmaIslemleri/DenetciDetay/${selectedId}`);
  };

  const handleDelete = async () => {
    handleClose();
    try {
      const result = await deleteDenetciById(selectedId || 0);
      if (result) {
        fetchData();
      } else {
        console.error("Denetci silinemedi");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    try {
      const denetciVerileri = await getDenetciler();
      const newRows = denetciVerileri.map((denetci: any) => ({
        id: denetci.id,
        firmaAdi: denetci.firmaAdi,
        firmaUnvani: denetci.firmaUnvani,
        adres: denetci.adres,
        il: denetci.il,
        tel: denetci.tel,
        fax: denetci.fax,
        email: denetci.email,
        web: denetci.web,
        vergiNo: denetci.vergiNo,
        vergiDairesi: denetci.vergiDairesi,
        ticaretSicilNo: denetci.ticaretSicilNo,
        kayitTarihi: denetci.kayitTarihi,
        arsivId: denetci.arsivId,
        aktifmi: denetci.aktifmi,
      }));
      setRows(newRows);
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BlankCard>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Firma Adı</Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Telefon
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  ArşivID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Kayıt Tarihi
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Başlangıç Tarihi
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Bitiş Tarihi
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Durum
                </Typography>
              </TableCell>

              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Typography variant="h6">{row.firmaAdi}</Typography>
                </TableCell>
                <TableCell scope="row">
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {row.tel}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {row.arsivId}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {row.kayitTarihi.split("T")[0]}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {row.baslangicTarihi}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {row.bitisTarihi}
                  </Typography>
                </TableCell>

                <TableCell sx={{ textAlign: "center" }}>
                  <Chip
                    label={row.aktifmi ? "Aktif" : "Pasif"}
                    sx={{
                      backgroundColor: row.aktifmi
                        ? (theme) => theme.palette.success.light
                        : (theme) => theme.palette.error.light,
                      color: row.aktifmi
                        ? (theme) => theme.palette.success.main
                        : (theme) => theme.palette.error.main,
                    }}
                  />
                </TableCell>

                <TableCell>
                  <IconButton
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(event) => handleClick(event, row.id)}
                  >
                    <IconDotsVertical width={18} />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() => handleOdemeBilgileri()}>
                      <ListItemIcon>
                        <IconCash width={18} />
                      </ListItemIcon>
                      Ödeme Bilgileri
                    </MenuItem>
                    <MenuItem onClick={() => handleKullaniciEkle()}>
                      <ListItemIcon>
                        <IconPlus width={18} />
                      </ListItemIcon>
                      Kullanıcı Ekle
                    </MenuItem>
                    <MenuItem onClick={() => handleDuzenle()}>
                      <ListItemIcon>
                        <IconEdit width={18} />
                      </ListItemIcon>
                      Düzenle
                    </MenuItem>

                    <MenuItem onClick={() => handleDetay()}>
                      <ListItemIcon>
                        <IconEye width={18} />
                      </ListItemIcon>
                      Detay
                    </MenuItem>
                    <MenuItem onClick={() => handleDelete()}>
                      <ListItemIcon>
                        <IconTrash width={18} />
                      </ListItemIcon>
                      Sil
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BlankCard>
  );
};

export default DenetciTable;
