export function isValidCPF(cpf: string): boolean {
  if (typeof cpf !== 'string') return false;

  cpf = cpf.replace(/[\\.\\-]/g, '');

  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;

  const digits = cpf.split('').map(Number);

  const calc = (x: number) => {
    let sum = 0;
    let factor = x + 1;

    for (let i = 0; i < x; i++) {
      sum += digits[i] * factor--;
    }

    const result = 11 - (sum % 11);
    return result > 9 ? 0 : result;
  };

  return calc(9) === digits[9] && calc(10) === digits[10];
}