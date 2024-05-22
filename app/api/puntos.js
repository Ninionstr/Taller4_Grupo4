// Lager, Lager sin filtrar, Bock, Pale Ale, Trigo]
import { NextResponse } from "next/server";

export const puntos =[
    {id: 1, nombre : "La Cervecería Kunstmann ", coordenadas : [-39.836583, -73.278583], 
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

  


    
];

export async function GET(){
    return new NextResponse.json(puntos);
  }