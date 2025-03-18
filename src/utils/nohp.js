export const phoneNumber = "6282121110038"; // Simpan nomor di sini

export const formatPhoneNumber = (phone) => {
  if (!phone) return "";
  phone = phone.replace(/^62/, "0"); // Ganti 62 di depan dengan 0
  return phone.replace(/(\d{4})(?=\d)/g, "$1 - "); // Tambah "-" setiap 4 angka
};

export const getFormattedPhoneNumber = () => formatPhoneNumber(phoneNumber);
