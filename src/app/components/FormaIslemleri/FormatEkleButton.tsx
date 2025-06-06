import { Button, Stack } from "@mui/material";
import { IconPlus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const FormatEkleButton = () => {
  const router = useRouter();

  const handleRouteClick = () => {
    router.push("/Formatlar/FormatEkle");
  };

  return (
    <>
      <Stack
        spacing={1}
        direction="row"
        justifyContent="start"
        marginBottom={4}
      >
        <Button
          color="primary"
          onClick={() => handleRouteClick()}
          startIcon={<IconPlus width={18} />}
        >
          Format Ekle
        </Button>
      </Stack>
    </>
  );
};

export default FormatEkleButton;
