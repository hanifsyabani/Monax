import prisma from "@/lib/prisma";

export async function POST  (req) {
  const {name, email, phone ,message} = await req.json();

  const data = { name, email, phone, message };
  
  const response = await prisma.message.create({
    data : data
  });

  if(!response) {
    return new Response("Gagal menambahkan data", {status: 500});
  }

  return Response.json({status: 200, message : "Masukkan Terkirim"});
}