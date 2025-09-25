import { Modality } from "@/types/Courses";

export type EnrollmentData = {
  id?: string,
  totalValue?: number | null
  numberOfInstallments?: number | null
  courseType: Modality,
  name: string
  documentNumber: string
  birthdate: string
  email: string
  phone: string
  highSchoolGraduation: number
  terms: boolean
  whatsAppNotifications?: boolean | null
}

export async function createEnrollment(enrollmentData: EnrollmentData): Promise<EnrollmentData> {
  try {
    const response = await fetch('http://localhost:3001/enrollment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrollmentData),
    });

    if (!response.ok) {
      throw new Error('Failed to create enrollment');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating enrollment:', error);
    throw error;
  }
}
