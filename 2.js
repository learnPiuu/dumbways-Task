function hitunghuruf(angka, kalimat) 
{
 var jmlh = 0;
 for (var posisi= 0; posisi < kalimat.length; posisi++) 
 {
    if (kalimat.charAt(posisi) == angka) 
      {
      jmlh += 1;
      }
  }
  return jmlh;
}
)

