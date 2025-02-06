import { url } from "../apiBase";

export const getDosyaBilgileri = async (token: string) => {
  try {
    const response = await fetch(`${url}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      console.error("Dosya Bilgileri getirilemedi");
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};

export const getGenelHesapPlani = async (token: string, tip: string) => {
  try {
    const response = await fetch(`${url}/Mizan/GenelHesapPlani?tip=${tip}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      console.error("Genel Hesap Planı getirilemedi");
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};

export const updateGenelHesapPlaniVerisi = async (
  token: string,
  id: number,
  updatedGenelHesapPlani: any
) => {
  try {
    const response = await fetch(`${url}/Mizan/GenelHesapPlani?id=${id}`, {
      method: "PUT",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedGenelHesapPlani),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};

export const deleteDosyaBilgileri = async (token: string, selected: any) => {
  try {
    const response = await fetch(
      `${url}
        `,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selected),
      }
    );

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};
