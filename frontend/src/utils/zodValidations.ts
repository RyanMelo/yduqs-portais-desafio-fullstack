import { z } from "zod";

export const nameAnsLastNameValidation = z
  .string()
  .min(1, "Nome é obrigatório")
  .refine((name) => {
    const nameParts = name.trim().split(/\s+/);

    if (nameParts.length < 2) return false;

    const firstName = nameParts[0];
    if (firstName.length < 2 || !/^[a-zA-ZÀ-ÿ]+$/.test(firstName)) return false;

    for (let i = 1; i < nameParts.length; i++) {
      const part = nameParts[i];
      if (part.length < 1 || !/^[a-zA-ZÀ-ÿ]+$/.test(part)) return false;
    }

    return true;
  }, {
    message: "Preencha com o nome e sobrenome",
  });


export const birthdateValidation = z
  .string()
  .min(1, "Data de nascimento é obrigatória")
  .refine((dateStr) => {
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateStr.match(dateRegex);

    if (!match) return false;

    const [, day, month, year] = match;
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    if (monthNum < 1 || monthNum > 12) return false;
    if (dayNum < 1 || dayNum > 31) return false;
    if (yearNum < 1900) return false;

    const birthDate = new Date(yearNum, monthNum - 1, dayNum);

    if (birthDate.getFullYear() !== yearNum ||
      birthDate.getMonth() !== monthNum - 1 ||
      birthDate.getDate() !== dayNum) {
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    birthDate.setHours(0, 0, 0, 0);

    return birthDate.getTime() <= today.getTime();
  }, {
    message: "Data de nascimento inválida",
  });