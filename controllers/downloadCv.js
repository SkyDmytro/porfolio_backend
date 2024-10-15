export const downloadCv = (req, res) => {
  const filePath = './assets/CV.pdf';
  res.download(filePath);
}
